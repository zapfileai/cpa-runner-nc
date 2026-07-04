const northCarolinaCities = [
  "Ash", "Hudson", "Yadkinville", "Semora", "Valdese",
  "Etowah", "Franklinville", "Cooleemee", "Drexel", "Norwood",
  "Lillington", "Grover", "Chocowinity", "Kings Mountain", "Harmony",
  "Vale", "Four Oaks", "Dallas", "Mooresboro", "Randleman",
  "Bryson City", "Knotts Island", "Browns Summit", "Lowell", "Bolivia",
  "Atkinson", "Lake Waccamaw", "Zionville", "Erwin", "Leasburg",
  "Tyner", "Hurdle Mills", "Oakboro", "Tabor City", "Hamptonville",
  "Jamesville", "Wadesboro", "Maiden", "Ararat", "Wagram",
  "Stoneville", "Pisgah Forest", "New London", "Murfreesboro", "Providence",
  "Purlear", "Faith", "Julian", "Ahoskie", "Gaston",
  "Hobbsville", "Andrews", "Wingate", "Climax", "Germanton",
  "La Grange", "Patterson", "Ocean Isle Beach", "Elizabethtown", "Merritt",
  "Swannanoa", "West Jefferson", "Ocracoke", "Calypso", "Gates",
  "Mount Ulla", "Garland", "Connelly Springs", "Bladenboro", "Warsaw",
  "Grifton", "Maxton", "Rockwell", "Chadbourn", "Henrico",
  "Bahama", "Fleetwood", "Lucama", "Godwin", "Ellenboro",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
