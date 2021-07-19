var map = L.map('main_map').setView([3.403934, -76.522559], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([3.4608263,-76.5283248]).addTo(map)
L.marker([3.4608263,-76.5292248]).addTo(map)
    