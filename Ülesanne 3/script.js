const küsimused = [
    {
        küsimus: "Mis on JavaScript?",
        vastused: ["A) Programmeerimiskeel", "B) Stiilileht", "C) Andmebaas", "D) Operatsioonisüsteem"],
        õige: "A"
    },
    {
        küsimus: "Kuidas saame defineerida muutuja JavaScriptis?",
        vastused: ["A) var", "B) let", "C) const", "D) Kõik eelnevad"],
        õige: "D"
    },
    {
        küsimus: "Mis on DOM?",
        vastused: ["A) Dokumentide objektide mudel", "B) Digitaalse optimeerimise meetod", "C) Andmebaas", "D) Objektorienteeritud mudel"],
        õige: "A"
    },
    {
        küsimus: "Kuidas saame välja logida konsooli?",
        vastused: ["A) console.print()", "B) console.write()", "C) console.log()", "D) console.display()"],
        õige: "C"
    },
    {
        küsimus: "Mis süntaksi kasutame funktsiooni defineerimiseks?",
        vastused: ["A) function myFunction()", "B) define myFunction()", "C) create myFunction()", "D) make myFunction()"],
        õige: "A"
    }
];

// Näide küsimuste kuvamisest
küsimused.forEach((küsimus, index) => {
    console.log(`${index + 1}. ${küsimus.küsimus}`);
    küsimus.vastused.forEach((vastus, i) => {
        console.log(vastus);
    });
});