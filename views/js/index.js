// Constants
const GRAVITY = 9.8; // Acceleration due to gravity in m/s^2

// Variables
let planetA = { x: 0, y: 0, z: 0 }; // Coordinates of Planet A
let planetB = { x: 1000, y: 2000, z: 3000 }; // Coordinates of Planet B
let spaceship = { x: planetA.x, y: planetA.y, z: planetA.z }; // Initial coordinates of the spaceship
let wormholeLength = Math.sqrt(Math.pow(planetB.x - planetA.x, 2) + Math.pow(planetB.y - planetA.y, 2) + Math.pow(planetB.z - planetA.z, 2)); // Length of the wormhole
let spaceshipSpeed = 1000; // Speed of the spaceship (in meters per second)
let timeElapsed = 0; // Time elapsed (in seconds)
let eventHorizonCreated = false; // Flag to track if the event horizon has been created

// Function to simulate the spaceship traveling through the wormhole
function simulateTravelThroughWormhole() {
  while (spaceship.x < planetB.x || spaceship.y < planetB.y || spaceship.z < planetB.z) {
    // Check if the spaceship has reached the wormhole entrance
    if (spaceship.x >= planetA.x && spaceship.y >= planetA.y && spaceship.z >= planetA.z && !eventHorizonCreated) {
      createEventHorizon();
      eventHorizonCreated = true;
    }
    
    // Calculate the force of gravity on the spaceship
    let force = GRAVITY * spaceshipSpeed;
    
    // Calculate the spaceship's acceleration
    let acceleration = force / spaceshipSpeed;
    
    // Update the spaceship's speed and position
    spaceshipSpeed += acceleration;
    spaceship.x += spaceshipSpeed;
    spaceship.y += spaceshipSpeed;
    spaceship.z += spaceshipSpeed;
    
    // Increment time elapsed
    timeElapsed++;
  }
  
  console.log(`The spaceship reached Planet B in ${timeElapsed} seconds.`);
}

// Function to create the event horizon
function createEventHorizon() {
  let eventHorizon = document.createElement("div");
  eventHorizon.classList.add("event-horizon");
  eventHorizon.style.position = "absolute";
  eventHorizon.style.top = "50%";
  eventHorizon.style.left = "50%";
  eventHorizon.style.transform = "translate(-50%, -50%)";
  eventHorizon.style.width = "200px";
  eventHorizon.style.height = "200px";
  eventHorizon.style.border = "2px solid red";
  eventHorizon.style.borderRadius = "50%";
  
  document.body.appendChild(eventHorizon);
}

// Run the simulation
simulateTravelThroughWormhole();
