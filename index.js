const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 3003, () => {
    console.log("Server running on port 3003");
});