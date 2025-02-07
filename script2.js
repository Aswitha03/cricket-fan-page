const slider = document.querySelector('.player-slider');
let scrollAmount = 0;

function slidePlayers() {
    scrollAmount += 320; // Adjust this value as per the card width
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Reset to the beginning
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Auto slide every 3 seconds
setInterval(slidePlayers, 3000);



// Example Player Profiles Data with Hometown Coordinates
const playerProfiles = [
    {
        name: "Rohit Sharma",
        image: "images/Rohit Sharma.jpeg",
        career: "2007-Present",
        stats: "Matches: 240+ ODIs, Runs: 10,000+, 100s: 29",
        achievements: "World record 3 double centuries in ODIs, Indian Captain.",
        hometown: { lat: 19.076, lng: 72.8777 } // Mumbai coordinates
    },
    {
        name: "Virat Kohli",
        image: "images/virat kohli.jpeg",
        career: "2008-Present",
        stats: "Matches: 260+ ODIs, Runs: 12,000+, 100s: 43",
        achievements: "Ranked as one of the best batsmen globally, Former Indian Captain.",
        hometown: { lat: 28.6139, lng: 77.2090 } // Delhi coordinates
    },
    {
        name: "MS Dhoni",
        image: "images/Mahendra Singh Dhoni.jpg",
        career: "2004-2019",
        stats: "Matches: 350 ODIs, Runs: 10,773, 100s: 10",
        achievements: "Led India to T20 World Cup 2007 and ODI World Cup 2011.",
        hometown: { lat: 23.8347, lng: 87.2789 } // Ranchi coordinates
    }
];


const players = [
    { name: 'Player 1', lat: 40.7128, lng: -74.0060, hometown: 'New York' },  // Example: New York
    { name: 'Player 2', lat: 34.0522, lng: -118.2437, hometown: 'Los Angeles' },  // Example: Los Angeles
    { name: 'Player 3', lat: 51.5074, lng: -0.1278, hometown: 'London' },  // Example: London
    // Add more players here
];

function initMap() {
    // Create a map centered around the first player's hometown
    const center = { lat: players[0].lat, lng: players[0].lng };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: center
    });

    // Add a marker for each player
    players.forEach(player => {
        const marker = new google.maps.Marker({
            position: { lat: player.lat, lng: player.lng },
            map: map,
            title: `${player.name} - Hometown: ${player.hometown}`
        });
    });
}
// script2.js

document.getElementById('fan-story-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const fanName = document.getElementById('fan-name').value;
    const fanStory = document.getElementById('fan-story').value;

    // Create a new list item for the fan story
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${fanName}</strong>: ${fanStory}`;
    
    // Append the new story to the list
    document.getElementById('fan-stories-list').appendChild(listItem);

    // Clear the input fields
    document.getElementById('fan-name').value = '';
    document.getElementById('fan-story').value = '';
});
