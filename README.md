# Anotado

Uma extensão simples para o Google Chrome que permite aos usuários fazer anotações enquanto navegam na web.

## Funcionalidades

- **Adicionar Nova Anotação**: Permite ao usuário criar uma nova anotação.
- **Editar Anotação**: Permite ao usuário editar uma anotação existente.
- **Salvar Anotação**: Salva as anotações no armazenamento do navegador.
- **Excluir Anotação**: Permite ao usuário excluir uma anotação.

## Instalação

1. Clone este repositório ou faça o download dos arquivos.
   ```bash
   git clone https://github.com/BrenoMdC/anotacoes-ext.git
   ```
2. Abra o Google Chrome e vá para chrome://extensions/.

3. Ative o “Modo do desenvolvedor” no canto superior direito.

4. Clique em “Carregar sem compactação” e selecione a pasta do projeto.

## Uso

1. Clique no ícone da extensão na barra de ferramentas do Chrome.

2. Use a interface para adicionar, editar, salvar e excluir suas anotações.

## Estrutura do Projeto
```bash
notas-extensao/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── scripts/
│   ├── background.js
│   ├── content.js
│   └── popup.js
├── styles/
│   └── popup.css
├── _locales/
│   └── en/
│       └── messages.json
│   └── pt_BR/
│       └── messages.json
├── manifest.json
└── popup.html
```

## Contribuição

1. Faça um fork do projeto.

2. Crie uma nova branch (git checkout -b feature/nova-funcionalidade).

3. Faça suas alterações e commit (git commit -am 'Adiciona nova funcionalidade').

4. Faça o push para a branch (git push origin feature/nova-funcionalidade).

5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. 

Se precisar de mais alguma coisa, é só avisar! 😊



