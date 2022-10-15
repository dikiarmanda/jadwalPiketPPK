document.getElementById('tanggal').innerHTML = moment().format('dddd, DD MMMM YYYY');

function generate() {
    document.getElementById('formInput').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');

    let piket = [], adang = [];
    // ambil data cowok
    piket = rekap('cowok', piket);
    adang = rekap('cewek', adang);

    let urutan = kocok(piket.length);
    let chef = kocok(1);

    document.getElementById('adang').innerHTML += adang[chef];
    document.getElementById('nyapuPagi').innerHTML += piket[urutan[0]];
    document.getElementById('nyapuSore').innerHTML += piket[urutan[1]];
    document.getElementById('ngepel').innerHTML += piket[urutan[2]];
    document.getElementById('kora').innerHTML += piket[urutan[3]];

    switch (urutan.length) {
        case 10:
            document.getElementById('kora').innerHTML += ', ' + piket[urutan[9]];
        case 9:
            document.getElementById('nyapuSore').innerHTML += ', ' + piket[urutan[8]];
        case 8:
            document.getElementById('kora').innerHTML += ', ' + piket[urutan[7]];
        case 7:
            document.getElementById('ngepel').innerHTML += ', ' + piket[urutan[6]];
        case 6:
            document.getElementById('nyapuSore').innerHTML += ', ' + piket[urutan[5]];
        case 5:
            document.getElementById('nyapuPagi').innerHTML += ', ' + piket[urutan[4]];
            break;            
        default:
            break;
    }
}

function rekap(name, arrAkhir) {
    arrAwal = document.getElementsByName(name);
    for (let i = 0; i < arrAwal.length; i++) {
        if (arrAwal[i].checked) {
            arrAkhir.push(arrAwal[i].value);
        }
    }
    return arrAkhir;
}

function kocok(jml) {
    let acak = [];
    let angka;
    while (acak.length != jml) {
        angka = Math.floor(Math.random()*10);
        if (acak.indexOf(angka) === -1) {
            acak.push(angka);
        }
    }
    return acak;
}