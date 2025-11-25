import { Router } from 'express';
const router = Router();
import * as personsController from '../controllers/persons.controller.js';

/* GET person or persons. */
router.get('/:id?', personsController.get);
  
export default router;