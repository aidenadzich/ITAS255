import { Router } from 'express';
import examplesController from '../controllers/examples.controller.js';

const router = Router();

//NOTE: Add a separate router command for all HTTP verbs used by this router
//NOTE: Parameter does NOT have to be called 'id'

// GET single record example.
router.get('/:id', examplesController.getOne);
  
// GET multiple records example.
router.get('/', examplesController.get);
  
// POST examples
router.post('/', examplesController.create);

// PUT examples
router.put('/:id', examplesController.update);

// DELETE examples
router.delete('/:id', examplesController.remove);

export default router;
// module.exports = router;