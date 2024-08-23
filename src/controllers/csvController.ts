import { Request, Response } from 'express';
import { parseCsvFile } from '../services/csvService';

export const uploadCsv = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = req.file.path;
    const data = await parseCsvFile(filePath);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error processing CSV', error });
  }
};
