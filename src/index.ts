import express from 'express';
import session from 'express-session';
const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',function(request,response){
    response.send('Hello pepepe');
});

app.listen(3000,function(request,response){
    console.log('listening at 3000');
});