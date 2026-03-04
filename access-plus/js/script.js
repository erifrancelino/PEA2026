// =========================
// BOTÃO DE ALTO CONTRASTE
// =========================

// Pega o botão
const toggleButton = document.getElementById("toggle-contrast");

// Função para criar alertas acessíveis
function showAlert(message, type = "info") {
    // Verifica se o container existe, senão cria
    let container = document.getElementById("alerts-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "alerts-container";
        container.setAttribute("aria-live", "polite");
        container.setAttribute("aria-atomic", "true");
        container.style.position = "fixed";
        container.style.top = "1rem";
        container.style.right = "1rem";
        container.style.zIndex = "1000";
        document.body.appendChild(container);
    }

    // Cria a caixa de alerta
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `alert alert-${type}`;
    alertBox.setAttribute("role", "alert"); // leitura por leitores de tela
    alertBox.style.backgroundColor = "#7A9E7E"; // cor da paleta
    alertBox.style.color = "#fff";
    alertBox.style.padding = "0.5rem 1rem";
    alertBox.style.marginBottom = "0.5rem";
    alertBox.style.borderRadius = "4px";
    alertBox.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";

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
