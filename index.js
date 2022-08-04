const express = require('express');
const { validationResult, check, email } = require('express-validator');
var hpp = require('hpp');
const app = express();
//another way to make with joi
app.use(hpp());//hpp always get last email parameter

app.get('/register', check('email').isEmail(), (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.query.email);
    res.send(req.query.email);
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
} );