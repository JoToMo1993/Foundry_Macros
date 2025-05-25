//-------------------------------------------------------------------------------------
// This part is configuration, you can make changes here, but make sure they are the same across all occurances.
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
// Coding begins here, please do not change.
//-------------------------------------------------------------------------------------

await game.settings.register('pythagoras_macro', 'speed', {
    name: 'Restbewegung',
    hint: 'Stores the remaining movement in feet',
    scope: 'client',
    config: false,
    type: Number,
    default: 30,
    range: {
        min: 1,
        max: 99,
        step: 0.1
    },
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('pythagoras_macro', 'x', {
    name: 'X Distance',
    hint: 'Stores the x distance to the target in feet',
    scope: 'client',
    config: false,
    type: Number,
    default: 10,
    range: {
        min: 1,
        max: 99,
        step: 0.1
    },
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('pythagoras_macro', 'y', {
    name: 'Y Distance',
    hint: 'Stores the y distance to the target in feet',
    scope: 'client',
    config: false,
    type: Number,
    default: 10,
    range: {
        min: 1,
        max: 99,
        step: 0.1
    },
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('pythagoras_macro', 'z', {
    name: 'Z Distance',
    hint: 'Stores the z distance to the target in feet',
    scope: 'client',
    config: false,
    type: Number,
    default: 0,
    range: {
        min: 1,
        max: 99,
        step: 0.1
    },
    filePicker: false,
    requiresReload: false,
});

const popupTemplate = `<div>
    <table>
      <tbody>
        <tr>
          <td>
            <label for="speed">Restbewegung (Fuß)</label>
          </td>
          <td>
            <input id="speed" type="number" value='${game.settings.get('pythagoras_macro', 'speed')}' min='1' max='99' step="1" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="x">Horizontal zum Ziel (Fuß)</label>
          </td>
          <td>
            <input id="x" type="number" value='${game.settings.get('pythagoras_macro', 'x')}' min='1' max='99' step="1" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="y">Vertical zum Ziel (Fuß)</label>
          </td>
          <td>
            <input id="y" type="number" value='${game.settings.get('pythagoras_macro', 'y')}' min='1' max='99' step="1" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="z">Höhenunterschied (Fuß)</label>
          </td>
          <td>
            <input id="z" type="number" value='${game.settings.get('pythagoras_macro', 'z')}' min='1' max='99' step="1" />
          </td>
        </tr>
      </tbody>
    </table>
</div>`;

let inputDialog = new Dialog({
    title: 'Pythagoras',
    content: popupTemplate,
    buttons: {
        ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "Berechne",
            callback: dialogPythagorasSubmit
        },
    }
});
inputDialog.render(true);

async function dialogPythagorasSubmit() {
    let speed = document.getElementById("speed").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let z = document.getElementById("z").value;
    // Save to local storage
    await game.settings.set('pythagoras_macro', 'speed', speed);
    await game.settings.set('pythagoras_macro', 'x', x);
    await game.settings.set('pythagoras_macro', 'y', y);
    await game.settings.set('pythagoras_macro', 'z', z);

    let totalDistance = Math.sqrt(x * x + y * y + z * z);
    let totalFloor = Math.sqrt(x * x + y * y);
    let proportion = speed / totalDistance;
    let xProportion = x * Math.min(proportion, 1);
    let yProportion = y * Math.min(proportion, 1);
    let zProportion = z * Math.min(proportion, 1);
    let floorProportion = totalFloor * Math.min(proportion, 1);

    let message = `
        <div class="dnd5e2 chat-card item-card">
            <section class="card-header description collapsible">
                <header class="summary">
                    <div class="name-stacked border">
                        <span><strong>Pythagoras Berechnung</strong></span>
                    </div>
                </header>
            </section>
            <section class="card-header description rsr-section-attack">
                <div class="rsr-header">
                    <div class="rsr-title">
                        Eingaben
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Restbewegung (Fuß)</th>
                            <td>${game.settings.get('pythagoras_macro', 'speed')}</td>
                        </tr>
                        <tr>
                            <th>Horizontal zum Ziel (Fuß)</th>
                            <td>${game.settings.get('pythagoras_macro', 'x')}</td>
                        </tr>
                        <tr>
                            <th>Vertical zum Ziel (Fuß)</th>
                            <td>${game.settings.get('pythagoras_macro', 'y')}</td>
                        </tr>
                        <tr>
                            <th>Höhenunterschied (Fuß)</th>
                            <td>${game.settings.get('pythagoras_macro', 'z')}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class="card-header description rsr-section-attack">
                <div class="rsr-header">
                    <div class="rsr-title">
                        Ergebnis
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Gesamtstrecke (Fuß)</th>
                            <td>${Math.floor(totalDistance * 100) / 100.0}</td>
                        </tr>
                        <tr>
                            <th>Bewegung auf Boden (Fuß)</th>
                            <td>${Math.floor(floorProportion / 5) * 5}</td>
                        </tr>
                        <tr>
                            <th>Horizontal Strecke (Fuß)</th>
                            <td>${Math.floor(xProportion / 5) * 5}</td>
                        </tr>
                        <tr>
                            <th>Vertical Strecke (Fuß)</th>
                            <td>${Math.floor(yProportion / 5) * 5}</td>
                        </tr>
                        <tr>
                            <th>Höhenunterschied (Fuß)</th>
                            <td>${Math.floor(zProportion / 5) * 5}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    `;

    let chatData = {
        user: game.user.id,
        content: message,
    };

    ChatMessage.create(chatData, {});

}