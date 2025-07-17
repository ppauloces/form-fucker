// ��🇷 FAKER BRASILEIRO - Dados realistas para desenvolvimento
const FakerBR = {
  // NOMES BRASILEIROS
  nomes: [
    'João', 'Maria', 'José', 'Ana', 'Pedro', 'Francisca', 'Antonio', 'Marcia',
    'Carlos', 'Sandra', 'Paulo', 'Luciana', 'Francisco', 'Juliana', 'Eduardo',
    'Fernanda', 'Manoel', 'Adriana', 'Raimundo', 'Patricia', 'Luis', 'Monica',
    'Ricardo', 'Cristiane', 'Fernando', 'Simone', 'Roberto', 'Camila', 'Marcelo',
    'Vanessa', 'Diego', 'Leticia', 'Bruno', 'Carolina', 'Rafael', 'Bruna'
  ],

  sobrenomes: [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves',
    'Pereira', 'Lima', 'Gomes', 'Ribeiro', 'Carvalho', 'Martins', 'Almeida',
    'Lopes', 'Soares', 'Fernandes', 'Vieira', 'Barbosa', 'Rocha', 'Dias',
    'Monteiro', 'Machado', 'Mendes', 'Freitas', 'Cardoso', 'Ramos', 'Araujo'
  ],

  dominios: [
    'gmail.com', 'hotmail.com', 'yahoo.com.br', 'outlook.com', 'uol.com.br',
    'bol.com.br', 'terra.com.br', 'ig.com.br', 'globo.com', 'r7.com'
  ],

  cidades: [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza',
    'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Goiânia',
    'Belém', 'Porto Alegre', 'Guarulhos', 'Campinas', 'São Luís'
  ],

  ruas: [
    'Rua das Flores', 'Av. Paulista', 'Rua Augusta', 'Rua Oscar Freire',
    'Av. Atlântica', 'Rua 25 de Março', 'Av. Brigadeiro Faria Lima',
    'Rua da Consolação', 'Av. Rebouças', 'Rua Barão de Itapetininga',
    'Av. Ipiranga', 'Rua XV de Novembro', 'Av. São João', 'Rua Direita'
  ],

  empresas: [
    'Tech Solutions Ltda', 'Inovação Digital', 'Soluções Web BR',
    'Desenvolve Fácil', 'CodeBrasil Tech', 'Sistemas Inteligentes',
    'WebMaster Brasil', 'TechnoSoft', 'Digital Works', 'BrasilCode'
  ],

  getNome() {
    const nome = this.nomes[Math.floor(Math.random() * this.nomes.length)];
    const sobrenome = this.sobrenomes[Math.floor(Math.random() * this.sobrenomes.length)];
    return `${nome} ${sobrenome}`;
  },

  getEmail() {
    const nome = this.nomes[Math.floor(Math.random() * this.nomes.length)].toLowerCase();
    const sobrenome = this.sobrenomes[Math.floor(Math.random() * this.sobrenomes.length)].toLowerCase();
    const dominio = this.dominios[Math.floor(Math.random() * this.dominios.length)];
    const numero = Math.floor(Math.random() * 999);
    
    const separadores = ['.', '_', ''];
    const separador = separadores[Math.floor(Math.random() * separadores.length)];
    
    return `${nome}${separador}${sobrenome}${numero}@${dominio}`;
  },

  getTelefone() {
    const ddd = [11, 21, 31, 41, 51, 61, 71, 81, 85, 62][Math.floor(Math.random() * 10)];
    const nono = Math.random() > 0.5 ? 9 : '';
    const numero = Math.floor(Math.random() * 90000000) + 10000000;
    return `(${ddd}) ${nono}${numero.toString().slice(0, 4)}-${numero.toString().slice(4)}`;
  },

  getTelefoneRaw() {
    const ddd = [11, 21, 31, 41, 51, 61, 71, 81, 85, 62][Math.floor(Math.random() * 10)];
    const nono = Math.random() > 0.5 ? 9 : '';
    const numero = Math.floor(Math.random() * 90000000) + 10000000;
    return `${ddd}${nono}${numero}`;
  },

  getCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let dv1 = resto === 10 || resto === 11 ? 0 : resto;
    cpf += dv1;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let dv2 = resto === 10 || resto === 11 ? 0 : resto;
    cpf += dv2;
    
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
  },

  getCPFRaw() {
    return this.getCPF().replace(/\D/g, '');
  },

  getEndereco() {
    const rua = this.ruas[Math.floor(Math.random() * this.ruas.length)];
    const numero = Math.floor(Math.random() * 9999) + 1;
    return `${rua}, ${numero}`;
  },

  getCidade() {
    return this.cidades[Math.floor(Math.random() * this.cidades.length)];
  },

  getCEP() {
    const parte1 = Math.floor(Math.random() * 90000) + 10000;
    const parte2 = Math.floor(Math.random() * 900) + 100;
    return `${parte1}-${parte2}`;
  },

  getCEPRaw() {
    return this.getCEP().replace('-', '');
  },

  getEmpresa() {
    return this.empresas[Math.floor(Math.random() * this.empresas.length)];
  },

  getTexto() {
    const textos = [
      'Desenvolvedor full-stack com experiência em React e Node.js.',
      'Especialista em soluções digitais inovadoras para empresas.',
      'Profissional dedicado com foco em resultados e qualidade.',
      'Entusiasta de tecnologia e metodologias ágeis.',
      'Experiência sólida em desenvolvimento web e mobile.',
      'Apaixonado por criar soluções que fazem a diferença.',
      'Focado em entregar valor através da tecnologia.',
      'Sempre em busca de novos desafios e aprendizados.'
    ];
    return textos[Math.floor(Math.random() * textos.length)];
  },

  getNumero(min = 1, max = 999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getURL() {
    const sites = [
      'https://www.google.com.br',
      'https://www.facebook.com',
      'https://www.linkedin.com',
      'https://www.github.com',
      'https://www.stackoverflow.com',
      'https://www.medium.com'
    ];
    return sites[Math.floor(Math.random() * sites.length)];
  }
};

