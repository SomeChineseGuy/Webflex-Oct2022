const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const PORT = 9001;
const app = express();

// Middleware
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

// Burger, Fries, Coke
// Bacon Cheese Burger, Poutine, Root Beer
// Avocado Toast, Salad, Cold Press Juice

const combos = {
  1: {
    main: 'Burger',
    side: 'Fries',
    drink: 'Coke'
  },
  2: {
    main: 'Bacon Cheese Burger',
    side: 'Poutine',
    drink: 'Root Beer'
  },
  3: {
    main: 'Avocado Toast',
    side: 'Salad',
    drink: 'Cold Press Juice'
  }
}

app.get('/', (req, res) => {
  res.send("<h1>Goodbye Everyone! </h1>")
})

app.get('/combos', (req, res) => {
  const templateVars = {combos}
  res.render('combos', templateVars)
})


app.get('/combos/add', (req, res) => {
  res.render('add')
})

app.post('/combos/add', (req, res) => {
  const combo = req.body
  const size = Object.keys(combos).length + 1;
  combos[size] = combo
  res.redirect('/combos')
})

app.post('/combos/delete/:id', (req, res) => {
  console.log(req.params.id)
  const userInput = req.params.id
  delete combos[userInput]
  res.redirect('/combos')
})

app.post('/combos/edit/:id', (req, res) => {
  const userInput = req.params.id
  const combo = req.body
  combos[userInput] = combo
  res.redirect('/combos')
})

app.get('/combos/:id', (req, res) => {
  const userInput = req.params.id;
  const templateVars = { combo: combos[userInput] };
  if(combos[userInput]) {
    res.render('combo', templateVars)
  }
  res.redirect('/combos')
})


app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});