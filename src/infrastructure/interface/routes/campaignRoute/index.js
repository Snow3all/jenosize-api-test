const { Router, Request, Response } = require('express');
const {
  getCampaign,
  getCampaignById,
  createCampaign,
} = require('../../../../app/use_cases/campaign_use_case');
const {
  campaignValidate,
} = require('../../../../app/middlewares/validators/campaign.validator');
const {
  responseCode,
} = require('../../../../app/middlewares/services/responseCode');

const router = Router();

router.route('/campaign').get(async (req, res, next) => {
  try {
    const queries = req.query;
    const data = await getCampaign(queries);
    return res.status(200).json(responseCode(200, data));
  } catch (e) {
    return res.status(400).json(responseCode(400, {}, e));
  }
});

router.route('/campaign').post(async (req, res, next) => {
  try {
    const isValid = await campaignValidate(req.body);
    if (isValid.value) {
      const data = await createCampaign(req);
      return res.status(200).json(responseCode(200, data));
    } else {
      return res
        .status(200)
        .json(responseCode(200, {}, isValid.details[0].message));
    }
  } catch (e) {
    return res.status(400).json(responseCode(400, {}, e));
  }
});

module.exports = router;
