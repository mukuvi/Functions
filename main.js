
countries = ["Kenya", "Uganda", "Tanzania", "Rwanda"];
countries.pop();//pop is used to remove the last word
countries.shift()//shift is used remove the first word
countries.push("Burundi")//push adds a word to the array
countries.unshift("Somalia")//unshift adds a word to the beginning of an array
delete countries[1]//To delete a word you can use delete key world
document.querySelector(".clicker").innerText = countries.toString()//to print the string
document.querySelector(".clicke").innerText = countries.join(" - ")//Join is used to separate array elements 


