// HTML Routes --------------------------------------------------------------

module.exports = function (app, path) {
    // GET request for /survey loads survey.html file -----------------------
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    
    // GET request for /root level loads home.html file -----------------------
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}