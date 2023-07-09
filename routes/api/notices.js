const express = require("express");
const router = express.Router();

const {
  getController,
  getByIdController,
  getByCategoryController,
  getBySearchController,
  patchByIdController,
  addNoticeController,
  getFavoritesController,
  getMyAdsController,
  deleteNoticeController,
  getAdBySearch,
  getFavoriteBySearch,
} = require("../../controllers/noticesControllers");
const { authentificate } = require("../../middlewares/authentificate");
const { validateBody } = require("../../helpers/validateBody");
const { schemas } = require("../../models/notices");
const { isValidId } = require("../../middlewares/isValidId");
const uploadCloud = require("../../middlewares/upload");

router.get("/", getController);
router.get("/notice/:noticeId", getByIdController);
router.get("/search/:category", getBySearchController);
router.get("/category/:category", getByCategoryController);
router.patch(
  "/favorite/:noticeId",
  isValidId,
  authentificate,
  patchByIdController
);
router.get("/favorites", authentificate, getFavoritesController);
router.get("/favorites/search/:title", authentificate, getFavoriteBySearch);

router.post(
  "/addNotice/:category",
  authentificate,
  // validateBody(schemas.addSchema),
  uploadCloud.single("image"),
  addNoticeController
);

router.get("/myads", authentificate, getMyAdsController);
router.get("/myads/search/:title", authentificate, getAdBySearch);
router.delete(
  "/myads/:noticeId",
  isValidId,
  authentificate,
  deleteNoticeController
);

module.exports = router;
