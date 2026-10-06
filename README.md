# MeuAssistente — versão 1.0

Pacote pronto para Cloudflare Pages.

## Estrutura
- `/index.html` — página de vendas
- `/cadastro.html` — cadastro profissional
- `/login.html` — login
- `/esqueci-senha.html` — recuperação de senha local para testes
- `/redefinir-senha.html` — nova senha local para testes
- `/app/` — aplicativo
- `/sw.js` — service worker para experiência PWA
- `/assets/` — ícone, favicon e identidade

## Publicação no Cloudflare Pages
1. Crie um novo projeto Pages.
2. Faça upload deste diretório como projeto estático ou conecte o repositório GitHub.
3. Não use comando de build.
4. Diretório de saída: `/` se a interface pedir.

## Importante sobre autenticação
Esta versão usa LocalStorage para testes. Cadastro, login e recuperação funcionam apenas no navegador/aparelho onde foram feitos. Antes de cobrar usuários reais, conecte Supabase para autenticação, banco, recuperação real por e-mail e sincronização.

## Próxima etapa comercial
- Supabase Auth + PostgreSQL
- Stripe/Mercado Pago para assinatura
- domínio próprio
- e-mail transacional
- sincronização multi-dispositivo
- IA real no assistente
- Open Finance posteriormente

Planos sugeridos: R$ 14,90/mês e R$ 149,90/ano.
