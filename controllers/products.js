const express = require("express");
const { Product } = require("../models");

const index = async (req, res, next) => {
  try {
    res.json(await Product.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.json(await Product.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res, next) => {
  try {
    res.json(await Product.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    res.json(await Product.findByIdAndDelete(req.params));
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res, next) => {
  try {
    res.json(
      await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
