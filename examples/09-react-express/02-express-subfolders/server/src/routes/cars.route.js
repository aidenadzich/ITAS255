import { Router } from 'express';
const router = Router();
import * as carsController from '../controllers/cars.controller.js';

/* GET cars. */
router.get('/:id?', carsController.get);

/* POST cars */
router.post('/', carsController.create);

/* PUT cars */
router.put('/:id', carsController.update);

/* DELETE cars */
router.delete('/:id', carsController.remove);

export default router;