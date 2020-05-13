const express = require('express');
const stripe = require('stripe')('sk_test_DPmMFFaKvkNccM9WDMVzibea00rRUS95ny');
const bodyParser=require('body-parser');
const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/success',(req,res)=>{
    res.send('success');
})
app.post('/charge',(req,res)=>{
    let token=req.body.striprToken;
    let chargeAmount=2000;
    var charge = stripe.charges.create(
    {
        amount:chargeAmount,
        currency:'INR',
        source:"tok_mastercard"
    },(err,charge)=>{
        if(err)
            console.log(err);
        
        }
    );
    console.log('payment successful');
    res.redirect('/success');
})
app.listen(3000,console.log('started at 3000'));