//-------------------------------------------------------------------------------------
// This part is configuration, you can make changes here, but make sure they are the same across all occurances.
//-------------------------------------------------------------------------------------

const IconHtml = '<img src="https://benny.decker.games/systems/dnd5e/icons/svg/ability-score-improvement.svg" alt="" style="border: none; width: var(--icon-width, var(--icon-size, 1em)); height: var(--icon-height, var(--icon-size, 1em));"/>'
const ToolIconHtml = '<i class="fas fa-hammer"></i>';

//-------------------------------------------------------------------------------------
// Coding begins here, please do not change.
//-------------------------------------------------------------------------------------

const MacroName = 'travel_checks';
await game.settings.register(MacroName, 'dc', {
    name: 'DC',
    hint: 'Stores the dc entered previously',
    scope: 'client',
    config: false,
    type: Number,
    default: 0,
    filePicker: false,
    requiresReload: false,
});

function printCheck(formdata) {
    let message =
        `
            <div class="dnd5e2 chat-card request-card">
                <header class="summary">
                    <div class="name-stacked border">
                        <span class="title">Navigation Check</span>
                    </div>
                </header>
                <!-- Survival Button -->
                <div class="card-buttons">
                    <button
                        data-type="skill"
                        data-format="long"
                        data-skill="sur"
                        ${formdata.dc !== '' ? `data-dc="${formdata.dc}"` : ''}
                        data-ability="wis"
                        data-action="rollRequest"
                        data-visibility="all">
                        <span class="visible-dc">
                            ${IconHtml}
                            ${formdata.dc !== '' ? `DC ${formdata.dc} ` : ''}Wisdom (Survival)
                        </span>
                        <span class="hidden-dc">
                            ${IconHtml}
                            Wisdom (Survival)
                        </span>
                    </button>
                </div>
                <!-- NavTool Button -->
                <div class="card-buttons">
                    <button
                        data-type="tool"
                        data-format="long"
                        data-tool="navg"
                        ${dc !== '' ? `data-dc="${formdata.dc}"` : ''}
                        data-ability="wis"
                        data-action="rollRequest"
                        data-visibility="all">
                        <span class="visible-dc">
                            ${ToolIconHtml}
                            ${formdata.dc !== '' ? `DC ${formdata.dc} ` : ''}Wisdom (Navigator’s Tools)
                        </span>
                        <span class="hidden-dc">
                            ${ToolIconHtml}
                            Wisdom (Navigator’s Tools)
                        </span>
                    </button>
                </div>
            </div>
        `;

    let chatData = {
        user: game.user.id,
        flavor: 'Roll Request',
        content: message,
        blind: false
    };

    ChatMessage.create(chatData);
}

const popupTemplate = `
<table style="margin: 0">
  <tr>
    <td><label for='dc'>DC</label></td>
    <td><input type='number' id='dc' value='${game.settings.get(MacroName, 'dc')}'></td>
  </tr>
</table>
`;

const IgnoreSavingIds = []

async function action(button, callback) {
    const form = button.form.elements
    const formData = {};

    for (const [key, input] of Object.entries(form)) {
        if (input.tagName === 'BUTTON') {
            continue;
        }
        // not a numbered index
        let properKey = '';
        if (!/^\d+$/.test(key)) {
            properKey = key;
        } else {
            console.log(input, input.id)
            properKey = input.id
        }

        let val;
        if (!input.type || input.type.toLowerCase() !== 'checkbox') {
            val = input.value;
        } else {
            val = input.checked
        }
        formData[properKey] = val;
        if (!IgnoreSavingIds.includes(properKey)) {
            await game.settings.set(MacroName, properKey, val);
        }
    }

    callback(formData);
}

let d = new foundry.applications.api.DialogV2({
    window: {title: 'Navigation Check'},
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