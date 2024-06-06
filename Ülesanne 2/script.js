function leiaSuurimArv() {
    let arvud = [];
    for (let i = 0; i < 10; i++) {
        let arv = parseInt(prompt(`Sisesta ${i + 1}. arv:`));
        arvud.push(arv);
    }

    let suurimArv = Math.max(...arvud);
    console.log("Suurim arv on:", suurimArv);
}

// Näide kasutusest
leiaSuurimArv();