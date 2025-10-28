//NOTE: At least some of these are likely needed to provide database connection or general utility functions 
//NOTE: needed by multiple routes/controllers

// NOTE: Functions that will be used externally (by the router) MUST be exported

// import db from './db.service';
// import helper from '../utils/helper.util';
// import config from '../configs/general.config';

async function getMultiple(){
  //TODO: Call the appropriate ORM/SQL to select all of the items you wish to retrieve

  //TODO: Check error being returned and either throw an error or set value to return

  return ([{
      id: 1,
      name: "example",
      value: "A value"
    },{
      id: 2,
      name: "example",
      value: "B value"
    },{
      id: 3,
      name: "example",
      value: "C value"
    }
  ]);
}

async function getOne(exampleId){
  //TODO: Call the appropriate ORM/SQL to select the item you wish to retrieve

  //TODO: Check error being returned and either throw an error or set value to return

    //return one example
    const exampleReturn = {
        id: exampleId,
        name: "Fancy example",
        value: "ZZZ value"
        }
    return (exampleReturn);
}

async function create(exampleInfo) {
  //TODO: Call the appropriate ORM/SQL to insert the item you wish to retrieve

  //TODO: Check error being returned and either throw an error or set value to return

  const message = 'Error in creating example';

  //check here if insert was successful
  if (true) {
    message = 'example created successfully';
  }

  return {message, exampleInfo};
}

async function update(id, exampleInfo) {
  //TODO: Call the appropriate ORM/SQL to update the item you wish to retrieve

  //TODO: Check error being returned and either throw an error or set value to return

  const message = 'Error in updating example';
  console.log(`Updating example ${id} with ${exampleInfo}`);

  //check here if update was successful
  if (true) {
    message = 'example updated successfully';
  }

  return {message, exampleInfo, id};
}

async function remove(id){
  //TODO: Call the appropriate ORM/SQL to delete the item you wish to retrieve

  //TODO: Check error being returned and either throw an error or set value to return

  const message = 'Error in deleting example';
    console.log(`Deleting example ${id}`);

    //Check if delete successful
    if (true) {
        message = 'example deleted successfully';
    }

    return {message};
}

export default {
  getMultiple,
  getOne,
  create,
  update,
  remove
}
