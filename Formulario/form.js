var s=document.getElementById('senha').value;

function vF(){
    var senha=document.getElementById('senha').value;  
    
    document.getElementById("impSenha").innerHTML = "Senha" + senha;

    if(senha.length < 3){
        document.getElementById("impSenha").innerHTML = "<span style='color:red'>Senha fraca</span>";
    }
    else if(senha.length <= 5){
        document.getElementById("impSenha").innerHTML = "<span style='color:orange'>Senha média</span>";
    }

    else if(senha.length >= 6){
        document.getElementById("impSenha").innerHTML = "<span style='color:green'>Senha forte</span>";
    }
}

function Validar(){
    var s2=alert( prompt("Digite a senha:"));
    
    if (s == s2){
        alert("Senha correta");
    }
    else{
        alert("Senha incorreta");
    }
}
