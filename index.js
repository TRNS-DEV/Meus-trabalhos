const formulario=document.getElementById("formulario-notas");
formulario.addEventListener("submit", function(evento){
    //1.interroper o recarregamento da pagina
    evento.preventDefault();
    // salavando os valores que vão estar nas caixas de notas do primeiro trimestre//
    const t1Nota1=Number(document.getElementById("t1-nota1").value);
    const t1Nota2=Number(document.getElementById("t1-nota2").value);
    const t1Nota3 = Number(document.getElementById("t1-nota3").value);
    const mediaTrimestre1= (t1Nota1+ t1Nota2+ t1Nota3)/3;

//segundo trimestre e seu calculo
const t2Nota1=Number(document.getElementById("t2-nota1").value);
 const t2Nota2=Number(document.getElementById("t2-nota2").value);
 const t2Nota3= Number(document.getElementById("t2-nota3").value);
 const mediaTrimestre2= (t2Nota1+ t2Nota2 + t2Nota3)/3;
 
//Terceiro trimestre e seu calculo
const t3Nota1=Number(document.getElementById("t3-nota1").value);
 const t3Nota2=Number(document.getElementById("t3-nota2").value);
 const t3Nota3= Number(document.getElementById("t3-nota3").value);
 const mediaTrimestre3= (t3Nota1+ t3Nota2+ t3Nota3)/3;

//Calculo da media Anual
const mediaAnual=(mediaTrimestre1 + mediaTrimestre2 + mediaTrimestre3)/3
if (mediaAnual >= 6) {
        document.getElementById("painel-resultado").innerHTML = `
        <h3>Parabéns! Você foi aprovado!</h3>
            <p>Média T1: ${mediaTrimestre1.toFixed(1)} | Média T2: ${mediaTrimestre2.toFixed(1)} | Média T3: ${mediaTrimestre3.toFixed(1)}</p>
            <p><strong>Média Final Anual: ${mediaAnual.toFixed(1)}</strong></p>`
        document.getElementById("painel-resultado").classList.remove("recuperacao");
document.getElementById("painel-resultado").classList.add("aprovado");
        
    } else {
        document.getElementById("painel-resultado").innerHTML = `
            
        <h3>Média anual abaixo do necessário. Você está de recuperação.</h3>
            <p>Média T1: ${mediaTrimestre1.toFixed(1)} | Média T2: ${mediaTrimestre2.toFixed(1)} | Média T3: ${mediaTrimestre3.toFixed(1)}</p>
            <p><strong>Média Final Anual: ${mediaAnual.toFixed(1)}</strong></p>`
            document.getElementById("painel-resultado").classList.remove("aprovado");
document.getElementById("painel-resultado").classList.add("recuperacao");
        ;
    }
});
