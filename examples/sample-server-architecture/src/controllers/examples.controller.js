// NOTE: The controller file calls the appropriate service to perform the required commands
// NOTE: Functions that will be used externally (by the router) MUST be exported


// The call to next(err) in each function MUST be there so that the generic error handler 
// can deal with the error if there is one

import examples from '../services/examples.service.js';

async function get(req, res, next) {
  try {
      res.json(await examples.getMultiple());
  } catch (err) {
      console.error(`Error while getting examples`, err.message);
      next(err);
  }
}

async function getOne(req, res, next) {
    try {
        res.json(await examples.getOne(req.params.id));
    } catch (err) {
        console.error(`Error while getting example`, err.message);
        next(err);
    }
  }
  
  async function create(req, res, next) {
  try {
    res.json(await examples.create(req.body));
  } catch (err) {
    console.error(`Error while creating example`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await examples.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating example`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await examples.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting example`, err.message);
    next(err);
  }
}

export default {
  get,
  getOne,
  create,
  update,
  remove
};
