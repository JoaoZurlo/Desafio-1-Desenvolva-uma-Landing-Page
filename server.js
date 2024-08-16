import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());  // Isso habilita o CORS no servidor Node.js
app.use(bodyParser.json());



app.post('/submit', async (req, res) => {
  try {
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const result = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adiciona cabeçalhos de CORS na resposta
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
