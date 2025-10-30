//-------------------------------------------------------------------------------------
// This part is configuration, you can make changes here, but make sure they are the same across all occurances.
//-------------------------------------------------------------------------------------

const IconHtml = '<img src="https://benny.decker.games/systems/dnd5e/icons/svg/ability-score-improvement.svg" alt="" style="border: none; width: var(--icon-width, var(--icon-size, 1em)); height: var(--icon-height, var(--icon-size, 1em));"/>'
const ToolIconHtml = '<i class="fas fa-hammer"></i>';

//-------------------------------------------------------------------------------------
// Coding begins here, please do not change.
//-------------------------------------------------------------------------------------

await game.settings.register('travel_checks', 'dc', {
    name: 'DC',
    hint: 'Stores the dc entered previously',
    scope: 'client',
    config: false,
    type: Number,
    default: 0,
    filePicker: false,
    requiresReload: false,
});

function printCheck(dc) {
    let message =
        `
            <div class="dnd5e2 chat-card request-card">
                <!-- Survival Button -->
                <div class="card-buttons">
                    <button
                        data-type="skill"
                        data-format="long"
                        data-skill="sur"
                        ${dc !== '' ? `data-dc="${dc}"` : ''}
                        data-ability="wis"
                        data-action="rollRequest"
                        data-visibility="all">
                        <span class="visible-dc">
                            ${IconHtml}
                            ${dc !== '' ? `DC ${dc} ` : ''}Wisdom (Survival)
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
                        ${dc !== '' ? `data-dc="${dc}"` : ''}
                        data-ability="wis"
                        data-action="rollRequest"
                        data-visibility="all">
                        <span class="visible-dc">
                            ${ToolIconHtml}
                            ${dc !== '' ? `DC ${dc} ` : ''}Wisdom (Navigator’s Tools)
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
<table>
  <tr>
    <td><label for='dc'>DC</label></td>
    <td><input type='number' id='dc' value='${game.settings.get('travel_checks', 'dc')}'></td>
  </tr>
</table>
`;

async function dialogSubmit() {
    let dc = document.getElementById("dc").value;

    // Save to local storage
    await game.settings.set('travel_checks', 'dc', dc);

    printCheck(dc);
}

let d = new Dialog({
    title: 'Navigation Check',
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
    default: "ok",
});
d.render(true);