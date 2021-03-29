const users = [{
    id:1,
    username:'18600091',
    password: 'kocopass',
}];

exports.findByUser = function(username){
    return users.find(u => u.username === username)
};
exports.findById = function(id){
    return users.find(u => u.id === id)
};
