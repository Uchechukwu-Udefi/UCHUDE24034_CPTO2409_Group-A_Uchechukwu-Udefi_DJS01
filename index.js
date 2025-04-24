/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmh = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceKm = 0; // distance (km)
const availableFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity (accelerationMs2, velocityKmh, timeInSeconds) { 

  // Check for unit consistency
  if (typeof velocityKmh !== "number" || typeof accelerationMs2 !== "number" || typeof timeInSeconds !== "number") {
      throw new Error("All inputs must be numbers.");
    }
    if (velocityKmh < 0 || timeInSeconds < 0) {
      throw new Error("Velocity and time must be non-negative.");
    };

  // Check for remaining fuel
    if (availableFuelKg < 0) {
      throw new Error("Fuel depleted! Remaining fuel is negative.");
    }

  // Convert current velocity from km/h to m/s
  const currentVelocityMs = velocityKmh * (1000 / 3600);

  // New velocity in m/s after acceleration
  const newVelocityMs = currentVelocityMs + (accelerationMs2 * timeInSeconds);

  // Convert the new velocity from m/s back to km/h
  const newVelocityKmh = newVelocityMs * (3600 / 1000)

  return newVelocityKmh
}

const newDistancekm = distanceKm + (velocityKmh * timeInSeconds / 3600); //calcultes new distance
const newRemainingFuelKg = availableFuelKg - (fuelBurnRateKgPerSecond * timeInSeconds); //calculates remaining fuel
const newVelocityOnAcceleration = calculateNewVelocity(accelerationMs2, velocityKmh, timeInSeconds); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocityOnAcceleration} km/h`);
console.log(`Corrected New Distance: ${newDistancekm} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuelKg} kg`);







