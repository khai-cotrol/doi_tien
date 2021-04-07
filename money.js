function exchange() {
    let money = document.getElementById('money').value;
    let from = document.getElementById('tien').value ;
    let to =document.getElementById('dola').value ;
    x = money*to/from;
    document.getElementById('result').innerText = 'result: '+ x;
}
