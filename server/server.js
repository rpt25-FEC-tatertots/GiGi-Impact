const app = require('./index.js');

// console.log(app);

let port = 6002

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
