// DOM traversing and manupulating

var countryList = document.querySelector("#countryName");
var fastC = countryList.querySelector("#FastCountry");
fastC.style.color = "red"


// using children - DOwnwards

var countrylist = document.querySelector("#countryName")
var two = countrylist.children[1];
two.style.color = "yellow"

var three = countrylist.children[2];
three.style.color = "white";

// uperwards - parantelement
 var country = document.querySelector("li");
 var allcountyr = country.parentElement;
 allcountyr.style.backgroundColor="black"

 