const northCarolinaCities = [
  "Rocky Mount", "Pinehurst", "Pineville", "Oak Island", "Arden",
  "Garner", "Morrisville", "Pollocksville", "Scotland Neck", "Midland",
  "Sneads Ferry", "King", "Mount Holly", "Leicester", "Dunn",
  "China Grove", "Locust", "Millers Creek", "Oak Ridge", "Elizabeth City",
  "Whitsett", "Snow Camp", "Gastonia", "Roxboro", "Candler",
  "Sunset Beach", "Belews Creek", "Kannapolis", "Buxton", "Aberdeen",
  "Stem", "Hampstead", "Creedmoor", "Lincolnton", "Knightdale",
  "Marshville", "Maysville", "Taylorsville", "Cameron", "Morehead City",
  "Reidsville", "Fairmont", "Eden", "Kenly", "Camden",
  "Boomer", "Maggie Valley", "Cullowhee", "Wrightsville Beach", "Weaverville",
  "Advance", "Lumberton", "Evergreen", "Laurel Springs", "Atlantic Beach",
  "Newport", "Gold Hill", "North Wilkesboro", "Spruce Pine", "Atlantic",
  "Jamestown", "Wake Forest", "Graham", "Clinton", "Asheboro",
  "Louisburg", "Pembroke", "Havelock", "Davidson", "Lenoir",
  "Cedar Mountain", "Welcome", "Mars Hill", "Columbia", "Carolina Beach",
  "Pleasant Garden", "Youngsville", "Halifax", "Denton", "Tryon",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
