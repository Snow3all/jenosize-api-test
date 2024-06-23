const { Router, Request, Response } = require("express");
const {
  getCampaign,
  getCampaignById,
  createCampaign,
  editCampaign,
  deleteCampaign,
} = require("../../../../app/use_cases/campaign_use_case");
const {
  campaignValidate,
} = require("../../../../app/middlewares/validators/campaign.validator");
const {
  responseCode,
} = require("../../../../app/middlewares/services/responseCode");

const router = Router();

router.route("/campaign").get(async (req, res, next) => {
  try {
    const queries = req.query;
    const data = await getCampaign(queries);
    return res.status(200).json(responseCode(0, data));
  } catch (e) {
    return res.status(400).json(responseCode(999, {}, e));
  }
});

router.route("/campaign").post(async (req, res, next) => {
  try {
    const isValid = await campaignValidate(req.body);
    if (isValid.value) {
      const data = await createCampaign(req);
      return res.status(200).json(responseCode(0, data));
    } else {
      return res
        .status(200)
        .json(responseCode(997, {}, isValid.details[0].message));
    }
  } catch (e) {
    return res.status(400).json(responseCode(999, {}, e));
  }
});

router.route("/campaign").patch(async (req, res, next) => {
  try {
    const queries = req.query;
    const isValid = await campaignValidate(req.body);
    if (isValid.value) {
      const data = await editCampaign(req, queries);
      return res.status(200).json(responseCode(0, data));
    } else {
      return res
        .status(200)
        .json(responseCode(997, {}, isValid.details[0].message));
    }
  } catch (e) {
    console.log("🚀 ~ router.route ~ e:", e);
    return res.status(400).json(responseCode(999, {}, e));
  }
});

router.route("/campaign").delete(async (req, res, next) => {
  try {
    const queries = req.query;
    const data = deleteCampaign(queries);
    console.log("🚀 ~ router.route ~ data:", data);
    if (data === null) {
      return res.status(200).json(responseCode(998, data));
    } else {
      return res.status(200).json(responseCode(0, data));
    }
  } catch (e) {
    console.log("🚀 ~ router.route ~ e:", e);
    return res.status(400).json(responseCode(400, {}, e));
  }
});

module.exports = router;
