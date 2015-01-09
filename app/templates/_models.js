(function () {

    'use strict';
    
    module.exports = function(mongoose)
    {
        var userSchema = mongoose.Schema({
            name     : String,
            surname  : String,
            username : String,
            email    : String,
            password : String
        });
         
        var models = {
            user : mongoose.model('user', userSchema)
        };
      
        return models;
    };
}());