angular.module('userProfiles')
    .service('mainService', function(){

//var data makes this variable private. only accessible through
//funtions that I create. Down below, i have a function that 
//returns the data variable.  NOW, if I put this variable as
//this.data instead of var data, anyone could access it, but
//I would also have to change my function down below to say
//return this.data, since it would then only be accessible through
//the object 'this'
var data = [
    {
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
];

this.getUsers = function(){
    return data;
}

this.toggleFavorite = function(index){
    data[index].isFavorite = !data[index].isFavorite;
}





    });