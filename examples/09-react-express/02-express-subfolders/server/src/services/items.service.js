// const db = require('./db.service');
// const helper = require('../utils/helper.util');
// const config = require('../configs/general.config');

import data from '../../data/items.json' with { type: 'json'};

async function getMultiple(){
    //return multiple items
    return (data);
}

async function get(value) {
  return (data[value]);
}

async function create(itemInfo) {
    //Use ORM or native SQL insert statement to insert values from itemInfo into database

    let message = 'Error in creating item';
    console.log(`Inserting ${itemInfo}`);

    //check here if insert was successful
    if (true) {
      message = 'item created successfully';
    }

    return {message, itemInfo};
}

async function update(id, itemInfo) {
    //Use ORM or native SQL update statement to update values from itemInfo into database

  let message = 'Error in updating item';
  console.log(`Updating item ${id} with ${itemInfo}`);

    //check here if update was successful
    if (true) {
    message = 'item updated successfully';
  }

  return {message, itemInfo, id};
}

async function remove(id){
    //Use ORM or native SQL insert statement to insert values from itemInfo into database

    let message = 'Error in deleting item';
    console.log(`Deleting item ${id}`);

    //Check if delete successful
    if (true) {
        message = 'item deleted successfully';
    }

    return {message};
}

export {
  getMultiple,
  get,
  create,
  update,
  remove
}
