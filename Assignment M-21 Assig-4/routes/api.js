import express from "express";
import * as UserController from "../src/controllers/UserController.js"
import AuthMiddleware from "../src/middlewares/AuthMiddleware.js"
const router=express.Router();



//user
router.post('/Registration',UserController.Registration);
router.get('/Login',UserController.Login);
router.get('/ReadProfile',AuthMiddleware,UserController.ReadProfile);
router.get('/ReadAllProfile',AuthMiddleware,UserController.ReadAllProfile);
router.post('/UpdateProfile',AuthMiddleware,UserController.UpdateProfile);
router.post('/DeleteProfile',AuthMiddleware,UserController.DeleteProfile);



export default router;
