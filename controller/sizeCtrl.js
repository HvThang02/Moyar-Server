const Size = require("../models/sizeModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");

const createSize = asyncHandler(async (req, res) => {
  try {
    const newSize = await Size.create(req.body);
    res.json(newSize);
  } catch (error) {
    throw new Error(error);
  }
});

const updateSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const updateSize = await Size.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateSize);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteSize = await Size.findByIdAndDelete(id);
    res.json(deleteSize);
  } catch (error) {
    throw new Error(error);
  }
});

const getSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaSize = await Size.findById(id);
    res.json(getaSize);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllSize = asyncHandler(async (req, res) => {
  try {
    const getAllSize = await Size.find();
    res.json(getAllSize);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSize,
  updateSize,
  deleteSize,
  getSize,
  getAllSize,
};
