import express from 'express';
const router = express.Router();

import * as bookcontroller from '../controller/book.controller.js';

router.post("/save",bookcontroller.save);
router.get("/fetch",bookcontroller.fetch);
router.delete("/delete",bookcontroller.deleteuser)
router.patch("/update",bookcontroller.updateuser);

export default router;