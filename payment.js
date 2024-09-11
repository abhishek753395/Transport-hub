// Get query parameters from the URL (sent from the booking page)
const urlParams = new URLSearchParams(window.location.search);
const vehicleType = urlParams.get('vehicle-type');
const purpose = urlParams.get('purpose');

// Populate the vehicle and purpose in the Payment Page
document.getElementById('vehicle-type').innerText = vehicleType;
document.getElementById('purpose').innerText = purpose;

// Set a price based on the vehicle type
let price;
switch (vehicleType) {
    case 'bus':
        price = 7000; // Example pricing
        break;
    case 'truck':
        price = 7000;
        break;
    case 'taxi':
        price = 1500;
        break;
    case 'crane':
        price = 1000;
        break;
    case 'forklift':
        price = 2000;
        break;
    case 'jcb':
        price = 1200;
        break;
    default:
        price = 0;
}

// Display the price
document.getElementById('amount').value = price;
