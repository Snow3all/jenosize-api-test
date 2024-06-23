const { Router, Request, Response } = require("express");
const { createCampaign } = require("../../../app/use_cases/campaign_use_case");
const {
  campaignValidate,
} = require("../../../app/middlewares/validators/campaign.validator");
const { responseCode } = require('../../../app/middlewares/services/responseCode');

const router = Router();

router.route("/create-campaign").post(async (req, res, next) => {
  const isValid = await campaignValidate(req.body);
  if (isValid.value) {
    const data = await createCampaign(req);
    return res.status(200).json(responseCode(200, data));
  } else {
    return res.status(400).json(responseCode(400, {}, isValid.details[0].message));
  }
}),
  (module.exports = router);
