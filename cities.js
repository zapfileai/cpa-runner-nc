const northCarolinaCities = [
  "Pink Hill", "Hendersonville", "Trinity", "Winnabow", "Bear Creek",
  "Carthage", "Snow Hill", "Siler City", "Red Springs", "Cherokee",
  "Rural Hall", "Robbinsville", "Kinston", "Rutherfordton", "Wendell",
  "Flat Rock", "Highlands", "Leland", "Kittrell", "Walnut Cove",
  "Fuquay Varina", "Bostic", "Lewisville", "Whiteville", "Nashville",
  "Colfax", "Laurinburg", "Webster", "Boonville", "Cashiers",
  "Stokesdale", "Tarboro", "Smithfield", "Spindale", "Belhaven",
  "Waxhaw", "Hayesville", "Mount Pleasant", "Linwood", "Hallsboro",
  "Timberlake", "Boiling Springs", "Banner Elk", "Canton", "Carrboro",
  "Horse Shoe", "Lawsonville", "Roanoke Rapids", "Marshall", "Marion",
  "Kenansville", "Madison", "Haw River", "Murphy", "Star",
  "Raeford", "Swansboro", "Mount Mourne", "Beulaville", "Ramseur",
  "Sims", "Plymouth", "Claremont", "Angier", "Otto",
  "Valle Crucis", "Mills River", "Pilot Mountain", "Catawba", "Mcleansville",
  "Sandy Ridge", "Mount Airy", "Enfield", "Nags Head", "Little Switzerland",
  "Spring Hope", "Granite Quarry", "Sparta", "Fort Bragg", "Kill Devil Hills",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
