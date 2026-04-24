function verificartime(){
    let numero=Number(document.getElementById("Times").value);
    let notificaco= "";
    switch (numero) {
        case 1:
            notificaco="Você esta torcendo para o Bayer de Munique!"
            break;
            case 2:
                notificaco="Você esta torcendo para o Sporting!"
                break;
                case 3:
                    notificaco="Você esta torcendo para o Arsenal!"
                    break;
                    case 4:
              notificaco="Você esta torcendo para o atletico de Madri!"
              break
        default:
            notificaco="Número Inválido, por favor selecione um numero de 1 a 4"
    }
    document.getElementById("Resposta").innerHTML=notificaco;
}