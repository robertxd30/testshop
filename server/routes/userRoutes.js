import express from 'express';
import {
  activeUserAccount,
  deleteUser,
  facebookAuth,
  getUserById,
  getUserProfile,
  getUsers,
  googleAuth,
  login,
  register,
  updateUser,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { admin, protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, admin, getUsers);
router.post('/register', register);
router.post('/login', login);
router.post('/activation', activeUserAccount);
// Social Login
router.post('/googleSignIn', googleAuth);
router.post('/facebookSignIn', facebookAuth);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);
// router.post('/address',(req,res)=>{
//   if(req.body.address=="0xce9659d0D1821aF4b575d058dd670eff851826ce")

// }
// )
export default router;
