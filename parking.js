function json() {

const response = await fetch ("https://jonathan-strat.github.io/SD330/parking.json");
const data = await response.json();

let htmlString1 = "<p class='lotName'>" + data['parkingLots']['1']['name'];
htmlString1 += "<p> Total Spaces: " + data['parkingLots']['1']['totalSpaces'];
htmlString1 += "<br> Location: " + data['parkingLots']['1']['location'];
htmlString1 += "<br> Lot Type: " + data['parkingLots']['1']['lotType'];
htmlString1 += "<br> Security Level: " + data['parkingLots']['1']['security'];
htmlString1 += "<br> Comments: " + data['parkingLots']['1']['comments'];

document.getElementById('beck').innerHTML += htmlString1;

let htmlString2 = "<p class='lotName'>" + data['parkingLots']['2']['name'];
htmlString2 += "<p> Total Spaces: " + data['parkingLots']['2']['totalSpaces'];
htmlString2 += "<br> Location: " + data['parkingLots']['2']['location'];
htmlString2 += "<br> Lot Type: " + data['parkingLots']['2']['lotType'];
htmlString2 += "<br> Security Level: " + data['parkingLots']['2']['security'];
htmlString2 += "<br> Comments: " + data['parkingLots']['2']['comments'];

document.getElementById('donnelly').innerHTML += htmlString2;

let htmlString3 = "<p class='lotName'>" + data['parkingLots']['3']['name'];
htmlString3 += "<p> Total Spaces: " + data['parkingLots']['3']['totalSpaces'];
htmlString3 += "<br> Location: " + data['parkingLots']['3']['location'];
htmlString3 += "<br> Lot Type: " + data['parkingLots']['3']['lotType'];
htmlString3 += "<br> Security Level: " + data['parkingLots']['3']['security'];
htmlString3 += "<br> Comments: " + data['parkingLots']['3']['comments'];

document.getElementById('byrne').innerHTML += htmlString3;

let htmlString4 = "<p class='lotName'>" + data['parkingLots']['4']['name'];
htmlString4 += "<p> Total Spaces: " + data['parkingLots']['4']['totalSpaces'];
htmlString4 += "<br> Location: " + data['parkingLots']['4']['location'];
htmlString4 += "<br> Lot Type: " + data['parkingLots']['4']['lotType'];
htmlString4 += "<br> Security Level: " + data['parkingLots']['4']['security'];
htmlString4 += "<br> Comments: " + data['parkingLots']['4']['comments'];

document.getElementById('midRise').innerHTML += htmlString4;

let htmlString5 = "<p class='lotName'>" + data['parkingLots']['5']['name'];
htmlString5 += "<p> Total Spaces: " + data['parkingLots']['5']['totalSpaces'];
htmlString5 += "<br> Location: " + data['parkingLots']['5']['location'];
htmlString5 += "<br> Lot Type: " + data['parkingLots']['5']['lotType'];
htmlString5 += "<br> Security Level: " + data['parkingLots']['5']['security'];
htmlString5 += "<br> Comments: " + data['parkingLots']['5']['comments'];

document.getElementById('mcCann').innerHTML += htmlString5;

let htmlString6 = "<p class='lotName'>" + data['parkingLots']['6']['name'];
htmlString6 += "<p> Total Spaces: " + data['parkingLots']['6']['totalSpaces'];
htmlString6 += "<br> Location: " + data['parkingLots']['6']['location'];
htmlString6 += "<br> Lot Type: " + data['parkingLots']['6']['lotType'];
htmlString6 += "<br> Security Level: " + data['parkingLots']['6']['security'];
htmlString6 += "<br> Comments: " + data['parkingLots']['6']['comments'];

document.getElementById('lowerWest').innerHTML += htmlString6;
}

json();