let battery = 70

function logBatteryStatus() {
    console.log(`${battery}% left`)
}

function switchProgramm(channel) {
    console.log(`new channel: ${channel}`)
}

logBatteryStatus() // 70% left

switchProgramm(3) // new channel: 3