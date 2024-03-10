document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://api.npoint.io/7bbd3a59c401f616bb89');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        displayCityDetails(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

function displayCityDetails(cities) {
    const container = document.getElementById('cityContainer');

    cities.forEach(city => {
        const card = document.createElement('div');
        card.classList.add('city-card');

        const cityName = document.createElement('div');
        cityName.classList.add('city-name');
        cityName.textContent = city.name;

        const cityDetails = document.createElement('div');
        cityDetails.classList.add('city-details');
        cityDetails.textContent = `Population: ${city.population}, State: ${city.state}, District: ${city.district}`;

        card.appendChild(cityName);
        card.appendChild(cityDetails);

        container.appendChild(card);
    });
}
