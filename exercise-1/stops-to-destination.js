const stations = require("./northern-line.json");

// This function should calculate the number of stops to the destination
function calculateStopsToDestination(start, end) {
  
  if (!stations.includes(start) || !stations.includes(end)) {
    throw new Error();
  }

  return Math.abs(stations.indexOf(end) - stations.indexOf(start))

}

module.exports = calculateStopsToDestination;
