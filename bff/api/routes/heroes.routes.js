const router = require("express").Router();
const HeroService = require("../heroes/heroes.service.js");

router.get("/heroes", async function (req, res) {
    const response = await HeroService.getAllHeroes(req.query)
    res.status(response.status || 200).json(response.data);
});

module.exports = router