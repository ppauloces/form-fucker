// 🇧🇷 FAKER BRASILEIRO BRABÃO - Gera dados aleatórios realistas
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

  // DOMÍNIOS DE EMAIL BRASILEIROS
  dominios: [
    'gmail.com', 'hotmail.com', 'yahoo.com.br', 'outlook.com', 'uol.com.br',
    'bol.com.br', 'terra.com.br', 'ig.com.br', 'globo.com', 'r7.com'
  ],

  // CIDADES BRASILEIRAS
  cidades: [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza',
    'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Goiânia',
    'Belém', 'Porto Alegre', 'Guarulhos', 'Campinas', 'São Luís'
  ],

  // RUAS BRASILEIRAS
  ruas: [
    'Rua das Flores', 'Av. Paulista', 'Rua Augusta', 'Rua Oscar Freire',
    'Av. Atlântica', 'Rua 25 de Março', 'Av. Brigadeiro Faria Lima',
    'Rua da Consolação', 'Av. Rebouças', 'Rua Barão de Itapetininga',
    'Av. Ipiranga', 'Rua XV de Novembro', 'Av. São João', 'Rua Direita'
  ],

  // EMPRESAS BRASILEIRAS FICTÍCIAS
  empresas: [
    'Tech Solutions Ltda', 'Inovação Digital', 'Soluções Web BR',
    'Desenvolve Fácil', 'CodeBrasil Tech', 'Sistemas Inteligentes',
    'WebMaster Brasil', 'TechnoSoft', 'Digital Works', 'BrasilCode'
  ],

  // GERA NOME COMPLETO ALEATÓRIO
  getNome() {
    const nome = this.nomes[Math.floor(Math.random() * this.nomes.length)];
    const sobrenome = this.sobrenomes[Math.floor(Math.random() * this.sobrenomes.length)];
    return `${nome} ${sobrenome}`;
  },

  // GERA EMAIL ALEATÓRIO
  getEmail() {
    const nome = this.nomes[Math.floor(Math.random() * this.nomes.length)].toLowerCase();
    const sobrenome = this.sobrenomes[Math.floor(Math.random() * this.sobrenomes.length)].toLowerCase();
    const dominio = this.dominios[Math.floor(Math.random() * this.dominios.length)];
    const numero = Math.floor(Math.random() * 999);
    
    const separadores = ['.', '_', ''];
    const separador = separadores[Math.floor(Math.random() * separadores.length)];
    
    return `${nome}${separador}${sobrenome}${numero}@${dominio}`;
  },

  // GERA TELEFONE BRASILEIRO
  getTelefone() {
    const ddd = [11, 21, 31, 41, 51, 61, 71, 81, 85, 62][Math.floor(Math.random() * 10)];
    const nono = Math.random() > 0.5 ? 9 : ''; // Celular com 9
    const numero = Math.floor(Math.random() * 90000000) + 10000000;
    return `(${ddd}) ${nono}${numero.toString().slice(0, 4)}-${numero.toString().slice(4)}`;
  },

  // GERA CPF VÁLIDO
  getCPF() {
    // Gera os 9 primeiros dígitos
    let cpf = '';
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
    
    // Calcula primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let dv1 = resto === 10 || resto === 11 ? 0 : resto;
    cpf += dv1;
    
    // Calcula segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let dv2 = resto === 10 || resto === 11 ? 0 : resto;
    cpf += dv2;
    
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
  },

  // GERA ENDEREÇO BRASILEIRO
  getEndereco() {
    const rua = this.ruas[Math.floor(Math.random() * this.ruas.length)];
    const numero = Math.floor(Math.random() * 9999) + 1;
    return `${rua}, ${numero}`;
  },

  // GERA CIDADE
  getCidade() {
    return this.cidades[Math.floor(Math.random() * this.cidades.length)];
  },

  // GERA CEP
  getCEP() {
    const parte1 = Math.floor(Math.random() * 90000) + 10000;
    const parte2 = Math.floor(Math.random() * 900) + 100;
    return `${parte1}-${parte2}`;
  },

  // GERA EMPRESA
  getEmpresa() {
    return this.empresas[Math.floor(Math.random() * this.empresas.length)];
  },

  // GERA TEXTO ALEATÓRIO
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

  // GERA NÚMERO ENTRE MIN E MAX
  getNumero(min = 1, max = 999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // GERA URL ALEATÓRIA
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

// Escuta mensagens do popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fillForm') {
    const autoSubmit = message.autoSubmit;

    console.log('🚀 Form Fucker Faker ativado! Auto-submit:', autoSubmit);

    const inputs = document.querySelectorAll('input, textarea, select');
    let preenchidos = 0;

    inputs.forEach(input => {
      const type = input.getAttribute('type') || input.tagName.toLowerCase();
      const tagName = input.tagName.toLowerCase();
      const name = input.getAttribute('name') || '';
      const id = input.getAttribute('id') || '';
      const placeholder = input.getAttribute('placeholder') || '';
      
      // Identifica o contexto do campo pelos atributos
      const contexto = (name + ' ' + id + ' ' + placeholder).toLowerCase();

      // Pula campos hidden e file por segurança
      if (type === 'hidden' || type === 'file') return;

      let preencheu = false;

      try {
        // INPUTS DE TEXTO - CONTEXTUALIZADOS
        if (type === 'text' || type === 'name') {
          if (contexto.includes('nome') || contexto.includes('name')) {
            input.value = FakerBR.getNome();
          } else if (contexto.includes('endereco') || contexto.includes('address') || contexto.includes('rua')) {
            input.value = FakerBR.getEndereco();
          } else if (contexto.includes('cidade') || contexto.includes('city')) {
            input.value = FakerBR.getCidade();
          } else if (contexto.includes('empresa') || contexto.includes('company')) {
            input.value = FakerBR.getEmpresa();
          } else if (contexto.includes('cep') || contexto.includes('zip')) {
            input.value = FakerBR.getCEP();
          } else if (contexto.includes('cpf')) {
            input.value = FakerBR.getCPF();
          } else {
            input.value = FakerBR.getNome(); // Padrão
          }
          preencheu = true;
        }
        else if (type === 'email') {
          input.value = FakerBR.getEmail();
          preencheu = true;
        }
        else if (type === 'tel' || type === 'phone') {
          input.value = FakerBR.getTelefone();
          preencheu = true;
        }
        else if (type === 'url') {
          input.value = FakerBR.getURL();
          preencheu = true;
        }
        else if (type === 'password') {
          const senhas = ['MinhaSenh@123', 'Segur@456', 'Forte#789', 'Priv@te01', 'Secret$99'];
          input.value = senhas[Math.floor(Math.random() * senhas.length)];
          preencheu = true;
        }
        
        // INPUTS NUMÉRICOS
        else if (type === 'number') {
          const min = parseInt(input.min) || 1;
          const max = parseInt(input.max) || 999;
          input.value = FakerBR.getNumero(min, max);
          preencheu = true;
        }
        else if (type === 'range') {
          const min = parseFloat(input.min) || 0;
          const max = parseFloat(input.max) || 100;
          input.value = (min + max) / 2;
          preencheu = true;
        }

        // INPUTS DE DATA/TEMPO
        else if (type === 'date') {
          const today = new Date();
          const randomDays = Math.floor(Math.random() * 365) - 182;
          const randomDate = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000);
          input.value = randomDate.toISOString().split('T')[0];
          preencheu = true;
        }
        else if (type === 'datetime-local') {
          const today = new Date();
          today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
          input.value = today.toISOString().slice(0, 16);
          preencheu = true;
        }
        else if (type === 'time') {
          const hora = Math.floor(Math.random() * 24).toString().padStart(2, '0');
          const minuto = Math.floor(Math.random() * 60).toString().padStart(2, '0');
          input.value = `${hora}:${minuto}`;
          preencheu = true;
        }
        else if (type === 'month') {
          const ano = 2024;
          const mes = FakerBR.getNumero(1, 12);
          input.value = `${ano}-${mes.toString().padStart(2, '0')}`;
          preencheu = true;
        }
        else if (type === 'week') {
          const semana = FakerBR.getNumero(1, 52);
          input.value = `2024-W${semana.toString().padStart(2, '0')}`;
          preencheu = true;
        }

        // OUTROS INPUTS
        else if (type === 'color') {
          const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33F1', '#F1FF33', '#33F1FF', '#FF6B35', '#4ECDC4'];
          input.value = cores[Math.floor(Math.random() * cores.length)];
          preencheu = true;
        }

        // CHECKBOX (50% chance de marcar)
        else if (type === 'checkbox') {
          input.checked = Math.random() > 0.5;
          preencheu = true;
        }

        // RADIO BUTTONS (marca um aleatório do mesmo grupo)
        else if (type === 'radio') {
          const radioGroup = document.querySelectorAll(`input[type="radio"][name="${input.name}"]`);
          if (radioGroup.length > 0 && !document.querySelector(`input[type="radio"][name="${input.name}"]:checked`)) {
            const randomIndex = Math.floor(Math.random() * radioGroup.length);
            radioGroup[randomIndex].checked = true;
            preencheu = true;
          }
        }

        // TEXTAREA - CONTEXTUALIZADOS
        else if (tagName === 'textarea') {
          if (contexto.includes('bio') || contexto.includes('sobre') || contexto.includes('about')) {
            input.value = FakerBR.getTexto();
          } else {
            const textos = [
              'Este é um comentário gerado automaticamente pelo Form Fucker.',
              'Mensagem de teste criada com dados aleatórios.',
              'Conteúdo faker brasileiro para preenchimento automático.',
              'Texto exemplo gerado dinamicamente para formulários.',
              'Observações automáticas criadas pelo sistema faker.'
            ];
            input.value = textos[Math.floor(Math.random() * textos.length)];
          }
          preencheu = true;
        }

        // SELECT/DROPDOWN
        else if (tagName === 'select') {
          const options = input.querySelectorAll('option');
          if (options.length > 1) {
            const startIndex = options[0].value === '' ? 1 : 0;
            if (startIndex < options.length) {
              const randomIndex = startIndex + Math.floor(Math.random() * (options.length - startIndex));
              input.selectedIndex = randomIndex;
              preencheu = true;
            }
          }
        }

        // Dispara eventos para campos que foram preenchidos
        if (preencheu) {
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
          input.dispatchEvent(new Event('blur', { bubbles: true }));
          preenchidos++;
          
          console.log(`✅ ${type}: ${input.value || input.checked || 'selecionado'}`);
        }

      } catch (error) {
        console.log(`❌ Erro ao preencher campo ${type}:`, error);
      }
    });

    console.log(`🎯 Form Fucker Faker preencheu ${preenchidos} de ${inputs.length} campos com dados aleatórios!`);

    // Se auto-submit tiver marcado, submete depois de um delay
    if (autoSubmit) {
      const form = document.querySelector('form');
      if (form) {
        setTimeout(() => {
          console.log('🚀 Enviando formulário automaticamente...');
          form.submit();
        }, 1500);
      } else {
        console.log('❌ Nenhum formulário encontrado para enviar');
      }
    }

    sendResponse({ success: true, filled: preenchidos });
  }
});
  