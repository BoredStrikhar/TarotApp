const Router = require('express')
const cardController = require('../controllers/card.controller')
const router = new Router()

router.post("/card", cardController.createCard);
router.get("/card", cardController.getCards);
router.get("/card/:id", cardController.getOneCard);
router.put("/card/:id", cardController.updateCard);
router.delete("/card/:id", cardController.deleteCard);

module.exports = router