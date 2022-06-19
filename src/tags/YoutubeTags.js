const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { title } = req.query;
        const response = await axios.get(`https://rapidtags.io/api/generator?query=${title}&type=YouTube`);
        const tags = response.data.tags ? response.data.tags : [];
        res.send(tags);
    }
    catch (e) {
        res.send([]);
    }
});

router.get('/video', async (req, res) => {
    try {
        const { id } = req.query;
        const ytResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyDg08trhS610R1VeeJp4hyGMaBryjKS_3s&part=snippet`);
        const tags = ytResponse.data.items[0] ? ytResponse.data.items[0].snippet.tags : [];
        res.send(tags && tags.length > 0 ? tags : []);
    }
    catch (e) {
        res.send([]);
    }
});

module.exports = router;