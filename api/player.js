import { playersCache } from "./playersCache.js";

export default function handler(req, res) {
    const players = Object.values(playersCache).map(p => ({
        userId: p.userId,
        username: p.username,
        followers: p.followers
    }));
    return res.status(200).json({ players });
}
