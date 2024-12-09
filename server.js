const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // dynamic and local

// Load JSON data sources
const circuits = require('./circuits.json');
const races = require('./races.json');
const drivers = require('./drivers.json');
const constructors = require('./constructors.json');
const results = require('./results.json');
// Following file is empty? (not functional when included, the file is unusued on the requirements either way)
//const qualifying = require('./qualifying.json'); 

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Default Route, no data request
app.get('/', (req, res) => {
  res.send('Welcome to the COMP 3612 Assignment API! :)');
});


// Circuits API
// handle request for all circuits in the database
app.get('/api/circuits', (req, res) => {
  res.json(circuits);
});

//handle request for a specific circuit using its id
app.get('/api/circuits/:id', (req, res) => {
  const circuitId = parseInt(req.params.id, 10);                 // Convert to integer
  const circuit = circuits.find(c => c.circuitId === circuitId); // Compare as integers
  
  if (circuit) {
    res.json(circuit);
  } else {
    res.status(404).json({ error: 'Circuit not found' });
  }
});


// Races API
// handle request for all races in the database
app.get('/api/races', (req, res) => {
  res.json(races);
});


// handle request for races of a specific season
app.get('/api/races/season/:year', (req, res) => {
  const yearRef = parseInt(req.params.year, 10);
  // Use filter() to find all races that match the given year, find only returns one instance
  const season = races.filter(y => y.year === yearRef);
  
  if (season.length > 4) {
    res.json(season);  // Return all races that match the year
  } else {
    res.status(404).json({ error: `No races found for the '${yearRef}' season` });
  }
});


// Constructors APIs
// handle request for all constructors
app.get('/api/constructors', (req, res) => {
  res.json(constructors);
});


// Handle given constructor reference
app.get('/api/constructors/:ref', (req, res) => {
  const ref = req.params.ref.toLowerCase();
  const constructor = constructors.find(c => c.constructorRef.toLowerCase() === ref);
  if (constructor) {
    res.json(constructor);
  } else {
    res.status(404).json({ error: `Constructor '${req.params.ref}' not found` });
  }
});

// Drivers API
app.get('/api/drivers', (req, res) => {
  res.json(drivers);
});

// handle specific driver request using a driverRef
app.get('/api/drivers/:ref', (req, res) => {
  const driverRef = req.params.ref.toLowerCase(); // Extract and transform ref
  const driver = drivers.find(d => d.driverRef.toLowerCase() === driverRef);
  
  if (driver) {
    res.json(driver);
  } else {
    res.status(404).json({ error: `Driver '${req.params.ref}' not found` });
  }
});


// Results API
// handle display all results request
app.get('/api/results', (req, res) => {
  res.json(results);
});

// handle request for results for a specific race
app.get('/api/results/race/:id', (req, res) => {
  const raceId = parseInt(req.params.id, 10); // Convert the race ID to an integer
  if (isNaN(raceId)) {
    return res.status(400).json({ error: 'Invalid race ID provided' });
  }

  // Filter results for the given race ID
  const raceResults = results.filter(result => result.race.id === raceId);

  if (raceResults.length > 0) {
    res.json(raceResults);
  } else {
    res.status(404).json({ error: `No results found for race ID ${raceId}` });
  }
});

// handle driver results with a given driverRef and season
app.get('/api/driverResults/:ref/:year', (req, res) => {
  const driverRef = req.params.ref.toLowerCase(); // Extract and transform driverRef
  const year = parseInt(req.params.year, 10); // Parse year as an integer value

  // Validate year input
  if (isNaN(year)) {
    return res.status(400).json({ error: 'Invalid year provided' });
  }

  // Filter results for the specified driver and year
  const driverResults = results.filter(result =>
    result.driver.ref.toLowerCase() === driverRef && result.race.year === year
  );

  // Check if any results are found
  if (driverResults.length > 0) {
    res.json(driverResults);
  } else {
    res
      .status(404)
      .json({ error: `No results found for driver '${driverRef}' in year ${year}` });
  }
});

// handle constructor results with a given consRef and season
app.get('/api/constructorResults/:ref/:year', (req, res) => {
  const constructorRef = req.params.ref.toLowerCase(); // Convert to lowercase for case-insensitive matching
  const year = parseInt(req.params.year, 10); // Parse the year to an integer

  // Validate year
  if (isNaN(year)) {
    return res.status(400).json({ error: 'Invalid year provided' });
  }

  // Filter results for the specified constructorRef and season
  const constructorResults = results.filter(
    result =>
      result.constructor.ref.toLowerCase() === constructorRef && result.race.year === year
  );

  if (constructorResults.length > 0) {
    res.json(constructorResults);
  } else {
    res
      .status(404)
      .json({ error: `No results found for constructor '${constructorRef}' in season ${year}` });
  }
});

// handle results with a specific season request
app.get('/api/results/season/:year', (req, res) => {
  const year = parseInt(req.params.year, 10); // Parse the year to an integer

  // Validate year input
  if (isNaN(year)) {
    return res.status(400).json({ error: 'Invalid year provided' });
  }

  // Filter results by race.year in the results dataset
  const seasonResults = results.filter(result => result.race.year === year);

  // Check if any results are found
  if (seasonResults.length > 0) {
    res.json(seasonResults);
  } else {
    res.status(404).json({ error: `No results found for the year ${year}` });
  }
});



