const express = require('express');

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    res.render('index');
});

const midelleware1 = (req, res, next) => {
    if (req.query.age < 18) {
        next();
    }
}
app.get('/aap', midelleware1, (req, res) => {
    res.render("contact");

});

app.get('/', async (req, res) => {
    res.render('form')
})
app.use(midelleware1);

app.get('/', async (req, res) => {
    res.render('form')
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});