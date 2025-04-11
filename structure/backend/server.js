const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); 

app.get('/api/properties', async (req, res) => {
    try {const response = await axios.get('https://api.idxbroker.com/clients/featured', {
            headers: { 'accesskey': `BVBmhgV4eJVxmEkX@B9HMr` }
        
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar imóveis' });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));