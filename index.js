const express = require('express');
const app = express();

const router = express.Router();

router.get('/feedback', function(req, res) {
  res.render('feedback', {
    pageTitle: 'Feedback',
    pageID: 'Home'
  });
});

app.set('view engine', 'ejs');

app.set('views', 'app/views');
