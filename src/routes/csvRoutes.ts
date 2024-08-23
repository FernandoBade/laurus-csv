import express from 'express';
import { upload } from '../utils/fileHandler';
import { uploadCsv } from '../controllers/csvController';

const router = express.Router();

router.post('/upload-csv', upload.single('file'), uploadCsv);

export default router;
