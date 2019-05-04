exports.home = (req,res) => {
    res.render('home', {
        headline : 'We always in a mission of Clean Bengaluru.'
    });
};

exports.city= (req,res) => {
    const areaName = req.params.areaName;
    var title, pageHeading;
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

    res.render('city', {
        title : title,
        headline : pageHeading,
        city : areaName,
        numberOfImages : imageCount
    })
};
