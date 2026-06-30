const northCarolinaCities = [
  "Camp Lejeune", "Wilmington", "Vilas", "Holly Springs", "Hertford",
  "Raleigh", "Cary", "Charlotte", "Salisbury", "Newton",
  "Mooresville", "Thomasville", "Henderson", "Apex", "Concord",
  "Matthews", "Goldsboro", "Sanford", "Buies Creek", "Southport",
  "Boone", "Stanley", "Asheville", "Greensboro", "Huntersville",
  "Hillsborough", "Black Mountain", "Winston Salem", "Clemmons", "Southern Pines",
  "New Bern", "Cornelius", "Durham", "Summerfield", "Lexington",
  "Fletcher", "Washington", "Monroe", "Elon", "Beaufort",
  "Burnsville", "Wilson", "Indian Trail", "Benson", "Manteo",
  "Hickory", "Jacksonville", "East Bend", "Fayetteville", "Elkin",
  "Edenton", "Waynesville", "Denver", "Moravian Falls", "Whitakers",
  "Kitty Hawk", "Zebulon", "Jefferson", "High Point", "Burlington",
  "Pfafftown", "Troutman", "Harrisburg", "Franklin", "Belmont",
  "Severn", "Conover", "Morganton", "Wilkesboro", "Statesville",
  "Union Grove", "Shallotte", "West End", "Clyde", "Greenville",
  "Rolesville", "Chapel Hill", "Kernersville", "Forest City", "Clayton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northCarolinaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northCarolinaCities[i]);
}

module.exports = { batches };
