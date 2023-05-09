const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const port = 2500;

const morgan = require('morgan');
const bodyParser = require('body-parser');
const { get } = require('http');

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/crearproducto' , (req,res) => {
    res.render('televisoresenoferta' , {
        electrodomesticos : [
        {tipo : ' televisor' , origen : ' argentina' , presio : 2000 , stock : 19},
        {tipo : ' licuadora' , origen : ' usa' , presio : 1070 , stock : 5},
        {tipo : ' microondas' , origen : ' gales' , presio : 4000 , stock : 7},
        {tipo : ' lavaropas' , origen : ' qatar' , presio : 3000 , stock : 7},
        {tipo : ' licuadora' , origen : ' botsaina' , presio : 1040 , stock : 20},
        {tipo : ' horno' , origen : ' china' , presio : 700 , stock : 38},
        {tipo : ' plancha' , origen : ' peru' , presio : 12000 , stock : 43},
        {tipo : ' ventilador' , origen : ' bolivia' , presio : 7000 , stock : 12},
        {tipo : ' aire acondicinado' , origen : ' ecuador' , presio : 20 , stock : 5},
        {tipo : ' estufa' , origen : ' madagascar' , presio : 1984 , stock : 5}
        ]
    })
});