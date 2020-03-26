/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!
**********************/
const dbConfig = {
	host: 'localhost',
	port: 5432, /*idk if we need to change the port? */
	database: '????????',
	user: 'postgres',
	password: '????????'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory



/*********************************
 Below we'll add the get & post requests which will handle:
   - Database access
   - Parse parameters from get (URL) and post (data package)
   - Render Views - This will decide where the user will go after the get/post request has been processed

 Web Page Requests:

  Login Page:
      /LogIn - get request (PARAMETERS)
          This route will make a single query ...

      /LogIn/user_login - post request (PARAMETERS)
          This route will be used for reading in a post request from the user which provides their username and passworkd to log in.
          This route should then render the patient profile page

  Account Creation Page:
      /accountCreation - get request (PARAMETERS)
          This route will ...

      /accountCreation/make_new - post request (PARAMETERS)
          This route will be used for reading in a post request from the user in order to create a profile for them. The data will be passed
          to the database and stored.

  Patient Profile Page:
  		/patient_profile - get request (PARAMETERS)
  				This route will make a single query to the favorite_colors table to retrieve all of the rows of colors
  				This data will be passed to the home view (pages/home)

  Appointment Page:
      /appointmentForm - get request (PARAMETERS)
          This route will ...

      /appointmentForm/update_app - post request (PARAMETERS)
          This route will ...

  Billing Page:
      /billing - get request (PARAMETERS)
          This route will ...

  Home Page:
      /homepage - get request (PARAMETERS)
          This route will ...

  Insurance Page:
      /insurance - get request (PARAMETERS)

  Lab Results Page:
      /labResults - get request (PARAMETERS)

  Prescriptions Page:
      /prescriptions - get request (PARAMETERS)

  Referral Page:
      /referral_from - get request (PARAMETERS)

	Vaccinations Page:
			/vaccinations - get request (PARAMETERS)


************************************/

// login page
app.get('/LogIn', function(req, res) {
	res.render('pages/LogIn',{
		my_title:"Login Page"
	});
});

// Account Creation Page:
app.get('/accountCreation', function(req, res) {
	res.render('pages/accountCreation',{
		my_title:"Account Creation Page"
	});
});

// Patient Profile Page
app.get('/patient_profile', function(req, res) {
    res.render('pages/patient_profile',{
			my_title: "Patient Profile"
	});
});

// Appointment Page
app.get('/appointmentForm', function(req, res) {
    res.render('pages/appointmentForm',{
			my_title: "Appointment Page"
	});
});

// Billing Page
app.get('/billing', function(req, res) {
    res.render('pages/billing',{
			my_title: "Billing Page"
	});
});

// homepage
app.get('/homepage', function(req, res) {
    res.render('pages/homepage',{
			my_title: "Home Page"
	});
});

// Insurance Page
app.get('/insurance', function(req, res) {
    res.render('pages/insurance',{
			my_title: "Insurance Page"
	});
});

// Lab Results Page
app.get('/labResults', function(req, res) {
    res.render('pages/labResults',{
			my_title: "Lab Results Page"
	});
});

// Prescription Page
app.get('/prescriptions', function(req, res) {
    res.render('pages/prescriptions',{
			my_title: "Prescriptions Page"
	});
});

// Referral Page
app.get('/referral_from', function(req, res) {
    res.render('pages/referral_from',{
			my_title: "Referral Page"
	});
});

// Vaccinations Page
app.get('/vaccinations', function(req, res) {
    res.render('pages/vaccinations',{
			my_title: "Vaccinations Page"
	});
});

app.listen(3000);
console.log('3000 is the magic port');
