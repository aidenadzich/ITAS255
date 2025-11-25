import data from '../../data/cars.json' with { type: 'json'};

async function get(req){
  //return 
  let retVal = null;

  console.log(req.params);
  if (!req.params.id) {
      retVal = data;
  } else {
      let carId = Number(req.params.id);
      console.log(data[carId]);
      retVal = data[carId];
  }
  return (retVal);
}

async function getOne(carId){
    //return one car
    carReturn = {
        id: carId,
        name: "Fancy Car",
        wheels: 4
        }
    return (carReturn);
}

async function create(carInfo) {
    //Use ORM or native SQL insert statement to insert values from carInfo into database

    let message = 'Error in creating car';
    console.log(`Inserting ${carInfo}`);

    //check here if insert was successful
    if (true) {
      message = 'car created successfully';
    }

    return {message, carInfo};
}

async function update(id, carInfo) {
    //Use ORM or native SQL update statement to update values from carInfo into database

  let message = 'Error in updating car';
  console.log(`Updating car ${id} with ${carInfo}`);

    //check here if update was successful
    if (true) {
    message = 'car updated successfully';
  }

  return {message, carInfo, id};
}

async function remove(id){
    //Use ORM or native SQL insert statement to insert values from carInfo into database

    let message = 'Error in deleting car';
    console.log(`Deleting car ${id}`);

    //Check if delete successful
    if (true) {
        message = 'car deleted successfully';
    }

    return {message};
}

export {
  getOne,
  get,
  create,
  update,
  remove
}
