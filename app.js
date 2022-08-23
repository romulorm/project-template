//Carregando módulos
const express = require('express')
const hbs = require('express-handlebars')
const session = require('express-session')
const flash = require('express-flash')
const pjson = require('./package.json')

const app = express()

//Session
app.use(session({
    secret: "VMJNVSDVFS09asiuhfsidhfsdafsdha34343443412",
    resave: true,
    saveUninitialized: true
}))

//Flash
app.use(flash())

//Middleware variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

//Body Parser
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

//Handlebars
    app.engine('handlebars', hbs.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    //app.set('views', path.join(__dirname, 'views'))

// Static files (css, img, js)
    app.use(express.static('public'));

// Main page
app.get('/', (req, res) => {
    res.render('index')
    })



// WEB server initialize
    var appname = "App name"
    var version = pjson.version
    var port = process.env.PORT || 3000
    var url = 'http://localhost'

    app.listen(port, () => console.log(`${appname} ${version} executando no endereço ${url}:${port}`))