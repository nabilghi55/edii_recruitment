const router = require("express").Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const controller = require("../controllers/admin.controller");

router.get("/biodata", auth, admin, controller.getAllBiodata);
router.delete("/biodata/:id", auth, admin, controller.deleteBiodata);
router.get("/biodata/:id", auth, admin, controller.getBiodataById);
module.exports = router;
