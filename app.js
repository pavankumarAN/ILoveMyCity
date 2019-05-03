const express = require('express');
const app = express();


app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('home', {
        headline : 'We always in a mission of Clean Bengaluru.'
    });
});

app.get('/:city', (req,res) => {
    const areaName = req.params.areaName;
    const title, pageHeading;
    const imageCount=4;
    if(areaName === "koramangala") {
        title = "Koramagala",
        pageHeading = "Pond of start-up. Famous for pubs."
    } else if(areaName === "btm") {
        title = "BTM",
        pageHeading = "Most of Tech job aspirants stays here in their initial days. Famous for PGs."
    } else if(areaName === "jayanagar") {
        title = "Jayanagar",
        pageHeading = "Calm area, Famous for shopping, temples."
    } else if(areaName === "jpnagar") {
        title = "JP Nagar",
        pageHeading = "Many celebrities stays here, Many start-ups are raising here."
    } else if(areaName === "hsr") {
        title = "HSR",
        pageHeading = "Many start-ups, Lot apartments."
    }
});

const PORT = process.env.PORT || 3000;


app.use(express.static(__dirname+'/public'));
const server = app.listen(PORT, (req,res) => {
    console.log(`app is running in the ${PORT}`);
});