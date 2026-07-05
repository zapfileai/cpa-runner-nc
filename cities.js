const northCarolinaCities = [
  "Battleboro", "Waco", "Bath", "Dudley", "Lansing",
  "Lakeview", "Walstonburg", "Pantego", "Harkers Island", "Sugar Grove",
  "East Flat Rock", "Roaring Gap", "Icard", "Stantonsburg", "Sunbury",
  "Corapeake", "Peachland", "Thurmond", "Parkton", "Clarkton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
