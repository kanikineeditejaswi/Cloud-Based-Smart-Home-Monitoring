// Live Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();


// Activity Log
const logs = document.getElementById("logs");

function addLog(message) {
    const li = document.createElement("li");
    li.innerHTML = new Date().toLocaleTimeString() + " - " + message;
    logs.prepend(li);
}


// Device Controls
function toggleDevice(buttonId, statusId, deviceName, onText = "ON", offText = "OFF") {

    const button = document.getElementById(buttonId);
    const status = document.getElementById(statusId);

    let isOn = false;

    button.addEventListener("click", () => {

        isOn = !isOn;

        status.innerHTML = isOn ? onText : offText;

        button.innerHTML = isOn ? "Turn OFF" : "Turn ON";

        addLog(deviceName + (isOn ? " Enabled" : " Disabled"));

    });

}

// Devices
toggleDevice("lightBtn", "lightStatus", "Light");
toggleDevice("fanBtn", "fanStatus", "Fan");
toggleDevice("acBtn", "acStatus", "Air Conditioner");

// Door
let locked = true;

document.getElementById("doorBtn").addEventListener("click", () => {

    locked = !locked;

    document.getElementById("doorStatus").innerHTML =
        locked ? "Locked" : "Unlocked";

    document.getElementById("doorBtn").innerHTML =
        locked ? "Unlock" : "Lock";

    addLog("Door " + (locked ? "Locked" : "Unlocked"));

});


// Sensor Simulation
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tempData = [25, 26, 27, 28, 29, 30];

function updateSensors() {

    const temp = random(24, 35);
    const humidity = random(40, 80);
    const gas = random(100, 500);

    document.getElementById("temp").innerHTML = temp + "°C";

    document.getElementById("humidity").innerHTML =
        humidity + "%";

    document.getElementById("gas").innerHTML =
        gas > 350 ? "High" : "Normal";

    document.getElementById("motion").innerHTML =
        Math.random() > 0.5 ? "Detected" : "Not Detected";

    tempData.shift();
    tempData.push(temp);

    chart.data.datasets[0].data = tempData;
    chart.update();

    if (gas > 350) {
        addLog("⚠ Gas Level High");
    }

}

setInterval(updateSensors, 5000);


// Temperature Chart
const ctx = document.getElementById("tempChart");

const chart = new Chart(ctx, {

    type: "line",

    data: {

        labels: ["1", "2", "3", "4", "5", "6"],

        datasets: [{

            label: "Temperature (°C)",

            data: tempData,

            borderColor: "#2563eb",

            backgroundColor: "rgba(37,99,235,0.2)",

            fill: true,

            tension: 0.4

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: true

            }

        }

    }

});


// Initial Button Text
document.getElementById("lightBtn").innerHTML = "Turn ON";
document.getElementById("fanBtn").innerHTML = "Turn ON";
document.getElementById("acBtn").innerHTML = "Turn ON";
document.getElementById("doorBtn").innerHTML = "Unlock";