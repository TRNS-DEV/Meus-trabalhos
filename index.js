function cadastro(){
    let vagas=7;
    let texto="";
    while(vagas>0){
        texto+="produto cadastrado com sucesso!"+"<br>";
        vagas--

    }
    texto+="ops não há mais vagas disponiveis";
    document.getElementById("result").innerHTML=texto;
}
function login(){
    let continuar;
    let texto="";

    do{
        texto+="produto cadastrado "+"<br>"
        continuar=prompt("cadastrar outro produto? S/N");
    }while(continuar=="S")
        document.getElementById("resposta").innerHTML=texto;
}
function cadastroFor(){
    let texto="";
    for(let i=1;i<=15;i++){
        texto+="produto"+ i +"cadastrado"+"<br>";
    
    }
    document.getElementById("resultado").innerHTML=texto;
}

    
