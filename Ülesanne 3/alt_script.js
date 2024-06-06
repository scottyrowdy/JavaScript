const küsimused = [
    {
        küsimus: "Mis on JavaScript?",
        vastused: ["A) Programmeerimiskeel", "B) Stiilileht", "C) Andmebaas", "D) Operatsioonisüsteem"],
        õigeVastus: 0
    },
    {
        küsimus: "Kuidas saab JavaScriptis muutuja defineerida?",
        vastused: ["A) var", "B) let", "C) const", "D) Kõik eelnimetatud"],
        õigeVastus: 3
    },
    {
        küsimus: "Mis on DOM?",
        vastused: ["A) Dokumentide objektide mudel", "B) Digitaalse optimeerimise meetod", "C) Andmebaas", "D) Objektorienteeritud mudel"],
        õigeVastus: 0
    },
    {
        küsimus: "Kuidas logime konsooli?",
        vastused: ["A) console.print()", "B) console.write()", "C) console.log()", "D) console.display()"],
        õigeVastus: 2
    },
    {
        küsimus: "Kuidas defineeritakse funktsioon JavaScriptis?",
        vastused: ["A) function myFunction()", "B) define myFunction()", "C) create myFunction()", "D) make myFunction()"],
        õigeVastus: 0
    }
];

// Näide küsimuste kuvamisest
function kuvaKüsimused() {
    küsimused.forEach((küsimus, index) => {
        console.log(`${index + 1}. ${küsimus.küsimus}`);
        küsimus.vastused.forEach((vastus, i) => {
            console.log(`${String.fromCharCode(65 + i)}) ${vastus}`);
        });
    });
}

kuvaKüsimused();