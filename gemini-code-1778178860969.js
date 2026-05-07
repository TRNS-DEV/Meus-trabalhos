function exibir(){
    let cont = 1;
    let texto = "";

    do {
        texto += cont + " "; // 1. Faz a ação primeiro
        document.getElementById("msg").value = texto;
        cont++; // 2. Atualiza o contador
    } while (cont <= 10); // 3. Pergunta se deve repetir
}