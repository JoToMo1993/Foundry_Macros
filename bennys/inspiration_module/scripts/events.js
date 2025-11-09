// --- CONFIGURATION ---
const SOCKET_NAME = "module.inspiration";

// --- INITIALIZE SOCKET HANDLER ---
Hooks.once("ready", () => {
    if (!game.socket) return;

    // Prevent duplicate handlers if the macro is run multiple times
    if (game.modules.get("inspiration_flag")) return;
    game.modules.set("inspiration_flag", true);

    console.log("Initialize Inspiration");

    game.socket.on(SOCKET_NAME, async (data) => {
        console.log("Inspiration:", data);
        if (data.type === "openSelectionDialog" && !game.user.isGM) {
            openSelectionDialog(data.targets);
        }

        if (data.type === "playerSelected" && game.user.isGM) {
            notifyGM(data.from, data.to);
        }
    });
});

// --- FUNCTION: Open Popup for Players ---
function openSelectionDialog(targets) {
    const buttons = {};
    for (const t of targets) {
        buttons[t] = {
            label: t,
            callback: () => handleSelection(t)
        };
    }
    buttons[0].default = true

    new foundry.applications.api.DialogV2({
        window: {title: "Select a Player"},
        content: `<p>Please choose one of the following players:</p>`,
        buttons,
    }).render({force: true});
}

// --- FUNCTION: Handle Button Click (player side) ---
function handleSelection(targetName) {
    const playerUser = game.user;

    game.socket.emit(SOCKET_NAME, {
        type: "playerSelected",
        from: playerUser.name,
        to: targetName
    });

    ui.notifications.info(`You selected ${targetName}.`);
}

// --- FUNCTION: GM receives and posts message ---
async function notifyGM(fromName, toName) {
    const content = `<p><strong>${fromName}</strong> selected <strong>${toName}</strong>.</p>`;
    ChatMessage.create({
        content,
        whisper: ChatMessage.getWhisperRecipients("GM"),
        speaker: {alias: "Selection Notification"}
    });
}