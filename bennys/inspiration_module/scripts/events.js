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
        if (data.type === "openSelectionDialog" && !game.user.isGM) {
            openSelectionDialog(data['targets']);
        }
    });
});

// --- FUNCTION: Open Popup for Players ---
function openSelectionDialog(targets) {
    const buttons = targets.filter(t => t !== game.user.name).map((t) => {
        return {
            action: t,
            label: t,
            callback: () => handleSelection(t),
        }
    });

    new foundry.applications.api.DialogV2({
        window: {title: "Wer soll Inspiration bekommen?"},
        content: `<p>Wähle einen der Spieler aus:</p>`,
        buttons,
    }).render({force: true});
}

// --- FUNCTION: Handle Button Click (player side) ---
function handleSelection(targetName) {
    const playerUser = game.user;

    ui.notifications.info(`Du hast ${targetName} gewählt.`);
    notifyGM(playerUser.name, targetName);
}

// --- FUNCTION: GM receives and posts message ---
async function notifyGM(fromName, toName) {
    const content = `<p>${fromName} hat <h1 style="margin: 0; padding: 0">${toName}</h1> gewählt.</p>`;
    ChatMessage.create({
        content,
        whisper: ChatMessage.getWhisperRecipients("GM"),
        speaker: {alias: "Inspirationsauswahl"}
    });
}