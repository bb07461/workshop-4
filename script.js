// For testing puroposes, you may need to change these places to something closer to you
const places = [
    //{ name: "Rochester Abandoned Subway", latitude: 43.154722, longitude: -77.609722 },
    //{ name: "Washington Square Park", latitude: 43.1534, longitude: -77.6053 },
    //{ name: "Rochester Contemporary Art Center", latitude: 43.156619, longitude: -77.600730 }

    { name: "global", latitude: 43.0829120519165,  longitude: -77.68123777513149 },
    { name: "Crossroads", latitude:  43.08795684702077, longitude: -77.67605308923152 },
    { name: "Midnight Oil", latitude: 43.08283376298113,  longitude: -77.67989886143505}
    
];

const loadPlaces = () => {
    const scene = document.querySelector("a-scene");

    places.forEach(place => {
        const entity = document.createElement("a-entity");

        entity.setAttribute("gps-entity-place", `latitude: ${place.latitude}; longitude: ${place.longitude}`);
        entity.setAttribute("geometry", "primitive: sphere; radius: 1");
        entity.setAttribute("material", "color: blue");
        entity.setAttribute("visible", "false");

        const text = document.createElement("a-text");
        text.setAttribute("value", place.name);
        text.setAttribute("align", "center");
        text.setAttribute("position", "0 2 0");
        entity.appendChild(text);

        entity.addEventListener("click", () => alert(`You clicked on: ${place.name}`));

        scene.appendChild(entity);
    });

     // Listen to device orientation
     window.addEventListener("deviceorientation", (event) => {
        let beta = event.beta; // Forward or backward tilt
        places.forEach(place => {
            if (beta > 20) { // Adjust the threshold based on testing
                place.entity.setAttribute("visible", "true");
            } else {
                place.entity.setAttribute("visible", "false");
            }
        });
    });
};

window.onload = loadPlaces;