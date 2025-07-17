document.getElementById('fill').addEventListener('click', async () => {
  const button = document.getElementById('fill');
  const loading = document.getElementById('loading');
  const autoSubmit = document.getElementById('submit').checked;

  // Feedback visual ao clicar
  button.textContent = '⏳ Preenchendo...';
  button.disabled = true;
  loading.style.display = 'block';

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Manda mensagem pro content script
    const response = await chrome.tabs.sendMessage(tab.id, {
      action: 'fillForm',
      autoSubmit: autoSubmit
    });

    // Feedback de sucesso
    if (response && response.success) {
      button.textContent = `✅ ${response.filled} campos preenchidos!`;
      button.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
      
      setTimeout(() => {
        button.textContent = '🚀 Preencher Formulário';
        button.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e53)';
        button.disabled = false;
        loading.style.display = 'none';
      }, 2000);
    }

  } catch (error) {
    // Feedback de erro
    console.error('Erro ao preencher formulário:', error);
    button.textContent = '❌ Erro! Tente novamente';
    button.style.background = 'linear-gradient(45deg, #f44336, #e53935)';
    
    setTimeout(() => {
      button.textContent = '🚀 Preencher Formulário';
      button.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e53)';
      button.disabled = false;
      loading.style.display = 'none';
    }, 2000);
  }
});

// Animação no checkbox
document.getElementById('submit').addEventListener('change', function() {
  const container = this.closest('.checkbox-container');
  if (this.checked) {
    container.style.background = 'rgba(76, 175, 80, 0.2)';
    container.style.borderColor = 'rgba(76, 175, 80, 0.4)';
  } else {
    container.style.background = 'rgba(255, 255, 255, 0.1)';
    container.style.borderColor = 'rgba(255, 255, 255, 0.2)';
  }
});
  