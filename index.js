class Galaxy {
  constructor(name, distanceKly, constellation, notes) {
    this.name = name;
    this.constellation = constellation; // text
    this.distanceKly = distanceKly // numeric
    this.notes = notes; // text
  }

  insertQuery() {
    return `INSERT INTO galaxy(name, constellation, distance_kly, notes) VALUES('${this.name}', '${this.constellation}', ${this.distanceKly}, '${this.notes}')`;
  }
}

console.log("Galaxies");
const galaxies = [];
galaxies.push(new Galaxy('Milky Way', 0, "Sagittarius", "we live here"));
galaxies.push(new Galaxy('Large Magellanic Cloud', 160, "Dorado/Mensa", "Visible from southern hemisphere"));
galaxies.push(new Galaxy('Small Magellanic Cloud', 200, "Tucana", "Visible from southern hemisphere"));
galaxies.push(new Galaxy('Andromeda Galaxy', null, "Andromeda", ""));
galaxies.push(new Galaxy('Triangulum Galaxy', null, "Triangulum", ""));
galaxies.push(new Galaxy('Centaurus A', null, "Centaurus", ""));
const galaxyQueries = galaxies.map(el => el.insertQuery()).join(";\n") + ";";
console.log(galaxyQueries);
console.log("\n");

class Star {
  constructor(name, galaxy, diameterLightYears, notes) {
    this.name = name;
    this.galaxy = galaxy; // foreign key
    this.diameterLightYears = diameterLightYears; // int
    this.notes = notes; // text
  }

  insertQuery() {
    return `INSERT INTO star(name, galaxy_id, diameter_light_years, notes) VALUES('${this.name}', ${this.galaxy}, ${this.diameterLightYears}, '${this.notes}')`;
  }
}

console.log("Stars");
const stars = [];
stars.push(new Star('Sun', 1, null, "Our sun"));
stars.push(new Star('Stephenson 2-18', 1, 2160, ""));
stars.push(new Star('UY Scuti', 1, 1700, ""));
stars.push(new Star('NML Cygni', 1, 1650, ""));
stars.push(new Star('RW Cephei', 1, 1535, ""));
stars.push(new Star('Westerlund 1-26', 1, 1530, ""));
const starQueries = stars.map(el => el.insertQuery()).join(";\n") + ";";
console.log(starQueries);
console.log("\n");


class Planet {
  constructor(name, star, isDwarf, hasRings) {
    this.name = name;
    this.star = star; // foregin key
    this.isDwarf = isDwarf; // boolean
    this.hasRings = hasRings; // boolean
  }

  insertQuery() {
    return `INSERT INTO planet(name, star_id, is_dwarf, has_rings) VALUES('${this.name}', ${this.star}, ${this.isDwarf}, ${this.hasRings})`;
  }
}


console.log("Planets");
const planets = [];
planets.push(new Planet('Mercury', 1, false, false));
planets.push(new Planet('Venus', 1, false, false));
planets.push(new Planet('Earth', 1, false, false));
planets.push(new Planet('Mars', 1, false, false));
planets.push(new Planet('Jupiter', 1, false, true));
planets.push(new Planet('Saturn', 1, false, true));
planets.push(new Planet('Uranus', 1, false, true));
planets.push(new Planet('Neptune', 1, false, true));
planets.push(new Planet('Ceres', 1, true, null));
planets.push(new Planet('Pluto', 1, true, null));
planets.push(new Planet('Haumea', 1, true, null));
planets.push(new Planet('Makemake', 1, true, null));
planets.push(new Planet('Eris', 1, true, null));
const planetQueries = planets.map(el => el.insertQuery()).join(";\n") + ";";
console.log(planetQueries);
console.log("\n");



class Moon {
  constructor(name, planet, distanceFromPlanetKm, orbitalPeriodDays) {
    this.name = name;
    this.planet = planet; // foreign key
    this.orbitalPeriodDays = orbitalPeriodDays; // numeric
    this.distanceFromPlanetKm = distanceFromPlanetKm; // int
  }

  insertQuery() {
    return `INSERT INTO moon(name, planet_id, orbital_period_days, distance_from_planet_km) VALUES('${this.name}', ${this.planet}, ${this.orbitalPeriodDays}, ${this.distanceFromPlanetKm})`;
  }
}

console.log("Moons");
const moons = [];
moons.push(new Moon('Moon', 3, 384400, 27.322));
moons.push(new Moon('Deimos', 4, 23460, 1.2624));
moons.push(new Moon('Phobos', 4, 9270, 0.319));
moons.push(new Moon('Adrastea', 5, 128980, 0.298));
moons.push(new Moon('Aitne', 5, 23547000, 736));
moons.push(new Moon('Amalthea', 5, 181300, 0.498));
moons.push(new Moon('Ananke', 5, 21200000, 631));
moons.push(new Moon('Aoede', 5, 23807655, 748.8));
moons.push(new Moon('Arche', 5, 23064000, 715.6));
moons.push(new Moon('Autonoe', 5, 24122000, 753));
moons.push(new Moon('Callisto', 5, 384400, 16.689));
moons.push(new Moon('Carme', 5, 22600000, 692));
moons.push(new Moon('Callirrhoe', 5, null, null));
moons.push(new Moon('Carpo', 5, null, null));
moons.push(new Moon('Chaldene', 5, null, null));
moons.push(new Moon('Cyllene', 5, null, null));
moons.push(new Moon('Elara', 5, null, null));
moons.push(new Moon('Erinome', 5, null, null));
moons.push(new Moon('Euanthe', 5, null, null));
moons.push(new Moon('Eukelade', 5, null, null));
moons.push(new Moon('Europa', 5, null, null));
moons.push(new Moon('Ganymede', 5, null, null));
const moonQueries = moons.map(el => el.insertQuery()).join(";\n") + ";";
console.log(moonQueries);
console.log("\n");

class Astronaut {
  constructor(name, planet) {
    this.name = name;
    this.planet = planet; // foreign key
  }

  insertQuery() {
    return `INSERT INTO astronaut(name, planet_id) VALUES('${this.name}', ${this.planet})`;
  }
}

console.log("Astronauts");
const astronauts = [];
astronauts.push(new Astronaut('Neil Armstrong', 1));
astronauts.push(new Astronaut('Buzz Aldrin', 1));
astronauts.push(new Astronaut('Pete Conrad', 1));
const astronautQueries = astronauts.map(el => el.insertQuery()).join(";\n") + ";";
console.log(astronautQueries);
console.log("\n");
