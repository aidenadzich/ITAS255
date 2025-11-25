import * as items from '../services/items.service.js';

async function get(req, res, next) {
  try {
    if (!req.params.id) 
      res.json(await items.getMultiple());
    else
      res.json(await items.get(Number(req.params.id)));
  } catch (err) {
      console.error(`Error while getting items`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await items.create(req.body));
  } catch (err) {
    console.error(`Error while creating item`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    console.log(req.body);
    res.json(await items.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating item`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await items.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting item`, err.message);
    next(err);
  }
}

export {
  get,
  create,
  update,
  remove
};
