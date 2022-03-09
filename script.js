console.log("Teste")
function contar() {
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('res')
   
     
    if ( txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) 
    { 
        window.alert('[ERROR] digite certo')
        res.innerHTML = `impossível contar`
    } 
    else  
    {
    res.innerHTML = `Contando: <br>`
    var ni = Number(txti.value)
    var nf = Number(txtf.value)
    var np = Number(txtp.value)
    if (np <= 0) {
        window.alert('passo inválido, considerando passo 1')
        np = 1
    }
    if ( ni < nf) 
    {
    for(let c = ni; c <= nf; c += np) 
    {
    res.innerHTML += ` ${c} \u{1F449} `
    }

    
        }else {
            for (let c = ni; c >= nf; c -= np) 
            {
                res.innerHTML += ` ${c} \u{1f449} `
            }
                
                res.innerHTML += `\u{1F3C1}`

        } 
}
}
