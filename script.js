console.log("Teste")
function contar() {
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('res')

    res.innerHTML = `Contando`
    var ni = Number(txti.value)
    var nf = Number(txtf.value)
    var np = Number(txtp.value)
   
     
    if ( ni.value.length == 0 || Number(nf.value) <= nf || Number(nf.value) < 0) { 
        document.alert('[ERROR] digite certo')
        res.innerHTML = `impossível contar`
    } else if (nf.value.length == 0 || Number(nf.value) < 0){
        document.alert('[ERROR] digite certo')
        res.innerHTML = `impossível contar`
    } else if (np.value.length == 0 || Number(np.value) <0){
        document.alert('[ERROR] digite certo')
        res.innerHTML = `impossível contar`
    } else {
        for (let c = ni; c < nf; c += np){
            res.innerHTML += `deu:👉${c}`
        }
    }

 }