const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/img'))
app.use('/css', express.static(__dirname + 'public/js'))

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



//app.get('/', function(request, response){
 //   response.sendFile('index.html');
//});

