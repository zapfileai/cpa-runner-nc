const northCarolinaCities = [
  "Lake Lure", "Maury", "Moyock", "Aydlett", "Elm City",
  "Terrell", "Vanceboro", "Creston", "Dover", "Whittier",
  "Rocky Point", "Hobgood", "Jackson Springs", "Stony Point", "Hildebran",
  "Albertson", "Sapphire", "Alexander", "Hamlet", "Fallston",
  "Cherryville", "Corolla", "Mill Spring", "Pinebluff", "Stokes",
  "Walkertown", "Alexis", "Avon", "Rougemont", "Dobson",
  "Yanceyville", "Marshallberg", "Oriental", "Mcgrady", "Staley",
  "Merry Hill", "Bat Cave", "Midway Park", "Naples", "Sophia",
  "Lake Toxaway", "Roaring River", "Cofield", "Riegelwood", "Harrells",
  "Paw Creek", "Garysburg", "Topton", "Wallburg", "Pine Level",
  "Salemburg", "Gibson", "Skyland", "Windsor", "Poplar Branch",
  "Ronda", "Zirconia", "Landis", "Saluda", "Castalia",
  "Pikeville", "New Hill", "Colerain", "Hot Springs", "Pinetown",
  "Alamance", "Grantsboro", "Lumber Bridge", "Shawboro", "Biscoe",
  "Gatesville", "Cleveland", "Princeton", "Vass", "Roper",
  "Earl", "Traphill", "Olin", "Jonesville", "Glen Alpine",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
