import express from 'express';
import multer from 'multer';
import fs from 'fs';
import csvParser from 'csv-parser';

const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('csvFile'), (req, res) => {
  try {
    const filePath = req.file?.path;

    if (!filePath) {
      return res.status(400).send('Arquivo não encontrado');
    }

    const results: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
        res.send('Upload e processamento bem-sucedidos');
      });
  } catch (error) {
    res.status(500).send('Erro ao processar o upload');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
