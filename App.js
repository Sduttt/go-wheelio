const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const twilio = require("twilio");

const accountSid = "PlaceaccountSid"
const authToken = "PlaceauthToken"

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


    //Send Text
    client.messages.create({
        body: "I can never *tire* of you",
        to: "",  // Text this number
        from: "" // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