// 🛠️ UTILITÁRIOS PARA CAMPOS COMPLEXOS
const FormUtils = {
  async simulateTyping(element, text, options = {}) {
    const delay = options.delay || 50;
    const clearFirst = options.clearFirst !== false;
    
    element.focus();
    
    if (clearFirst) {
      element.value = '';
      element.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    for (let i = 0; i < text.length; i++) {
      element.value += text[i];
      
      element.dispatchEvent(new KeyboardEvent('keydown', { 
        key: text[i], 
        bubbles: true 
      }));
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new KeyboardEvent('keyup', { 
        key: text[i], 
        bubbles: true 
      }));
      
      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    element.dispatchEvent(new Event('change', { bubbles: true }));
    element.dispatchEvent(new Event('blur', { bubbles: true }));
  },

  detectMask(element) {
    const classes = element.className.toLowerCase();
    const id = element.id.toLowerCase();
    const name = (element.name || '').toLowerCase();
    const placeholder = (element.placeholder || '').toLowerCase();
    
    const allText = `${classes} ${id} ${name} ${placeholder}`;
    
    if (allText.includes('phone') || allText.includes('tel') || allText.includes('fone')) {
      return 'phone';
    }
    if (allText.includes('cpf')) {
      return 'cpf';
    }
    if (allText.includes('cep') || allText.includes('zip')) {
      return 'cep';
    }
    if (allText.includes('date') || allText.includes('data')) {
      return 'date';
    }
    if (allText.includes('mask')) {
      return 'generic';
    }
    
    return null;
  },

  fillSelect2(element) {
    try {
      const $element = window.jQuery ? window.jQuery(element) : null;
      if (!$element || !$element.data('select2')) {
        return false;
      }

      const options = element.querySelectorAll('option');
      if (options.length <= 1) return false;

      const startIndex = options[0].value === '' ? 1 : 0;
      if (startIndex >= options.length) return false;

      const randomIndex = startIndex + Math.floor(Math.random() * (options.length - startIndex));
      const selectedOption = options[randomIndex];

      $element.val(selectedOption.value).trigger('change');
      
      return true;
    } catch (error) {
      return false;
    }
  },

  fillAdvancedSelect(element) {
    if (this.fillSelect2(element)) {
      return true;
    }

    const parent = element.closest('.select2, .chosen-container, .selectize-control');
    if (parent) {
      if (parent.classList.contains('chosen-container')) {
        const trigger = parent.querySelector('.chosen-single, .chosen-choices');
        if (trigger) {
          trigger.click();
          setTimeout(() => {
            const options = document.querySelectorAll('.chosen-results .active-result');
            if (options.length > 0) {
              const randomOption = options[Math.floor(Math.random() * options.length)];
              randomOption.click();
              return true;
            }
          }, 100);
        }
      }
    }

    return false;
  },

  triggerAllEvents(element, value) {
    const events = ['focus', 'input', 'change', 'blur', 'keydown', 'keyup'];

    events.forEach(eventType => {
      let event;
      if (eventType.includes('key')) {
        event = new KeyboardEvent(eventType, { 
          bubbles: true, 
          cancelable: true 
        });
      } else {
        event = new Event(eventType, { 
          bubbles: true, 
          cancelable: true 
        });
      }
      element.dispatchEvent(event);
    });

    element.dispatchEvent(new CustomEvent('formfucker:filled', { 
      detail: { value }, 
      bubbles: true 
    }));
  }
};

// 🚀 FUNÇÃO PRINCIPAL DE PREENCHIMENTO
async function fillFormFields(autoSubmit = false) {
  const inputs = document.querySelectorAll('input, textarea, select');
  let preenchidos = 0;

  for (const input of inputs) {
    const type = input.getAttribute('type') || input.tagName.toLowerCase();
    const tagName = input.tagName.toLowerCase();
    const name = input.getAttribute('name') || '';
    const id = input.getAttribute('id') || '';
    const placeholder = input.getAttribute('placeholder') || '';
    
    const contexto = (name + ' ' + id + ' ' + placeholder).toLowerCase();

    if (type === 'hidden' || type === 'file') continue;

    let preencheu = false;
    let valor = '';

    try {
      const maskType = FormUtils.detectMask(input);

      if (type === 'text' || type === 'name') {
        if (contexto.includes('nome') || contexto.includes('name')) {
          valor = FakerBR.getNome();
        } else if (contexto.includes('endereco') || contexto.includes('address') || contexto.includes('rua')) {
          valor = FakerBR.getEndereco();
        } else if (contexto.includes('cidade') || contexto.includes('city')) {
          valor = FakerBR.getCidade();
        } else if (contexto.includes('empresa') || contexto.includes('company')) {
          valor = FakerBR.getEmpresa();
        } else if (contexto.includes('cep') || contexto.includes('zip') || maskType === 'cep') {
          valor = maskType === 'cep' ? FakerBR.getCEPRaw() : FakerBR.getCEP();
        } else if (contexto.includes('cpf') || maskType === 'cpf') {
          valor = maskType === 'cpf' ? FakerBR.getCPFRaw() : FakerBR.getCPF();
        } else if (contexto.includes('phone') || contexto.includes('tel') || contexto.includes('fone') || maskType === 'phone') {
          valor = maskType === 'phone' ? FakerBR.getTelefoneRaw() : FakerBR.getTelefone();
        } else {
          valor = FakerBR.getNome();
        }

        if (maskType) {
          await FormUtils.simulateTyping(input, valor, { delay: 30 });
        } else {
          input.value = valor;
          FormUtils.triggerAllEvents(input, valor);
        }
        preencheu = true;
      }
      else if (type === 'email') {
        valor = FakerBR.getEmail();
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'tel' || type === 'phone') {
        const maskType = FormUtils.detectMask(input);
        valor = maskType ? FakerBR.getTelefoneRaw() : FakerBR.getTelefone();
        
        if (maskType) {
          await FormUtils.simulateTyping(input, valor, { delay: 30 });
        } else {
          input.value = valor;
          FormUtils.triggerAllEvents(input, valor);
        }
        preencheu = true;
      }
      else if (type === 'url') {
        valor = FakerBR.getURL();
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'password') {
        const senhas = ['MinhaSenh@123', 'Segur@456', 'Forte#789', 'Priv@te01', 'Secret$99'];
        valor = senhas[Math.floor(Math.random() * senhas.length)];
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'number') {
        const min = parseInt(input.min) || 1;
        const max = parseInt(input.max) || 999;
        valor = FakerBR.getNumero(min, max);
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'range') {
        const min = parseFloat(input.min) || 0;
        const max = parseFloat(input.max) || 100;
        valor = (min + max) / 2;
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'date') {
        const today = new Date();
        const randomDays = Math.floor(Math.random() * 365) - 182;
        const randomDate = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000);
        valor = randomDate.toISOString().split('T')[0];
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'datetime-local') {
        const today = new Date();
        today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
        valor = today.toISOString().slice(0, 16);
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'time') {
        const hora = Math.floor(Math.random() * 24).toString().padStart(2, '0');
        const minuto = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        valor = `${hora}:${minuto}`;
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'month') {
        const ano = 2024;
        const mes = FakerBR.getNumero(1, 12);
        valor = `${ano}-${mes.toString().padStart(2, '0')}`;
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'week') {
        const semana = FakerBR.getNumero(1, 52);
        valor = `2024-W${semana.toString().padStart(2, '0')}`;
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'color') {
        const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33F1', '#F1FF33', '#33F1FF', '#FF6B35', '#4ECDC4'];
        valor = cores[Math.floor(Math.random() * cores.length)];
        input.value = valor;
        FormUtils.triggerAllEvents(input, valor);
        preencheu = true;
      }
      else if (type === 'checkbox') {
        input.checked = Math.random() > 0.5;
        FormUtils.triggerAllEvents(input, input.checked);
        preencheu = true;
      }
      else if (type === 'radio') {
        const radioGroup = document.querySelectorAll(`input[type="radio"][name="${input.name}"]`);
        if (radioGroup.length > 0 && !document.querySelector(`input[type="radio"][name="${input.name}"]:checked`)) {
          const randomIndex = Math.floor(Math.random() * radioGroup.length);
          radioGroup[randomIndex].checked = true;
          FormUtils.triggerAllEvents(radioGroup[randomIndex], true);
          preencheu = true;
        }
      }
      else if (tagName === 'textarea') {
        if (contexto.includes('bio') || contexto.includes('sobre') || contexto.includes('about')) {
          valor = FakerBR.getTexto();
        } else {
          const textos = [
            'Este é um comentário gerado automaticamente pelo Form Fucker.',
            'Mensagem de teste criada com dados aleatórios.',
            'Conteúdo faker brasileiro para preenchimento automático.',
            'Texto exemplo gerado dinamicamente para formulários.',
            'Observações automáticas criadas pelo sistema faker.'
          ];
          valor = textos[Math.floor(Math.random() * textos.length)];
        }
        
        await FormUtils.simulateTyping(input, valor, { delay: 20 });
        preencheu = true;
      }
      else if (tagName === 'select') {
        if (!FormUtils.fillAdvancedSelect(input)) {
          const options = input.querySelectorAll('option');
          if (options.length > 1) {
            const startIndex = options[0].value === '' ? 1 : 0;
            if (startIndex < options.length) {
              const randomIndex = startIndex + Math.floor(Math.random() * (options.length - startIndex));
              input.selectedIndex = randomIndex;
              FormUtils.triggerAllEvents(input, input.value);
              preencheu = true;
            }
          }
        } else {
          preencheu = true;
        }
      }

      if (preencheu) {
        preenchidos++;
      }

    } catch (error) {
      // Erro silencioso em produção
    }

    await new Promise(resolve => setTimeout(resolve, 10));
  }

  if (autoSubmit) {
    const form = document.querySelector('form');
    if (form) {
      setTimeout(() => {
        form.submit();
      }, 1500);
    }
  }

  return preenchidos;
}

