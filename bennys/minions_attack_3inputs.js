const MacroName = 'minion_attack_macro';
await game.settings.register(MacroName, 'number_of_minions', {
    name: 'Number of Minions',
    hint: 'Stores the number of minions entered previously',
    scope: 'client',
    config: false,
    type: Number,
    default: 1,
    range: {
        min: 1,
        max: 99,
        step: 1
    },
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'damage_formula', {
    name: 'Damage formula',
    hint: 'Stores the damage formula entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: '1',
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'attack_formula', {
    name: 'Attack formula',
    hint: 'Stores the attack formula entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: '1',
    filePicker: false,
    requiresReload: false,
});

const DiceNameTranslate = {
    'attack': 'Attack',
    'damage': 'Damage',
}
const DiceIconByRollKey = {
    'attack': '<img src="https://benny.decker.games/systems/dnd5e/icons/svg/trait-weapon-proficiencies.svg" alt="" style="border: none; width: var(--icon-width, var(--icon-size, 1em)); height: var(--icon-height, var(--icon-size, 1em));"/>',
    'damage': '<i class="fas fa-burst"></i>',
}

const cardPrefix = '<div class="dnd5e2 chat-card item-card">';
const cardSuffix = '</div>';
const diceRollPrefix = '<section class="card-header description">';
const diceRollSuffix = '</section>';
const headerPrefix = '<section class="card-header description collapsible">';
const headerSuffix = '</section>';

function printCheck(formdata) {
    let number_of_minions = formdata.number_of_minions;
    let attack_formula = formdata.attack_formula;
    let damage_formula = formdata.damage_formula;

    let modifiedAttackFormula = attack_formula + '+' + (Number(number_of_minions) - 1);
    let multipliedDamageFormula = multiply(damage_formula, number_of_minions);

    let attackRoll = new Roll(modifiedAttackFormula);
    let damageRoll = new Roll(multipliedDamageFormula);

    let attackPromise = attackRoll.render()
        .then(content => rollToMessage(attackRoll, content))
        .then(value => {
            return reformatDiceRollContent('attack', value);
        });
    let damagePromise = damageRoll.render()
        .then(content => rollToMessage(damageRoll, content))
        .then(value => {
            return reformatDiceRollContent('damage', value);
        });

    let selectedToken = canvas.tokens.controlled[0];
    let selectedActor = selectedToken.actor;

    Promise.all([attackPromise, damagePromise])
        .then(rollMessages => {
            let result = {};

            rollMessages.forEach(rollMessage => result[rollMessage.key] = rollMessage.value);

            return result;
        })
        .then(rollMessages => {
            let headerPart = createHeaderPart(selectedToken.document.texture.src, number_of_minions);
            let dicePart = createDicePart(rollMessages);
            let message = cardPrefix + headerPart + dicePart + cardSuffix;

            let chatData = {
                user: game.user.id,
                content: message,
                rolls: Object.values(rollMessages).map(rollMessage => rollMessage.rolls).flat(1),
                blind: false
            };

            ChatMessage.create(chatData, {});
        });
}

function rollToMessage(roll, content) {
    return roll.toMessage({
        speaker: ChatMessage.getSpeaker(),
        content: content,
        rolls: Object.values(content).map(rollMessage => rollMessage.rolls).flat(1),
    }, {create: false});
}

function reformatDiceRollContent(rollKey, value) {
    let doc = (new DOMParser()).parseFromString(value.content, 'text/html');

    // wrap dice-total in div
    let diceTotal = doc.querySelector('h4.dice-total');
    diceTotal.outerHTML = '<div class="rsr-multiroll">' + diceTotal.outerHTML + '</div>';

    // fix the dice roll by placing the formular in the collapsible part
    console.log('bla');
    let formularDiv = doc.querySelector('div.dice-formula');
    let tooltipDiv = doc.querySelector('div.dice-tooltip');
    formularDiv.remove();
    if (tooltipDiv) {
        tooltipDiv.innerHTML = formularDiv.outerHTML + tooltipDiv.innerHTML;
    }

    // wrap dice roll for card
    let diceTitle = `<div class="rsr-header"><div class="rsr-title"><span>${DiceIconByRollKey[rollKey]} ${DiceNameTranslate[rollKey]}</span></div></div>`;
    value.content = diceRollPrefix + diceTitle + doc.documentElement.innerHTML + diceRollSuffix;

    return {key: rollKey, value: value};
}

function createHeaderPart(icon, number_of_minions) {
    let name = `<header class="summary">
        <img class="gold-icon" src="${icon}" alt="Angriff von ${number_of_minions} Minions">
        <div class="name-stacked border">
            <span class="title">Angriff von ${number_of_minions} Minions</span>
            <span class="subtitle">Simple Melee</span>
        </div></header>`;

    return headerPrefix + name + headerSuffix;
}

function createDicePart(rollMessages) {
    return Object.values(rollMessages).map(rollMessage => rollMessage.content).join('');
}

function multiply(damage_formula, number_of_minions) {
    return [...damage_formula.matchAll(/(?:^|[+-])(?:\d*D\d+|\d+)/gi)]
        .map(formularParts => formularParts[0])
        .map(formularPart => /^(?<connector>|[+-])(?:(?<dice>(?<dice_multi>\d*)(?<dice_type>D\d+))|(?<static>\d+))/gi.exec(formularPart))
        .map(matches => matches.groups)
        .map(partGroups => partGroups.connector + '' +
            (partGroups.dice ?
                (partGroups.dice_multi ? (Number(number_of_minions) * Number(partGroups.dice_multi)) : number_of_minions) + partGroups.dice_type : '') +
            (partGroups.static ? (Number(number_of_minions) * Number(partGroups.static)) : '')
        )
        .join('');
}

const popupTemplate = `
<table>
  <tr>
    <td><label for='attack_formula'>Basis Angriffsformel</label></td>
    <td><input type='text' id='attack_formula' value='${game.settings.get(MacroName, 'attack_formula')}'></td>
  </tr>
  <tr>
    <td><label for='damage_formula'>Basis Schadensformel</label></td>
    <td><input type='text' id='damage_formula' value='${game.settings.get(MacroName, 'damage_formula')}'></td>
  </tr>
  <tr>
    <td><label for='number_of_minions'>Anzahl an Minions</label></td>
    <td><input type='number' id='number_of_minions' value='${game.settings.get(MacroName, 'number_of_minions')}' min='1' max='99'></td>
  </tr>
</table>
`;

async function action(button, callback) {
    const form = button.form.elements
    const formData = {};

    for (const [key, input] of Object.entries(form)) {
        // not a numbered index
        if (!/^\d+$/.test(key)) {
            let val;
            if (input.tagName !== 'CHECKBOX') {
                val = input.value;
            } else {
                val = input.checked
            }
            formData[key] = val;
            if (!IgnoreSavingIds.includes(key)) {
                await game.settings.set(MacroName, key, input.value);
            }
        }
    }

    callback(formData);
}

if (canvas.tokens.controlled.length > 0) {
    let d = new foundry.applications.api.DialogV2({
        window: {title: 'Number of Minions'},
        content: popupTemplate,
        buttons: [{
            action: 'ok',
            icon: '<i class="fas fa-check"></i>',
            label: "Do it!",
            default: true,
            callback: (_, button, __) => action(button, printCheck)
        }, {
            action: 'cancel',
            icon: '<i class="fas fa-times"></i>',
            label: "Never mind",
        }],
        submit: () => {
            /* ignored */
        }
    });
    d.render(true);
} else {
    foundry.applications.api.DialogV2.prompt({
        window: {title: 'Fehler'},
        content: '<div>Du musst erst ein Token auswählen.</div>',
    });
}