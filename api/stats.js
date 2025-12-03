import { playersCache } from "./playersCache.js";

export default function handler(req, res) {
    const players = Object.values(playersCache);
    const totalPlayers = players.length;
    const vipPlayers = players.filter(p => p.followers >= 1000).length;

    return res.status(200).json({ totalPlayers, vipPlayers });
}
