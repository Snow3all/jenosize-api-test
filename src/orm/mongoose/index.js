const mongoose = require('mongoose');

const { mongoURI } = require('../../../src/configs/var');

const mongooseConnect = async () => {
  try {
    await mongoose
      .connect(mongoURI)
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.log('MongoErr =>', err));
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  mongooseConnect,
};
