const express = require("express");
const { User } = require("../models");

const index = async (req, res, next) => {
  try {
    res.json(await User.find({}));
  } catch {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.json(await User.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res, next) => {
  try {
    res.json(await User.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    res.json(await User.findByIdAndDelete(req.params));
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res, next) => {
  try {
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch {}
};

module.exports = {
  delete: destroy,
  update,
  index,
  create,
  show,
};
