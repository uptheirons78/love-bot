function randomIt() {
    return Math.floor(Math.random() * 100);
}

function funRandomPlanet() {
    const planets = [
        "Proxima Centauri b",
        "Gliese 667 Cc",
        "Kepler-442b",
        "Kepler-452b",
        "Wolf 1061c",
        "Kepler-1229b",
        "Kapteyn b*",
        "Kepler-62f",
        "Kepler-186f",
        "Luyten b",
        "TRAPPIST-1d",
        "TRAPPIST-1e",
        "TRAPPIST-1f",
        "TRAPPIST-1g",
        "LHS 1140 b",
        "Kepler-1638b"
    ];
    return planets[Math.floor(Math.random() * planets.length)];
}

function funSerialSentence() {
    const vale = '@Naticchioni_V';
    const sentence = `Hello there .${vale}, I am the Bot N.${randomIt()}${randomIt()}${randomIt()} here from Planet ${funRandomPlanet()} to remember you how much your husband LOVES YOU ;)`;
    const obj = {status: sentence};
    return obj;
}

module.exports.funSerialSentence = funSerialSentence;