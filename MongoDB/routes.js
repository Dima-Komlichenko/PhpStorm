const express = require("express");
const router = express.Router();

const  cSlider = require("controllers/SliderController");
router.get("/api/slider",cSlider.get);
router.get("/api/slider",cSlider.post);

module.exports = router;