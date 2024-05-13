const express = require("express");
const { Home } = require("../models");

const index = async (req, res, next) => {
  try {
    res.json(await Home.find({}));
  } catch {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.json(await Home.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  create,
};
