var cena = 0;
var pocet = 1;
var zpatecni = 1;
var prirazka = 1;
var cenaCelkem = 0;
var castka;
document.getElementById("cena-celkem").readOnly = true;

function spoctiCenuAZapisJi() {
    cenaCelkem = ((cena * pocet) * zpatecni) * prirazka;
    document.getElementById("cena-celkem").value = cenaCelkem;
}

function vyberLetenku() {
    cena = parseInt(document.getElementById("letenka").value);
    //console.log("cena: " + cena);
}

function zjistiPocet() {
    pocet = parseInt(document.getElementById("pocet").value);
    //console.log("počet: " + pocet);
}

function zjistiZpatecni() {
    if (document.getElementById("zpatecni").checked) {
        zpatecni = 2;
    }
    else {
        zpatecni = 1;
    }
    //console.log("přirážka za zpáteční: " + zpatecni);
}

function zjistiPrirazku() {
    for (i = 0; i < 3; i++) {
        if(document.letenkyForm.prirazka[i].checked) {
            prirazka = 1 + parseFloat(document.letenkyForm.prirazka[i].value);
        }
    }
    //console.log("přirážka: " + prirazka);
}

function porovnej() {
    castka = parseInt(document.getElementById("k-utraceni").value);
    if (document.getElementById("k-utraceni").value == "") {
        document.getElementById("vyhodnoceniKontroly").innerText = "Zadejte částku k utracení."
    }
    else if (cenaCelkem == 0) {
        document.getElementById("vyhodnoceniKontroly").innerText = "Nejdřív vyberte letenky."
    }
    else if (castka < cenaCelkem) {
         document.getElementById("vyhodnoceniKontroly").innerText = "Nemáte na to, musíte si vybrat levnější letenku.";
    }
    else if (castka >= cenaCelkem) {
        document.getElementById("vyhodnoceniKontroly").innerText = "OK, můžete letenky koupit.";  
    }
}

function validace() {
    var regex = /^[a-zA-Zá-žÁ-Ž0-9., ]+$/;
    var pozn = document.getElementById("poznamka").value;
    var platny = regex.test(pozn);
    if ((!platny) && (pozn != "")) {
        document.getElementById("text-validace").innerText = "vaše poznámka nesmí obsahovat žádné speciální znaky (?#§ apod.)"; 
    }
    else {
        document.getElementById("text-validace").innerText = "";
    }
}    
