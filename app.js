const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const expressHbs = require('express-handlebars')
//using pug template engine
//app.set('view engine', 'pug')
//using handlebars template engine
/*
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
app.set('view engine', 'hbs');
*/
app.set('view engine', 'ejs');
app.set('views', 'views');
const adminData = require('./routes/admin')
const userRouter = require('./routes/user')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminData.routes)
app.use(userRouter)

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {docTitle:'Page Not Found'})
})


app.listen(3000)