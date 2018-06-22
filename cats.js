var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String 
});

var Cat = mongoose.model("Cat", catSchema);

// var tommy = new Cat({
//         name: "Tommy",
//         age: 3,
//         temperament: "Funny"
// });

// tommy.save(function(err, cat){
//     if(err){
//         console.log("There is Something Wrong");
//         console.log(err);
//     }else{
//         console.log(cat);

//     }
// });
Cat.create({name: "Amanda",
age:3,
temperament:"Loveable"},function(err, cat){
    if(err)
    {
        console.log("Error in saving FIle");
    }
    else{
        console.log("SAVED CAT TO DB");
        console.log(cat);
    }
});
Cat.find({}, function(err, cat){
    if(err){
        console.log("Error ", err);
    }
    else{
        console.log(cat);
    }

});