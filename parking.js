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

json();