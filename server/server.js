const app = require('./index.js');

// console.log(app);

let port = process.env.PORT || 5002; 

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
