import express from 'express';
const router = express.Router();

import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from './handler';

router.post('/', async (request, response) => {
  try {
    const result = await createUser(request.body);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const result = await getAllUsers();
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const result = await getUser(request.params.id);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    const result = await updateUser(request.body, request.params.id);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const result = await deleteUser(request.params.id);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});
export default router;
