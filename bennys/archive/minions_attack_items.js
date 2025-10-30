await game.settings.register('minion_attack_macro', 'number_of_minions', {
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
await game.settings.register('minion_attack_macro', 'damage_formula', {
    name: 'Damage formula',
    hint: 'Stores the damage formula entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: '1',
    filePicker: false,
    requiresReload: false,
});

function printCheck(number_of_minions, damage_formula) {
    let multipliedDamageFormular = multiply(damage_formula, number_of_minions);

    let selectedToken = canvas.tokens.controlled[0];
    let selectedActor = selectedToken.actor;

    const minionAttackItemName = 'Angriff von ' + number_of_minions + ' Minions';

    let minionAttackItem = selectedActor.items
        .find(item => {
            console.log(item);
            return item.name === minionAttackItemName && item.system.damage.base.custom.formula === multipliedDamageFormular
        });

    if (minionAttackItem === undefined) {
        let minionAttackItemTemplate = new Item({
            name: minionAttackItemName,
            img: selectedToken.document.texture.src,
            type: Item.TYPES[1],
            system: {
                actionType: 'mwak',
                attack: {
                    bonus: number_of_minions,
                    flat: true
                },
                damage: {
                    base: {
                        bonus: '',
                        custom: {
                            enabled: true,
                            formula: multipliedDamageFormular
                        },
                        scaling: {
                            mode: '',
                            number: null,
                            formula: ''
                        }
                    }
                },
                proficient: 0,
                type: {
                    label: 'Minion Angriff'
                }
            }
        });
        selectedActor.createEmbeddedDocuments('Item', [minionAttackItemTemplate])
            .then(() => {
                minionAttackItem = selectedActor.items
                    .find(item => item.name === minionAttackItemName && item.system.damage.base.custom.formula === multipliedDamageFormular);
                console.log(minionAttackItem);
                minionAttackItem.use({options: {configureDialog: false}, legacy: false});
            });
    } else {
        minionAttackItem.use({options: {configureDialog: false}, legacy: false});
    }
}

function multiply(damage_formula, number_of_minions) {
    return [...damage_formula.matchAll(/(?:^|[+-])(?:\d*D\d+|\d+)/gi)]
        .map(formularParts => formularParts[0])
        .map(formularPart => /^(?<connector>|[+-])(?<dice>\d*D\d+|\d+)/gi.exec(formularPart))
        .map(matches => matches.groups)
        .map(partGroups => partGroups.connector + '' + number_of_minions + '*' + partGroups.dice)
        .join('');
}

const popupTemplate = `
<table>
  <tr>
    <td><label for='number_of_minions'>Anzahl an Minions</label></td>
    <td><input type='number' id='number_of_minions' value='${game.settings.get('minion_attack_macro', 'number_of_minions')}' min='1' max='99'></td>
  </tr>
  <tr>
    <td><label for='damage_formula'>Schadensformel</label></td>
    <td><input type='text' id='damage_formula' value='${game.settings.get('minion_attack_macro', 'damage_formula')}'></td>
  </tr>
</table>
`;

async function dialogSubmit() {
    let number_of_minions = document.getElementById("number_of_minions").value;
    let damage_formula = document.getElementById("damage_formula").value;
    // Save to local storage
    await game.settings.set('minion_attack_macro', 'number_of_minions', number_of_minions);
    await game.settings.set('minion_attack_macro', 'damage_formula', damage_formula);

    printCheck(number_of_minions, damage_formula);
}

if (canvas.tokens.controlled.length > 0) {
    let d = new Dialog({
        title: 'Number of Minions',
        content: popupTemplate,
        buttons: {
            ok: {
                icon: '<i class="fas fa-check"></i>',
                label: "Do it!",
                callback: dialogSubmit
            },
            cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Never mind",
                callback: () => {
                }
            }
        },
        callback: dialogSubmit,
    });
    d.render(true);
} else {
    Dialog.prompt({
        title: 'Fehler',
        content: '<div>Du musst erst ein Token auswählen.</div>',
    });
}