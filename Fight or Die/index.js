const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;


const app = express();
app.use(express.urlencoded({
  extended:false
}));

app.use(cors());

//define the static folder for resources
app.use(express.static('resources'));

///////
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});
/////////

//setting up web pages using the Get method
app.get('/game',(req, res)=>{
  res.sendFile(__dirname+'/resources/pages/gamePage.html');
});

app.get('/login',(req, res)=>{
  res.sendFile(__dirname+'/resources/pages/loginPage.html');
});

app.get('/register',(req, res)=>{
  res.sendFile(__dirname+'/resources/pages/registerPage.html');
});

app.get('/registerFail',(req, res)=>{
  res.sendFile(__dirname+'/resources/pages/registerFailedPage.html');
});

//add loginform method
app.post('/loginform', (req, res)=>{
  if(req !=null){
    console.log("Username: " + req.body.fname);
    console.log("Password: " + req.body.lname);

    const username = req.body.fname;
    const lastname = req.body.lname;

    if((username == "user1")&&(lastname == "game")){
      res.redirect('/game');
    }else{
      res.sendFile(__dirname+'/resources/pages/loginFailedPage.html');
    }

  }else{
      res.sendFile(__dirname+'/resources/pages/loginFailedPage.html');
    }
  
});

//add loginform method
app.post('/registerform', (req, res)=>{
  if(req !=null){
    console.log("Username: " + req.body.fname);
    console.log("Password: " + req.body.lname);

    const usernameReg = req.body.fname;
    const lastnameReg = req.body.lname;

    if((usernameReg == '')||(lastnameReg == '')){
      res.redirect('/registerFail');
    }else{
      res.sendFile(__dirname+'/resources/pages/registerSuccessful.html');
    }

  }else{
      res.sendFile(__dirname+'/resources/pages/loginFailedPage.html');
    }
  
});

//index page
/*app.get('/index', (req, res)=>{
  res.sendFile(__dirname+'/index.html');
});*/

//404 page redirect
app.get('*', (req, res)=>{
  res.status(404).sendFile(__dirname+'/resources/pages/404.html');
});



app.listen(3000, () => {
  console.log('server started on http://localhost:3000');
});