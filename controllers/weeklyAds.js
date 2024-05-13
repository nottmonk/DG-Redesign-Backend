const express = require("express");
const { Ads } = require("../models");

const index = async (req, res, next) => {
  try {
    res.json(await Ads.find({}));
  } catch {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.json(await Ads.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  create,
};
