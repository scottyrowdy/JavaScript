function isikukoodInfo(isikukood) {
    let sugu = (parseInt(isikukood[0]) % 2 === 0) ? "Naine" : "Mees";
    let sajandikood = parseInt(isikukood[0]);
    let sajand = (sajandikood <= 2) ? 1800 : (sajandikood <= 4) ? 1900 : 2000;
    let aasta = sajand + parseInt(isikukood.substring(1, 3));
    let kuu = parseInt(isikukood.substring(3, 5));
    let päev = parseInt(isikukood.substring(5, 7));

    let sünnipäev = new Date(`${aasta}-${kuu}-${päev}`);
    let nädalapäev = sünnipäev.toLocaleDateString('et-EE', { weekday: 'long' });
    let täna = new Date();
    let vanusPäevades = Math.floor((täna - sünnipäev) / (1000 * 60 * 60 * 24));
    let vanusAastates = täna.getFullYear() - sünnipäev.getFullYear();

    // Arvutame elunumbri
    let elunumber = aasta * kuu * päev;
    let elukvaliteet = elunumber.toString().split('').map(num => parseInt(num));

    console.log(`Sugu: ${sugu}`);
    console.log(`Sajand: ${sajand}`);
    console.log(`Sünnipäev: ${sünnipäev.toLocaleDateString('et-EE')}`);
    console.log(`Sündimise nädalapäev: ${nädalapäev}`);
    console.log(`Vanus päevades: ${vanusPäevades}`);
    console.log(`Vanus aastates: ${vanusAastates}`);
    console.log(`Elunumber: ${elunumber}`);
    elukvaliteet.forEach((elukval, index) => {
        console.log(`${index * 12}-aastaselt: ${elukval}`);
    });
}

// Näide kasutusest
let isikukood = prompt("Sisesta isikukood:");
isikukoodInfo(isikukood);