// Import the Leaflet.js library
import L from 'leaflet';

// Initialize the map
const map = L.map('map').setView([10.938677, 78.136023], 15);

// Add a tile layer (you can choose a different map provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the specific GPS location
L.marker([10.938677, 78.136023]).addTo(map)
    .bindPopup('Bus Location: 10.938677, 78.136023')
    .openPopup();
