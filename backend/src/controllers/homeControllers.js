const db = require('../models');

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        console.log("Data from DB: ", data);
    } catch (error) {
        console.error("Error fetching home page:", error);
        res.status(500).send("Internal Server Error");
    }
    res.render('homePage');
};

const homeController = {
    getHomePage
};

module.exports = homeController;