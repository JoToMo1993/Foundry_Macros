/*
 * The Smite macro emulates the Divine Smite feature of Paladins in DnD 5e. A spell slot level to use
 * can be selected, which increases the number of damage dice, and smiting a fiend or undead
 * will also increase the number of damage dice.
 *
 * If a token is not selected, the macro will default back to the default character for the Actor.
 * This allows for the GM to cast the macro on behalf a character that possesses it,
 * without requiring that a PC have their character selected.
 * To execute the macro a target MUST be specified and, unless configured otherwise, the character must have an available spell slot.
 * Make your regular attack and then if you choose to use Divine Smite, run this macro.
 */

(() => {
    //Configurable variables
    let maxSpellSlot = 5; //  Highest spell-slot level that may be used.

    let confirmed = false;

    // Get options for available slots
    let optionsText = "";
    let i = 1;
    for (; i < maxSpellSlot; i++) {
        optionsText += `<option value="${i}">${spellSlotLevelToText(i)}</option>`;
    }

    // Create a dialogue box to select spell slot level to use when smiting.
    new Dialog({
        title: "Divine Smite: Usage Configuration",
        content: `
    <form id="smite-use-form">
        <p>` + game.i18n.format("DND5E.AbilityUseHint", {name: "Divine Smite", type: "feature"}) + `</p>
        <div class="form-group">
            <label>Spell Slot Level</label>
            <div class="form-fields">
                <select name="slot-level" id="spellSlot">` + optionsText + `</select>
            </div>
        </div>

        <div class="form-group">
            <label class="checkbox">
            <input type="checkbox" id="criticalCheckbox"/>` + game.i18n.localize("DND5E.CriticalHit") + `</label>
        </div>

        <div class="form-group">
            <label class="checkbox">
            <input type="checkbox" id="undeadCheckbox"/>Undead or Fiend</label>
        </div>
    </form>
    `,
        buttons: {
            one: {
                icon: '<i class="fas fa-check"></i>',
                label: "SMITE!",
                callback: () => confirmed = true
            },
            two: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel",
                callback: () => confirmed = false
            }
        },
        default: "Cancel",
        close: html => {
            if (confirmed) {
                let slotLevel = parseInt(document.getElementById("spellSlot").value);
                const criticalHit = document.getElementById("criticalCheckbox").checked;
                const undeadOrFiend = document.getElementById("undeadCheckbox").checked;
                smite(slotLevel, criticalHit, undeadOrFiend);
            }
        }
    }).render(true);

    function spellSlotLevelToText(spellSlotLevel) {
        return spellSlotLevel === 4 ? CONFIG.DND5E.spellLevels[4] + " or higher" : CONFIG.DND5E.spellLevels[spellSlotLevel];
    }

    /**
     * Use the controlled token to smite the targeted token.
     * @param {integer} slotLevel - the spell slot level to use when smiting.
     * @param {boolean} criticalHit - whether the hit is a critical hit.
     * @param {boolean} undeadOrFiend - whether the target is undead or fiend.
     */
    async function smite(slotLevel, criticalHit, undeadOrFiend) {
        let numDice = slotLevel + 1;
        if (undeadOrFiend) numDice += 1;
        if (criticalHit) numDice *= 2;

        const flavor = `<strong>Divine Smite</strong> - ${spellSlotLevelToText(slotLevel)} Spell Slot ${criticalHit ? "| Critical hit" : ""} ${undeadOrFiend ? "| Undead or Fiend" : ""}`;
        let damageRoll = new Roll(`${numDice}d8`).roll();

        damageRoll.then(roll => {
            roll.render()
                .then(damageRollContent => {
                    console.log(damageRollContent);
                    roll.toMessage({
                        speaker: ChatMessage.getSpeaker(),
                        content: `
                            <div class=\"convenient-effects-chat-header\">${flavor}</div>
                            <hr class=\\"convenient-effects-fancy-hr\\">
                            <div class="convenient-effects-chat-description">
                                ${game.i18n.localize("DND5E.DamageRoll")} (${game.i18n.localize("DND5E.DamageRadiant")}):
                            </div>
                            ${damageRollContent}`
                    }, {create: false})
                        .then(message => ChatMessage.create(message, {}));
                });
        });
    }
})();
