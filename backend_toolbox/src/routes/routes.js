import express from 'express';
import { GetFile, GetFiles, GetList } from '../Controller/Files.js';
const router = express.Router();
router.get("/files/list", GetList)
router.get("/getfiles", GetFiles)
router.get("/files/data", GetFile)

export default router;