ModalChurrasco = document.getElementById("ModalChurrasco");
fecharModalChurrasco = document.getElementById("fecharModalChurrasco");
function churrasco(){
    console.log("clicou no churrasco");
    ModalChurrasco.style.display = "block";
}
fecharModalChurrasco.onclick = function(){;
    ModalChurrasco.style.display = "none";
}

function resultadochurrasco() {
    var Adulto = parseInt(document.getElementById("Adulto").value);
    var crianca = parseInt(document.getElementById("Criança").value);
    var duracao = parseInt(document.getElementById("Duração").value);

    var carneporpessoa, bebidasporpessoa, cervejaporhora;
    if (duracao <= 3){

        carneporpessoa = 0.25;
        bebidasporpessoa = 0.3;
        cervejaporhora = 0.25;
    } else if (duration < 7) {
        carneporpessoa =0.5;
        bebidasporpessoa = 0.6;
        cervejaporhora = 0.50;
    }
    else{
        carneporpessoa = 0.75;
        bebidasporpessoa = 0.8;
        cervejaporhora = 0.75;
    }

    var carne = Adulto * carneporpessoa + crianca *carneporpessoa / 2;
    var bebidas = Adulto * bebidasporpessoa + crianca *bebidasporpessoa / 2;
    var cervejas = duracao * Adulto * cervejaporhora
    
    var resultado = document.getElementById("resultado")
  resultado.innerHTML = "<h2>Resultado:</h2><ul><li>Carne" + carne.toFixed(2) + " kg</li><li>bebidas : " + bebidas.toFixed(2) +"L</li><li>Cerveja " + cervejas.toFixed(2) + "L</li></ul>";
}