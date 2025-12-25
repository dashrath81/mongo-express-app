const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const stuudent = [{
    id: 1,
    name: "John",
}, {
    id: 2,
    name: "Doe",
}
]

app.get('/', async(req,res)=> {
    res.render('index', { stuudent: stuudent });
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});