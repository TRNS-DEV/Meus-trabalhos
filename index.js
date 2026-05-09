function login(){
    let cpf= document.getElementById("CPF").value;
    do{
        if(cpf.length===14){
            document.getElementById("msg").innerHTML="CPF valido!";
            document.getElementById("CPF").value="";
        }
        else{
            document.getElementById("msg").innerHTML="CPF invalido!";
            document.getElementById("CPF").value="";
            break;
        }
    } while(cpf.length!==14);
}