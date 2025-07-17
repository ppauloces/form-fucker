# 🇧🇷 Form Fucker - Faker Brasileiro

**Extensão Chrome/Edge que preenche formulários automaticamente com dados brasileiros realistas.**

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Chrome](https://img.shields.io/badge/Chrome-Compatible-green)
![Edge](https://img.shields.io/badge/Edge-Compatible-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Recursos

### 📝 **Preenchimento Inteligente**
- **Nomes brasileiros:** João Silva, Maria Santos, Carlos Oliveira...
- **Emails realistas:** joao.silva123@gmail.com, maria_santos@uol.com.br...
- **Telefones válidos:** (11) 99876-5432, (21) 8765-4321...
- **CPFs matematicamente corretos** com dígitos verificadores válidos
- **Endereços brasileiros:** Av. Paulista, 1234 / Rua Augusta, 567...
- **CEPs realistas:** 01310-100, 20040-020...

### 🧠 **Inteligência Contextual**
A extensão analisa os campos pelos atributos `name`, `id` e `placeholder`:

```html
<input name="nome" />        → "Carlos Silva"
<input name="endereco" />    → "Av. Paulista, 1234" 
<input name="empresa" />     → "Tech Solutions Ltda"
<input name="cpf" />         → "123.456.789-01" (válido!)
<input type="email" />       → "carlos.silva789@gmail.com"
```

### 🎯 **Tipos de Campo Suportados**
- ✅ **Texto:** name, email, tel, url, password
- ✅ **Numéricos:** number, range
- ✅ **Data/Tempo:** date, datetime-local, time, month, week
- ✅ **Seleção:** checkbox, radio, select/dropdown
- ✅ **Outros:** textarea, color

## 📦 Instalação

### **Opção 1: Instalação Manual (Recomendada)**

1. **Baixe** os arquivos da extensão
2. **Abra** o Chrome/Edge e vá em `chrome://extensions/`
3. **Ative** o "Modo desenvolvedor" (canto superior direito)
4. **Clique** em "Carregar sem compactação"
5. **Selecione** a pasta da extensão
6. **Pronto!** 🎉

### **Opção 2: Chrome Web Store**
*Em breve...*

## 🎨 Interface

A extensão possui um **design moderno e profissional**:

- 🎯 **Botão principal** com feedback visual
- ✅ **Checkbox** para envio automático  
- ⚡ **Animações** suaves e responsivas
- ☕ **Botão de doação** integrado

## 🔧 Como Usar

1. **Abra** qualquer página com formulário
2. **Clique** no ícone da extensão
3. **Marque** "Enviar automaticamente" se desejar
4. **Clique** em "🚀 Preencher Formulário"
5. **Veja a mágica** acontecer! ✨

## 🛡️ Segurança

- **Não coleta dados** pessoais
- **Não acessa** campos `hidden` ou `file`
- **Funciona offline** - não envia informações
- **Código aberto** - transparência total

## 🧪 Exemplos de Dados Gerados

```javascript
// Nomes completos
"João Silva", "Maria Santos", "Carlos Oliveira"

// Emails variados  
"joao.silva123@gmail.com", "maria_santos@uol.com.br"

// Telefones com DDD real
"(11) 99876-5432", "(21) 8765-4321", "(31) 91234-5678"

// CPFs matematicamente válidos
"123.456.789-01", "987.654.321-00"

// Endereços realistas
"Av. Paulista, 1234", "Rua Augusta, 567"
```

## 🎁 Apoie o Projeto

Gostou da extensão? 

[![Doe um café](https://img.shields.io/badge/☕-Doe%20um%20café-orange)](http://link.mercadopago.com.br/ppaulodev)

## 📊 Estatísticas

- **+1.000** combinações de nomes
- **Milhões** de variações de email
- **10** DDDs de cidades brasileiras
- **100%** CPFs com dígitos verificadores válidos

## 🤝 Contribuindo

1. **Fork** este repositório
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Abra** um Pull Request

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🔗 Links

- **Doações:** [Mercado Pago](http://link.mercadopago.com.br/ppaulodev)
- **Issues:** [GitHub Issues](https://github.com/paulodev/form-fucker/issues)
- **Releases:** [GitHub Releases](https://github.com/paulodev/form-fucker/releases)

---

**Feito com ❤️ no Brasil 🇧🇷** 