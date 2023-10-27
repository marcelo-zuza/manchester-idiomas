// Função para verificar a posição da rolagem e mostrar os blocos
function mostrarBlocosAoRolagem() {
    var block1 = document.querySelector("#block1");
    // Verifica a posição da rolagem em relação aos blocos
    var triggerPosition = window.innerHeight - 100;
    if (window.scrollY > triggerPosition) {
        block1.classList.add("fade-in");
    }
}
// Adicione um ouvinte de evento para verificar a rolagem
window.addEventListener("scroll", mostrarBlocosAoRolagem);
