var spach = "I am a   good person.   I don't snore at night"
var count = 0;
for(var i = 0; i<spach.length; i++){
      var char = spach[i];
      if(char == " " && spach[i-1] !==" "){
            count++;
      }
}
count++;
console.log(count)