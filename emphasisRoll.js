const DiceTypes = {
    "d100": 50.5,
    "d20": 10.5,
    "d12": 6.5,
    "d10": 5.5,
    "d8": 4.5,
    "d6": 3.5,
    "d5": 3,
    "d4": 2.5,
    "d3": 2,
    "d2": 1.5
};

function optionOf(dice) {
    return `<option value='${dice}' ${dice === "d20" ? "selected" : ""}>${dice}</option>`;
}

const popupTemplate = `
<table>
  <tr>
    <td><label for='dice'>Dice</label></td>
    <td>
      <select name='dice' id='dice'>
        ${Object.keys(DiceTypes).map(dice => optionOf(dice)).join()}
      </select>
    </td>
  </tr>
</table>
`;

function dialogSubmit() {
    let dice = document.getElementById("dice").value;

    let roll1 = new Roll(dice).roll({async: false})
    game.dice3d?.showForRoll(roll1);
    let roll2 = new Roll(dice).roll({async: false})
    game.dice3d?.showForRoll(roll2);

    let total1 = roll1.total;
    let total2 = roll2.total;

    let dif1 = Math.abs(total1 - DiceTypes[dice]);
    let dif2 = Math.abs(total2 - DiceTypes[dice]);

    let result;
    if (total1 === total2) {
        result = total1;
    } else if (dif1 === dif2) {
        let roll3 = new Roll("d2").roll({async: false});
        game.dice3d?.showForRoll(roll3);
        if (roll3.total === 0) {
            result = total1;
        } else {
            result = total2;
        }
    } else if (dif1 > dif2) {
        result = total1;
    } else {
        result = total2;
    }

    let chatData = {
        user: game.user.id,
        content: `
            <div class=\"convenient-effects-chat-header\"><p><b>Result: ${result}</b></p></div>
            <div class=\"convenient-effects-chat-header\"><p>Roll1: ${total1}</p></div>
            <div class=\"convenient-effects-chat-header\"><p>Roll2: ${total2}</p></div>
        `,
        blind: false
    };

    ChatMessage.create(chatData, {});
}

let d = new Dialog({
    title: 'Roll with emphasis',
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
    }
});
d.render(true);