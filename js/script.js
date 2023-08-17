// script.js
function calculateArea() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
   
    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById('luas-output').innerHTML = `<br>Mohon masukkan angka terlebih dahulu!`;
    } else {
        var hasil = 0.5 * alas * tinggi;
    document.getElementById('luas-output').innerHTML = `<br>Luas = 1/2 x a x t`;
    document.getElementById('luas-output').innerHTML += `<br>Luas = 1/2 x ${alas} x ${tinggi}`;
    document.getElementById('luas-output').innerHTML += `<br>Luas = ${hasil} cm²`;
    }
}

function calculatePerimeter() {
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);
    
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        document.getElementById('keliling-output').innerHTML = `<br>Mohon masukkan angka terlebih dahulu!`;
    } else {
        var keliling = sisiA + sisiB + sisiC;
    document.getElementById('keliling-output').innerHTML = `<br>Keliling = S1 + S2 + S3`;    
    document.getElementById('keliling-output').innerHTML += `<br>Keliling = ${sisiA} + ${sisiB} + ${sisiC}`;
    document.getElementById('keliling-output').innerHTML += `<br>Keliling = ${keliling} cm`;
}
}

function resetFields() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas-output').innerHTML = '';
}

function resetFieldskeliling() {
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('keliling-output').innerHTML = '';
}


