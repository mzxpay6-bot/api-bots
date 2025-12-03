import { playersCache } from "./playersCache.js";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

    const { userId, username, followers } = req.body;

    if (!userId || !username || typeof followers !== "number") {
        return res.status(400).json({ error: "Parâmetros inválidos" });
    }

    // Atualiza ou cria jogador no cache
    playersCache[userId] = {
        userId,
        username,
        followers,
        lastUpdate: Date.now()
    };

    return res.status(200).json({ success: true, player: playersCache[userId] });
}
