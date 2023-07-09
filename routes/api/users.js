const express = require("express");

const {
  register,
  login,
  current,
  logout,
  changeData,
  updateAvatar,
  deleteAvatar,
} = require("../../controllers/usersControllers");
const { userValidation } = require("../../middlewares/userValidation");
const { authentificate } = require("../../middlewares/authentificate");
const { validateBody } = require("../../helpers/validateBody");
const { schemas } = require("../../models/users");
const uploadCloud = require("../../middlewares/upload");

const router = express.Router();

router.post("/register", userValidation, register);
router.post("/login", userValidation, login);
router.get("/current", authentificate, current);
router.get("/logout", authentificate, logout);
router.patch(
  "/data",
  validateBody(schemas.addSchema),
  authentificate,
  changeData
);

router.patch(
  "/avatar",
  authentificate,
  uploadCloud.single("image"),
  updateAvatar
);

router.delete("/avatar", authentificate, deleteAvatar);

module.exports = router;
