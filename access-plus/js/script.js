// =========================
// BOTÃO DE ALTO CONTRASTE
// =========================

// Pega o botão
const toggleButton = document.getElementById("toggle-contrast");

// Função para criar alertas acessíveis
function showAlert(message, type = "info") {
    const container = document.getElementById("alerts-container");

    // Cria a caixa de alerta
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `alert alert-${type}`;
    alertBox.setAttribute("role", "alert"); // leitura por leitores de tela

    container.appendChild(alertBox);

    // Remove automaticamente após 3 segundos
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

// Event listener do botão
toggleButton.addEventListener("click", function () {
    // Alterna a classe de alto contraste
    document.body.classList.toggle("high-contrast");

    // Atualiza atributo aria-pressed
    const isPressed = toggleButton.getAttribute("aria-pressed") === "true";
    toggleButton.setAttribute("aria-pressed", !isPressed);

    // Atualiza texto do botão
    toggleButton.textContent = isPressed
        ? "Ativar Alto Contraste"
        : "Desativar Alto Contraste";

    // Mostra alerta acessível
    showAlert(isPressed ? "Alto contraste desativado" : "Alto contraste ativado", "success");
});
