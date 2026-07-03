const northCarolinaCities = [
  "Sylva", "Littleton", "Granite Falls", "Mebane", "Hays",
  "Brevard", "Pittsboro", "Lilesville", "Currituck", "Old Fort",
  "Emerald Isle", "Enka", "Selma", "Williamston", "Holly Ridge",
  "Calabash", "Winterville", "Iron Station", "Jackson", "Mocksville",
  "Newland", "Farmville", "Efland", "Franklinton", "Linden",
  "Ayden", "Willow Spring", "Cramerton", "Fairview", "Oxford",
  "Grimesland", "Norlina", "Albemarle", "Liberty", "Shelby",
  "Lawndale", "Bayboro", "Hope Mills", "Gibsonville", "Dillsboro",
  "Pinnacle", "Mount Olive", "Marble", "Roseboro", "Troy",
  "Rockingham", "Cedar Grove", "Spring Lake", "Lake Junaluska", "Stanfield",
  "Linville", "Supply", "Columbus", "Richlands", "Laurel Hill",
  "Kure Beach", "Newton Grove", "Burgaw", "Stedman", "Tobaccoville",
  "Richfield", "Bakersville", "Hatteras", "Candor", "Bessemer City",
  "Westfield", "Hubert", "Seagrove", "Pinetops", "Deep Gap",
  "Wallace", "Blowing Rock", "Castle Hayne", "Ernul", "Rutherford College",
  "Sherrills Ford", "Mayodan", "Rose Hill", "Mount Gilead", "Coats",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
