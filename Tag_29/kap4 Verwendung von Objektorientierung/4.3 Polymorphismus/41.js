let lightOn = false;
let flashlightOn = false;
let flashlightBatteryFull = true;

function toggleActive() {
  lightOn = !lightOn;
}

function toggleFlashlightActive() {
  if (!flashlightBatteryFull) return;
  lightOn = !lightOn;
}

function logLightStatus() {
  console.log(lightOn);
}

function logFlashLightStatus() {
  console.log(lightOn);
}