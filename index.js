const formulario=document.getElementById("formulario-notas");
formulario.addEventListener("submit", function(evento){
    //1.interroper o recarregamento da pagina
    evento.preventDefault();
    // salavando os valores que vão estar nas caixas de notas do primeiro trimestre//
    const first=Number(document.getElementById("t1-nota1").value);
    const second=Number(document.getElementById("t1-nota2").value);
    const third = Number(document.getElementById("t1-nota3").value);
    const mediaTrimestre1= (first+ second+ third)/3;

//segundo trimestre e seu calculo
const fourth=Number(document.getElementById("t2-nota1").value);
 const fifth=Number(document.getElementById("t2-nota2").value);
 const sixth= Number(document.getElementById("t2-nota3").value);
 const mediaTrimestre2= (fourth+ fifth+ sixth)/3;
 
//Terceiro trimestre e seu calculo
const seventh=Number(document.getElementById("t3-nota1").value);
 const eighth=Number(document.getElementById("t3-nota2").value);
 const ninth= Number(document.getElementById("t3-nota3").value);
 const mediaTrimestre3= (seventh+ eighth+ ninth)/3;

//Calculo da media Anual
const mediaAnual=(mediaTrimestre1 + mediaTrimestre2 + mediaTrimestre3)/3
if (mediaAnual >= 6) {
        document.getElementById("painel-resultado").innerHTML = `
            <h3>Parabéns! Você foi aprovado!</h3>
            <p>Média T1: ${mediaTrimestre1.toFixed(1)} | Média T2: ${mediaTrimestre2.toFixed(1)} | Média T3: ${mediaTrimestre3.toFixed(1)}</p>
            <p><strong>Média Final Anual: ${mediaAnual.toFixed(1)}</strong></p>
        `;
    } else {
        document.getElementById("painel-resultado").innerHTML = `
            <h3>Média anual abaixo do necessário. Você está de recuperação.</h3>
            <p>Média T1: ${mediaTrimestre1.toFixed(1)} | Média T2: ${mediaTrimestre2.toFixed(1)} | Média T3: ${mediaTrimestre3.toFixed(1)}</p>
            <p><strong>Média Final Anual: ${mediaAnual.toFixed(1)}</strong></p>
        `;
    }
});
