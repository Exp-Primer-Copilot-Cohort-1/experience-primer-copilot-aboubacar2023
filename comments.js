// Create web server

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.js');
var skills = require('./skills.js');
var member = require('./member.js');
var memberSkills = require('./memberSkills.js');
var memberComments = require('./memberComments.js');
var memberSkillsComments = require('./memberSkillsComments.js');
var memberSkillsComments = require('./memberSkillsComments.js');
var memberSkillsComments = require('./memberSkillsComments.js');
var memberSkillsComments = require('./memberSkillsComments.js');
var memberSkillsComments = require('./memberSkillsComments.js');
var memberSkillsComments = require('./memberSkillsComments.js');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == './') {
        filename = './index.html';
    }

    fs.readFile
    (
        filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    );
}
).listen(8080);
