function skillsMember()
{
    var member = require('./member.js');
    var skills = require('./skills.js');
    var memberSkills = new Array();
    var memberSkills = member.getSkills();
    var skills = skills.getSkills();
    var memberSkills = memberSkills.concat(skills);
    return memberSkills;
}