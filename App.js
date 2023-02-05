const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const twilio = require("twilio");

const accountSid = "AC940a2df0c52e7b1fd038404b2df8dacb"
const authToken = "2f1c0f9a9afd5b3a5c36ce946f12919e"

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
        body: "YOOO BOIII",
        to: "+918374790680",  // Text this number
        from: "+19786435240" // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
