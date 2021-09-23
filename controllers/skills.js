const Skill = require('../models/skill');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
};

function deleteSkill(req, res) {
    console.log(req.params.name);
    console.log(req.body);
    Skill.deleteOne(req.body);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    console.log(req.params);
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

// function to inject information into the ejs
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
    });
};

function show(req, res) {
    console.log(req.params);
    res.render('skills/show', {
        skill: Skill.getOne(req.params.name),
    });
};