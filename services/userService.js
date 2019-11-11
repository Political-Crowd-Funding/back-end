const userRepo = require('../repositories/userRepo');


const userService = function(){


    const getAll = () =>{
        
        return userRepo.getAll()
        //queries all users in database
    
    }


    return ({
        getAll:getAll
    })
    
   


}

module.exports = userService();