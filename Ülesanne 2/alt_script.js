function leiaSuurimArv() {
    let suurim = -Infinity;
    for (let i = 0; i < 10; i++) {
        let sisestus = parseInt(prompt(`Palun sisesta ${i + 1}. arv:`));
        if (sisestus > suurim) {
            suurim = sisestus;
        }
    }
    console.log(`Kõige suurem sisestatud arv on: ${suurim}`);
}

// Näide kasutusest
leiaSuurimArv();