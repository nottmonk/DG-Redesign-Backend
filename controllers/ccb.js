const express = require("express");
const { Deals } = require("../models");

const index = async (req, res, next) => {
  try {
    res.json(await Deals.find({}));
  } catch {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.json(await Deals.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  create,
};
