function isikukoodInfo(isikukood) {
    let sugu = (parseInt(isikukood.charAt(0)) % 2 === 0) ? "Naine" : "Mees";
    let sajand = parseInt(isikukood.charAt(0)) <= 2 ? 18 : parseInt(isikukood.charAt(0)) <= 4 ? 19 : 20;
    let aasta = sajand * 100 + parseInt(isikukood.substring(1, 3));
    let kuu = parseInt(isikukood.substring(3, 5)) - 1;
    let päev = parseInt(isikukood.substring(5, 7));

    let sünnipäev = new Date(aasta, kuu, päev);
    let täna = new Date();
    let vanusPäevades = Math.floor((täna - sünnipäev) / (1000 * 60 * 60 * 24));
    let vanusAastates = täna.getFullYear() - sünnipäev.getFullYear();

    let elunumber = (aasta * (kuu + 1) * päev).toString().split('').map(Number);
    let elukvaliteet = elunumber.reduce((acc, num) => acc + num, 0);

    console.log(`Sugu: ${sugu}`);
    console.log(`Sajand: ${sajand}`);
    console.log

(`Sünnipäev: ${sünnipäev.toLocaleDateString('et-EE')}`);
    console.log(`Vanus päevades: ${vanusPäevades}`);
    console.log(`Vanus aastates: ${vanusAastates}`);
    console.log(`Elunumber: ${elunumber}`);
    elunumber.forEach((elukval, index) => {
        console.log(`${index * 12}-aastaselt: ${elukval}`);
    });
}

// Näide kasutusest
let isikukood = prompt("Sisesta isikukood:");
isikukoodInfo(isikukood);