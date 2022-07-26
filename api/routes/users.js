import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) => {
//   res.send('hello user, you are logged in');
// });
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you are logged in and you can delete your account');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are logged in and you can delete any account');
// });

// UPDATE
router.put('/:id', verifyUser, updateUser);
// DELETE
router.delete('/:id', verifyUser, deleteUser);
// GET
router.get('/:id', verifyUser, getUser);
// GETALL
router.get('/', verifyAdmin, getAllUsers);

export default router;