// 📨 Message listener para o popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fillForm') {
    fillFormFields(message.autoSubmit).then(preenchidos => {
      sendResponse({ success: true, filled: preenchidos });
    }).catch(error => {
      sendResponse({ success: false, error: error.message });
    });
    
    return true;
  }
});

// 🎯 EASTER EGGS PARA DESENVOLVEDORES
(() => {
  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        // Easter egg ativado
        document.body.style.transform = 'rotate(1deg)';
        setTimeout(() => {
          document.body.style.transform = 'rotate(-1deg)';
          setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)';
            setTimeout(() => {
              if (window.location.hostname.includes('local')) {
                const style = document.createElement('style');
                style.innerHTML = `
                  * { 
                    animation: rainbow 2s linear infinite !important; 
                  }
                  @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                  }
                `;
                document.head.appendChild(style);
                setTimeout(() => style.remove(), 5000);
              }
            }, 100);
          }, 100);
        }, 100);
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  // Dev Tools Easter Egg
  window.formFuckerDev = {
    version: '2.0.0',
    author: 'Paulo César',
    fakeCPF: () => FakerBR.getCPF(),
    fakeEmail: () => FakerBR.getEmail(),
    fakeName: () => FakerBR.getNome(),
    stats: () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      return `${inputs.length} campos encontrados no formulário`;
    },
    secret: '🇧🇷 Feito com amor no Brasil'
  };

  // Console Easter Egg
  if (typeof console !== 'undefined' && console.log) {
    const styles = [
      'color: #ff6b6b',
      'background: linear-gradient(90deg, #667eea, #764ba2)',
      'font-size: 16px',
      'font-weight: bold',
      'padding: 8px 12px',
      'border-radius: 4px'
    ].join(';');
    
    setTimeout(() => {
      if (Math.random() < 0.1) { // 10% chance
        console.log('%c🚀 Form Fucker v2.0 rodando!', styles);
        console.log('💡 Digite "formFuckerDev" no console para descobrir funções secretas...');
      }
    }, 2000);
  }
})();
  