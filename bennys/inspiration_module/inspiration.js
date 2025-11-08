// --- MAIN EXECUTION ---
if (game.user.isGM) {
    // Build target list dynamically (non-GM users)
    const targets = game.users.filter(u => !u.isGM).map(u => u.name);

    // GM sends socket message to all players
    game.socket.emit(SOCKET_NAME, {
        type: "openSelectionDialog",
        targets
    });
    ui.notifications.info("Sent selection dialog to all players.");
} else {
    ui.notifications.warn("Only the GM should run this macro.");
}