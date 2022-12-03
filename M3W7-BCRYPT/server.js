const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs')
const port = 9001;

const cookieSession = require('cookie-session')


const app = express();


app.use(cookieSession({
  name: 'session',
  keys: ['j2k3h423h4k23h', 'j23h4kj23h4k23h4', '1h2jgahsdi12e8'],
}))
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

// helper functions
const genRandomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

const getUserByEmail = (email, users) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }

  return null;
};

// database
const users = {
  abcd: {
    id: 'abcd',
    email: 'alice@gmail.com',
    password: '1234'
  },
  defg: {
    id: 'defg',
    email: 'jstamos@gmail.com',
    password: '5678'
  }
};

const combos = {
  1: {
    main: "Burger",
    side: "Fries",
    drink: "Coke"
  }, 
  2: {
    main: "Club Sandwich",
    side: "Side Salad",
    drink: "Coffee"
  },
  3: {
    main: "Steak",
    side: "Break Poutine",
    drink: "Apple Juice"
  }
}

const checkUser = (req) => {
  const user = req.session.userId
  console.log(user)
}


app.get('/', (req, res) => {
  res.redirect("/menu");
})

// Browse
app.get('/menu', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  

  console.log(req.session)
  if(req.session.userId) {
    const templateVars  = {combos, user};
    req.session.pageViews++
    return res.render('menu', templateVars);
  }

  const templateVars = {error: null}
  
  res.render('register', templateVars);
  
});

app.get('/menu/new', (req, res) => {
  const userId = req.session.userId;
  checkUser(req)
  req.session.pageViews++
  let user;
  userId ?  user = users[userId] : user = null;
  const templateVars  = {combos, user};
  res.render('new', templateVars);
})

// Add new
app.post('/menu/new', (req, res) => {
  const combo = req.body;
  const comboNumber = Object.keys(combos).length + 1;
  combos[comboNumber] = combo;
  res.redirect('/menu');
});

// Read
app.get('/menu/:id', (req, res) => {
  console.log(req.params.id);
  req.session.pageViews++
  const userInput = req.params.id;
  const combo = combos[userInput];
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  const templateVars  = {combos, user};
  !combo ? res.redirect('/menu') : res.render('combo', templateVars);
});

// Delete 
app.post('/menu/:id/delete', (req, res) => {
  const comboId = req.params.id;
  delete combos[comboId];
  res.redirect('/menu');
});

// Edit
app.post('/menu/:id/edit', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  const id = req.params.id;
  const single = req.body;
  combos[id] = single;
  res.redirect('/menu');
})

// User
app.get('/login', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  
  const templateVars  = {combos, user};
  res.render('login', templateVars);
});

app.get('/register', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  
  const templateVars  = {combos, user, error:null};
  res.render('register', templateVars);
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = getUserByEmail(email, users);

  if (!user) {
    return res.send('Error: User does not exist');
  }

  console.log(user.password)
  const result = bcrypt.compareSync(password, user.password)
  if(!result) return res.send("Error : wrong password")

  // res.cookie('userId', user.id);
  req.session.userId = user.id

  res.redirect('/menu');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const id = genRandomId();

  console.log(email, password)
  const salt = bcrypt.genSaltSync();
  const hashed = bcrypt.hashSync(password, salt)

  const currentUser = getUserByEmail(email, users);

  if (currentUser) {
    templateVars = {error: 'a user already has that email'}
    res.render('register', templateVars);
  }

  const newUser = {
    id: id,
    email: email,
    password: hashed
  };

  users[id] = newUser;
  req.session.userId = newUser.id
  req.session.pageViews = 0;
  res.redirect('/menu');
});

app.post('/logout', (req, res) => {
  // res.clearCookie('userId');
  req.session = null;
  res.redirect('/menu');
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});