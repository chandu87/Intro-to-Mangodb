var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String 
});

var Cat = mongoose.model("Cat", catSchema);

var tommy = new Cat({
        name: "Tommy",
        age: 3,
        temperament: "Funny"
});

tommy.save(function(err, cat){
    if(err){
        console.log("There is Something Wrong");
        console.log(err);
    }else{
        console.log(cat);

    }
});