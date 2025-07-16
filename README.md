# BRY Photos - Frontend

Site de fotografia profissional desenvolvido em React + TypeScript + Vite.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para aplicações React
- **Axios** - Cliente HTTP para comunicação com API

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── Layout.tsx       # Layout principal
│   └── PrivateRoute.tsx # Rota protegida por autenticação
├── contexts/            # Contextos React
│   └── AuthContext.tsx  # Contexto de autenticação
├── hooks/               # Hooks customizados
│   └── useAuth.ts       # Hook para autenticação
├── pages/               # Páginas da aplicação
│   ├── Home.tsx         # Página inicial
│   ├── Gallery.tsx      # Galeria de fotos
│   ├── Login.tsx        # Login/Cadastro
│   └── PhotoUpload.tsx  # Upload de fotos (protegida)
├── services/            # Serviços e comunicação com API
│   ├── api.ts           # Configuração do Axios
│   ├── authService.ts   # Serviços de autenticação
│   ├── photosService.ts # Serviços de fotos
│   └── ...
└── types/               # Definições de tipos TypeScript
```

## 🎯 Funcionalidades

- ✅ **Homepage moderna** com animações e design responsivo
- ✅ **Sistema de autenticação** completo (login/cadastro)
- ✅ **Rotas protegidas** para área do cliente
- ✅ **Galeria de fotos** (em desenvolvimento)
- ✅ **Design responsivo** com Tailwind CSS
- ✅ **Integração WhatsApp** para contato
- ✅ **TypeScript** para melhor experiência de desenvolvimento

## 🚀 Como executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Build para produção:**

   ```bash
   npm run build
   ```

4. **Preview da build:**
   ```bash
   npm run preview
   ```

## 🎨 Design

O projeto utiliza um design moderno com:

- Gradientes coloridos e animações suaves
- Layout responsivo para mobile e desktop
- Tema profissional em tons de azul/roxo
- Componentes reutilizáveis e bem estruturados

## 📱 Contato

- **WhatsApp:** +55 62 98765-4321
- **Local:** Goiânia/GO

---

Desenvolvido com ❤️ para capturar momentos especiais.
