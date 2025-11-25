import * as persons from '../services/persons.service.js';

async function get(req, res, next) {
  try {
      res.json(await persons.get(req));
  } catch (err) {
      console.error(`Error while getting persons`, err.message);
      next(err);
  }
}

export {
  get
};
