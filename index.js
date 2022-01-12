const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/projects', (req, res) => res.render('pages/projects'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



//app.get('/', function(request, response){
 //   response.sendFile('index.html');
//});

