let bodyParser = require("body-parser");

let data = [
    { item: "get milk" },
    { item: "walk dog" },
    { item: "kick some coding ass" }
];
let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    app.get("/todo", function(req, res) {
        res.render("todo", { todos: data });
    });

    app.post("/todo", urlencodedParser, function(req, res) {
        data.push(req.body);

        res.json(data);
    });

    app.delete("/todo", function(req, res) {});
};
