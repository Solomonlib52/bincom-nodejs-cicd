const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Bincom Node.js App: CI/CD Pipeline Working!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});