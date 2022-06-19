const express = require('express');
const app = express();
const cors = require('cors');
const tags = require('./tags/YoutubeTags');

const PORT = process.env.PORT || 1056;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/tags', tags);

app.get('/', (req, res) => res.send('Hello, YouTags here!'));
app.listen(PORT, () => console.log(`YouTags from ${PORT}.`));

