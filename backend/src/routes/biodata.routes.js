const router = require("express").Router();
const auth = require("../middleware/auth");
const biodata = require("../controllers/biodata.controller");

router.get("/me", auth, biodata.getMyBiodata);
router.post("/", auth, biodata.createOrUpdate);
router.put("/", auth, biodata.createOrUpdate);
module.exports = router;
