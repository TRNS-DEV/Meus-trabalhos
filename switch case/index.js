function verificartime(){
    let produto=Number(document.getElementById("time").value);
    let mensagem= "";
    switch(produto){
        case 1:
            mensagem="voce escolheu Sport";
            break;
            case 2:
                mensagem="voce escolheu o nautico"
                break;
                case 3:
                    mensagem="voce escolheu o Santa cruz";
                    break;
                    default:
                        mensagem="codigo invalido";
    }
document.getElementById("resultado").innerHTML= mensagem;
}
function vpedido(){
    let produto= Number(document.getElementById("produto").value);
    let mensagem= "";
    switch(produto){
        case 1:
            mensagem="voce comprou hamburger";
            break;
            case 2:
                mensagem="voce comprou pizza";
                break;
                case 3:
                    mensagem="voce comprou pepsi";
                    break;
                    default:
                        mensagem="codigo invalido"
                        break;

    }
    document.getElementById("resultado2").innerHTML=mensagem;


}
function calcular(){
    let produto=Number(document.getElementById("produto").value);
    let quantidade=Number(document.getElementById("quantidade").value);
    let nome=""
    let preco=0
    let total=0;
    let mensagem="";
    switch(produto){
        case 1:
            nome="Playstation"
            preco=10;
            total=preco*quantidade
            if(quantidade>=3){
                mensagem="voce ganhou desconto";
                total=total*0.9//desconto de 10%
            }else{
                mensagem= "compre mais 3 para o desconto"
            }
            break;
            case 2:
            nome="Xbox"
            preco=20;
            total=preco*quantidade
            if(quantidade>=2){
                mensagem="voce ganhou desconto";
                total=total*0.9//desconto de 10%
    
    }

    }