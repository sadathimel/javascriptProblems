function reverseString (str){
      var revrese = "";
      for(var i = 0; i<str.length; i++){
            var char = str[i];
            revrese = char + revrese;
      }
      return revrese;
}
var statement = "Hello Alien bhai brother.";
var forAlien = reverseString(statement);
console.log(forAlien);

var foodVlog = reverseString("ki khowa jay..? khida lagche");
console.log(foodVlog);