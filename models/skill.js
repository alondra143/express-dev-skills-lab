const skills = [
    {name: 'git', difficulty: 2, gained: true},
    {name: 'html', difficulty: 1, gained: true},
    {name: 'css', difficulty: 3, gained: true},
    {name: 'express', difficulty: 4, gained: false},
    {name: 'javascript', difficulty: 3, gained: true},
    {name: 'computer science', difficulty: 4, gained: false},
    {name: 'python', difficulty: 4, gained: false},
    ];
   
    module.exports = {
        getAll,
        getOne,
        create,
        deleteOne,
    };

    function deleteOne(name) {
        const namex = skills.findIndex(skill => skill.name === parseInt(name));
        skills.splice(namex, 1);
    }

    function create(name) {
        name.difficulty = Math.floor(Math.random() * 5);
            name.gained = false;
        skills.push(name);
    };

    function getAll() {
        return skills;
    };

    function getOne(name) {
        return skills.find(skill => skill.name === name);
    };