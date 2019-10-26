
const dish = require('../models/dish.model');

module.exports = {

    index : (req,res)=>{
        res.status(200).json({
            'message':'Hello'
            })
    },
   
    getDishes :(req,res)=>{
        dish.find({}).exec(function(err, dishes) {
            if (err) throw err;        
            console.log(dishes);
            return res.status(200).json(dishes);
        })
    },

    //  keys/values
    //  name/ dish_name
    // description / whatever
    // type / options{starter, main, dessert, drink}
    setDish:  (req,res)=>{

        newDish= new dish();
        //fetch data from body
        var params= req.body;
        //pass data to each property
        newDish.name = params.name;
        newDish.description = params.description;
        newDish.type = params.type;
        //save data into mongodb
        newDish.save(function(err, newDishStored) {
            //handle errors
            if (err) return res.status(404).send({
                "error":err
            })
            if (!newDishStored) return res.status(404).send({
                "error":"is not possible to store this data"
            })
            //if everything it's ok...
            return res.status(200).send({
                "work":"new dish add successfully"
            });
        })
    },

    getDish:  (req,res)=>{     

        //fetch data from body
        var dishID= req.params.id;
        console.log(dishID);
        
        //save data into mongodb
        dish.findById(dishID,function(err, data) {
            //handling errors
            if (err) return res.status(404).send({
                "error":err
            })
            if (!data) return res.status(404).send({
                "error":"is not possible to find this data"
            })
            //if everything it's ok...
            return res.status(200).json(data);
        })
    },
       
    deleteDish:  (req,res)=>{   

        //fetch data from body
        var dishID= req.params.id;
        console.log(dishID);
        
        //removing data from mongodb
        dish.findByIdAndRemove(dishID,function(err, data) {
            //handling errors
            if (err) return res.status(404).send({
                "error":err
            })
            if (!data) return res.status(404).send({
                "error":"is not possible to find this data"
            })
            //if everything it's ok...
            return res.status(200).send({"work":"dish deleted successfully"});
        })
    },
  
    updateDish:  (req,res)=>{
        
        //fetch dishID from params
        var dishID = req.params.id;
        //fetch data from body
        var update= req.body;
                
        //save data into mongodb updated data
        dish.findOneAndUpdate(dishID, update,function(err, dishUpdated) {
            //handle errors
            if (err) return res.status(404).send({
                "error":err
            })
            if (!dishUpdated) return res.status(404).send({
                "error":"is not possible to store this data"
            })
            //if everything it's ok...
            return res.status(200).send({
                "work":"dish updated successfully"
            });
        })
    }
}