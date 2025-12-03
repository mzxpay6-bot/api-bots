import { playersCache } from "./playersCache.js";

export default function handler(req, res) {
    const { userId } = req.query;

    if (!userId || !playersCache[userId]) {
        return res.status(404).json({ error: "Jogador não encontrado" });
    }

    return res.status(200).json({ userId, followers: playersCache[userId].followers });
}
