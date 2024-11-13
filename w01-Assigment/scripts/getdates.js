// Função para formatar a data e hora
function formatDateTime(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    return date.toLocaleString('eng-AR', options);
}
function updateInfo() {
    const currentDateTime = new Date(); // Pega a data e hora atual
    const lastUpdateElement = document.getElementById('lastUpdate');
    const currentTimeElement = document.getElementById('currentTime');
    
    // Atualiza a data da última atualização
    lastUpdateElement.textContent = formatDateTime(currentDateTime);

    // Atualiza a hora atual
    currentTimeElement.textContent = formatDateTime(currentDateTime);
}

window.onload = updateInfo;
