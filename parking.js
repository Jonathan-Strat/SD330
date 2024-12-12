async function json() {
  	try {
    		const response = await fetch("https://jonathan-strat.github.io/SD330/parking.json");
    		if (!response.ok) {
      			throw new Error(`Failed to fetch: ${response.status}`);
   		}
    		const data = await response.json();

    		const lots = data.parkingLots; 

    		Object.keys(lots).forEach(lotId => {
      			const lot = lots[lotId];
      			const htmlString = `
        			<p class='lotName'>${lot.name}</p>
        			<p>Total Spaces: ${lot.totalSpaces}</p>
        			<p>Location: ${lot.location}</p>
        			<p>Lot Type: ${lot.lotType}</p>
        			<p>Security Level: ${lot.security}</p>
        			<p>Comments: ${lot.comments}</p>
      			`;

      			const lotElement = document.getElementById(lot.name.toLowerCase());
     			 if (lotElement) {
        			lotElement.innerHTML = htmlString;
      			} else {
        			console.warn(`Element with id '${lot.name.toLowerCase()}' not found.`);
      			}
    		});
  	} catch (error) {
    		console.error('Error fetching or processing JSON:', error);
  	}
}

function getURLParameter(name) {
  	const urlParams = new URLSearchParams(window.location.search);
  	return urlParams.get(name);
}

async function loadSpaces() {
  	const lotId = getURLParameter('lot'); 

  	try {
    		const response = await fetch("https://jonathan-strat.github.io/SD330/parking.json");
    		const data = await response.json();

    		const lot = data.parkingLots[lotId];

    		let htmlString = `<ul>`;
    		lot.spaces.forEach(space => {
      			htmlString += `<li>
        			<b>Space ID:</b> ${space.spaceId} <br>
        			<b>Type:</b> ${space.type} <br>
        			<b>Status:</b> ${space.status} <br>
        			${space.filledDateTime ? `<b>Filled On:</b> ${space.filledDateTime} <br>` : ""}
        			${space.reservedDateTime ? `<b>Reserved Until:</b> ${space.reservedDateTime}` : ""}
      			</li><br>`;
    		});
    		htmlString += `</ul>`;

    		document.getElementById("lotSpaces").innerHTML = htmlString;

  	} catch (error) {
    		console.error("Error fetching or processing JSON:", error);
    		document.body.innerHTML = "<p>Error loading spaces for the lot.</p>";
  	}
}