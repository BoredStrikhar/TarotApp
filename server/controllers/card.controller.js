const db = require('../db')

class CardController {
    async createCard(req, res) {
        const {
            name,
            arcana,
            suit,
            yes_or_no,
            image_link,
            common_direct_meaning,
            common_direct_meaning_tags,
            common_inverted_meaning,
            common_inverted_meaning_tags,
            love_direct_meaning,
            love_direct_meaning_tags,
            love_inverted_meaning,
            love_inverted_meaning_tags,
            career_direct_meaning,
            career_direct_meaning_tags,
            career_inverted_meaning,
            career_inverted_meaning_tags,
            health_direct_meaning,
            health_direct_meaning_tags,
            health_inverted_meaning,
            health_inverted_meaning_tags,
        } = req.body;
        const newCard = await db.query(
            `INSERT INTO cards (name,
            arcana,
            suit,
            yes_or_no,
            image_link,
            common_direct_meaning,
            common_direct_meaning_tags,
            common_inverted_meaning,
            common_inverted_meaning_tags,
            love_direct_meaning,
            love_direct_meaning_tags,
            love_inverted_meaning,
            love_inverted_meaning_tags,
            career_direct_meaning,
            career_direct_meaning_tags,
            career_inverted_meaning,
            career_inverted_meaning_tags,
            health_direct_meaning,
            health_direct_meaning_tags,
            health_inverted_meaning,
            health_inverted_meaning_tags) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *`, [
                name,
                arcana,
                suit,
                yes_or_no,
                image_link,
                common_direct_meaning,
                common_direct_meaning_tags,
                common_inverted_meaning,
                common_inverted_meaning_tags,
                love_direct_meaning,
                love_direct_meaning_tags,
                love_inverted_meaning,
                love_inverted_meaning_tags,
                career_direct_meaning,
                career_direct_meaning_tags,
                career_inverted_meaning,
                career_inverted_meaning_tags,
                health_direct_meaning,
                health_direct_meaning_tags,
                health_inverted_meaning,
                health_inverted_meaning_tags,
            ]
        );
        res.json(newCard.rows[0])
    }
    async getCards(req, res) {
        const cards = await db.query('SELECT * FROM cards')
        res.json(cards.rows)
    }
    async getOneCard(req, res) {
        const id = req.params.id
        const cards = await db.query("SELECT * FROM cards where id = $1", [id]);
        res.json(cards.rows[0]);
    }
    async updateCard(req, res) {
        const {
            id,
            name,
            arcana,
            suit,
            yes_or_no,
            image_link,
            common_direct_meaning,
            common_direct_meaning_tags,
            common_inverted_meaning,
            common_inverted_meaning_tags,
            love_direct_meaning,
            love_direct_meaning_tags,
            love_inverted_meaning,
            love_inverted_meaning_tags,
            career_direct_meaning,
            career_direct_meaning_tags,
            career_inverted_meaning,
            career_inverted_meaning_tags,
            health_direct_meaning,
            health_direct_meaning_tags,
            health_inverted_meaning,
            health_inverted_meaning_tags,
        } = req.body;
        const cards = await db.query(
            "UPDATE cards set name = $1, arcana = $2, suit = $3, yes_or_no = $4, image_link = $5, common_direct_meaning = $6, common_direct_meaning_tags = $7, common_inverted_meaning = $8, common_inverted_meaning_tags = $9, love_direct_meaning = $10, love_direct_meaning_tags = $11, love_inverted_meaning = $12, love_inverted_meaning_tags = $13, career_direct_meaning = $14, career_direct_meaning_tags = $15, career_inverted_meaning = $16, career_inverted_meaning_tags = $17, health_direct_meaning = $18, health_direct_meaning_tags = $19, health_inverted_meaning = $20, health_inverted_meaning_tags = $21 where id = $22 RETURNING * ", [
                name,
                arcana,
                suit,
                yes_or_no,
                image_link,
                common_direct_meaning,
                common_direct_meaning_tags,
                common_inverted_meaning,
                common_inverted_meaning_tags,
                love_direct_meaning,
                love_direct_meaning_tags,
                love_inverted_meaning,
                love_inverted_meaning_tags,
                career_direct_meaning,
                career_direct_meaning_tags,
                career_inverted_meaning,
                career_inverted_meaning_tags,
                health_direct_meaning,
                health_direct_meaning_tags,
                health_inverted_meaning,
                health_inverted_meaning_tags,
                id,
            ]
        );
        res.json(cards.rows[0])
    }
    async deleteCard(req, res) {
        const id = req.params.id;
        const cards = await db.query("DELETE FROM cards where id = $1", [id]);
        res.json(cards.rows[0]);
    }
}

module.exports = new CardController()