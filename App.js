const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const twilio = require("twilio");

const accountSid = "AC2a292bdf20f43814a186b924ab52fxxx"
const authToken = "f768549b1xxxxxb92635ba5fdf210167"

const client = new twilio(accountSid, authToken);

app.use(express.json());
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
// Static files
app.use(express.static("public"));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
})
let phoneNumber;
app.post('/', (req, res) =>{
    phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber);
})
console.log(phoneNumber);

app.get('/send-text', (req, res) => {
    //Welcome Message
    console.log(req);
    res.send('Hello to the Twilio Server');

    //_GET Variables
    // const { textmessage, texternumber, carCompany, floorArea, location } = req.query;

const cohere = require('cohere-ai');
cohere.init('cohereapikey'); // This is your trial API key
(async () => {
  const response = await cohere.generate({model: 'command-xlarge-nightly',prompt: 'Generate a random comedy line for a car website',max_tokens: 300,temperature: 0.9,k: 0,p: 0.75,frequency_penalty: 0,presence_penalty: 0,stop_sequences: [],return_likelihoods: 'NONE'});;})();
 
 
    //Send Text
    client.messages.create({
        body: response.body.generations[0].text,
        to: "+12563045145",  // Text this number
        from: "+917997642581" // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
