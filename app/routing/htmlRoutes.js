// Dependencies
var path = require('path');

module.exports = function (app) {

    // Catch-all route that re-directs to home.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Route to /survey to display the survey.html page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

};