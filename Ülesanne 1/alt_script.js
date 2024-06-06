function kontrolliArvu() {
    let arv = parseInt(prompt("Palun sisesta arv:"));
    let jagubSeitsmega = arv % 7 === 0;

    if (arv >= 1 && arv <= 100 && jagubSeitsmega) {
        console.log(`Arv ${arv} on vahemikus 1 kuni 100 ja jagub 7-ga.`);
    } else {
        console.log("Sisestatud arv ei vasta esimesele tingimusele.");
    }

    if (arv < 100 || arv > 200) {
        console.log(`Arv ${arv} on kas alla 100 või üle 200.`);
    } else {
        console.log("Sisestatud arv ei vasta teisele tingimusele.");
    }
}

// Näide kasutusest
kontrolliArvu();