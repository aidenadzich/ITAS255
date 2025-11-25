import { Router } from 'express';
const router = Router();
import * as itemsController from '../controllers/items.controller.js';

/* GET item. */
router.get('/:id?', itemsController.get);

/* POST items */
router.post('/', itemsController.create);

/* PUT items */
router.put('/:id', itemsController.update);

/* DELETE items */
router.delete('/:id', itemsController.remove);

export default router;
