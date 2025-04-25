let intervalo
function IniciarCronometro() {
    clearInterval (intervalo);
    const dataFutura = new Date("2025-12-19T23:59:59");
    intervalo = setInterval(()=>{
        const agora= new Date ();
        const diferença = dataFutura - agora;
        document.getElementById('timer').textContent = `${diferença} miliegundos`;
    },100)
    
}
IniciarCronometro();