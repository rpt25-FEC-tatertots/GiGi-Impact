const app = require('./index.js');
const compression = require('compression');
app.use(compression());

let port = process.env.PORT || 5002; 

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
