function calculate() {
    const runMin = document.getElementById('runmin').value;
    const runSec = document.getElementById('runsec').value;

    document.getElementById('error').style.display = 'none';
    document.getElementById('times').style.display = 'none';

    if(runSec > 59 || runSec < 0 || runMin < 1) {
        document.getElementById('error').style.display = 'block';
    } else {

    let fiveKHour = 0;
    let fiveKMin = parseInt(runMin * 3.1);
    const fiveKMinOver = ((parseInt(((runMin * 3.1) % 1).toFixed(2).substring(2))) / 100) * 60;
    let fiveKSec = (runSec * 3.1) + fiveKMinOver;
    const fiveKSecToMin = parseInt(fiveKSec / 60);
    fiveKMin += fiveKSecToMin;
    fiveKSec = Math.ceil(fiveKSec % 60);
    if (fiveKMin > 59) {
        fiveKHour = parseInt(fiveKMin / 60);
        fiveKMin = fiveKMin % 60;
    } else {

    }

    document.getElementById('fivekhour').innerHTML = fiveKHour;
    document.getElementById('fivekmin').innerHTML = fiveKMin;
    document.getElementById('fiveksec').innerHTML = fiveKSec;


    let tenKHour = 0;
    let tenKMin = parseInt(runMin * 6.2);
    const tenKMinOver = ((parseInt(((runMin * 6.2) % 1).toFixed(2).substring(2))) / 100) * 60;
    let tenKSec = (runSec * 6.2) + tenKMinOver;
    const tenKSecToMin = parseInt(tenKSec / 60);
    tenKMin += tenKSecToMin;
    tenKSec = Math.ceil(tenKSec % 60);
    if (tenKMin > 59) {
        tenKHour = parseInt(tenKMin / 60);
        tenKMin = tenKMin % 60;
    } else {

    }

    document.getElementById('tenkhour').innerHTML = tenKHour;
    document.getElementById('tenkmin').innerHTML = tenKMin;
    document.getElementById('tenksec').innerHTML = tenKSec;


    let halfHour = 0;
    let halfMin = parseInt(runMin * 13.1);
    const halfMinOver = ((parseInt(((runMin * 13.1) % 1).toFixed(2).substring(2))) / 100) * 60;
    let halfSec = (runSec * 13.1) + halfMinOver;
    const halfSecToMin = parseInt(halfSec / 60);
    halfMin += halfSecToMin;
    halfSec = Math.ceil(halfSec % 60)
    if (halfMin > 59) {
        halfHour = parseInt(halfMin / 60);
        halfMin = halfMin % 60;
    } else {
    
    }

    document.getElementById('halfhour').innerHTML = halfHour;
    document.getElementById('halfmin').innerHTML = halfMin;
    document.getElementById('halfsec').innerHTML = halfSec;


    let fullHour = 0;
    let fullMin = parseInt(runMin * 26.2);
    const fullMinOver = ((parseInt(((runMin * 26.2) % 1).toFixed(2).substring(2))) / 100) * 60;
    let fullSec = (runSec * 26.2) + fullMinOver;
    const fullSecToMin = parseInt(fullSec / 60);
    fullMin += fullSecToMin;
    fullSec = Math.ceil(fullSec % 60);
    if (fullMin > 59) {
        fullHour = parseInt(fullMin / 60);
        fullMin = fullMin % 60;
    } else {

    }

    document.getElementById('fullhour').innerHTML = fullHour;
    document.getElementById('fullmin').innerHTML = fullMin;
    document.getElementById('fullsec').innerHTML = fullSec;

    document.getElementById('times').style.display = 'block';
    }

}