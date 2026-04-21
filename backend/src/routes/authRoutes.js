import express from 'express';
import { signup, login, logout, onboard } from '../controllers/authControllers.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.post("/onboarding", protectRoute, onboard)

router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ user: req.user, success: true })
})

export default router;