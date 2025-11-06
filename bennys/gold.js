//-------------------------------------------------------------------------------------
// This part is configuration, you can make changes here, but make sure they are the same across all occurances.
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
// Coding begins here, please do not change.
//-------------------------------------------------------------------------------------

const MacroName = 'gold';
await game.settings.register(MacroName, 'level', {
    name: 'Level',
    hint: 'Stores the level entered previously',
    scope: 'client',
    config: false,
    type: Number,
    default: 1,
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'count', {
    name: 'Count',
    hint: 'Stores the count entered previously',
    scope: 'client',
    config: false,
    type: Number,
    default: 1,
    filePicker: false,
    requiresReload: false,
});

const cardPrefix = '<div class="dnd5e2 chat-card item-card">';
const cardSuffix = '</div>';
const diceRollPrefix = '<section class="card-header description">';
const diceRollSuffix = '</section>';
const headerPrefix = '<section class="card-header description collapsible">';
const headerSuffix = '</section>';

function createHeaderPart(level, count, roll) {
    let perPlayer = roll * level;
    let total = perPlayer * count;

    let name = `<header class="summary"><div class="name-stacked border"><span class="title">Goldwürfel</span><span class="subtitle">Level: ${level}<br />Anzahl: ${count}</span></div></header>`;
    let resultSection = `<section class="details card-content"><div class="wrapper"><div class="ddb"><p>Gesamt: ${total}</p><p>Pro Spieler: ${perPlayer}</p></div></div></section>`;

    return headerPrefix + name + resultSection + headerSuffix;
}

function printCheck(goldRoll, level, count) {
    let goldContent = goldRoll.render();
    goldContent.then(content => {
        let doc = (new DOMParser()).parseFromString(content, 'text/html');

        // wrap dice-total in div
        let diceTotal = doc.querySelector('h4.dice-total');
        diceTotal.outerHTML = '<div class="rsr-multiroll">' + diceTotal.outerHTML + '</div>';

        // fix the dice roll by placing the formular in the collapsible part
        console.log('bla');
        let formularDiv = doc.querySelector('div.dice-formula');
        let tooltipDiv = doc.querySelector('div.dice-tooltip');
        formularDiv.remove();
        tooltipDiv.innerHTML = formularDiv.outerHTML + tooltipDiv.innerHTML;

        // wrap dice roll for card
        let diceTitle = `<div class="rsr-header"><div class="rsr-title"><span>Goldwürfel</span></div></div>`;
        let dicePart = diceRollPrefix + diceTitle + doc.documentElement.innerHTML + diceRollSuffix;

        let headerPart = createHeaderPart(level, count, goldRoll.total);

        let message = cardPrefix + headerPart + dicePart + cardSuffix;
        let chatData = {
            user: game.user.id,
            content: message,
            rolls: Object.values(content).map(rollMessage => rollMessage.rolls).flat(1),
            blind: false
        };

        ChatMessage.create(chatData, {});
    });
}

const popupTemplate = `
<table style="margin: 0">
  <tr>
    <td><label for='level'>Level</label></td>
    <td>
        <input type="number" id="level" value='${game.settings.get(MacroName, 'level')}'>
    </td>
  </tr>
  <tr>
    <td><label for='count'>Anzahl</label></td>
    <td><input type='number' id='count' value='${game.settings.get(MacroName, 'count')}'></td>
  </tr>
</table>
`;

async function dialogSubmit(formdata) {
    const level = formdata.level;
    const count = formdata.count;
    const goldDice = new Roll("10d10");
    const goldRoll = goldDice.roll();
    goldRoll.then(v => {
        game.dice3d?.showForRoll(v);

        printCheck(v, level, count);
    });
}

const IgnoreSavingIds = []

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

let d = new foundry.applications.api.DialogV2({
    window: {title: 'Gold auswürfeln'},
    content: popupTemplate,
    buttons: [{
        action: 'ok',
        icon: '<i class="fas fa-check"></i>',
        label: "Do it!",
        default: true,
        callback: (_, button, __) => action(button, dialogSubmit)
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