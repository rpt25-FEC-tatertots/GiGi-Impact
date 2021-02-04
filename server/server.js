const app = require('./index.js');

// console.log(app);

let port = 5002

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
