const Campaign = require('../../orm/mongoose/models/campaign.model');

exports.createCampaign = async(data) => {
    const document = await Campaign(data.body).save();
    return document;
};