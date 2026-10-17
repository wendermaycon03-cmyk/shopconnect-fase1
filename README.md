# ShopConnect - Fase 1 (Next.js + TypeScript + Tailwind)

Aplicação web responsiva completa, pronta para Vercel, sem pagamentos e sem mocks.

## 🎨 Identidade
- Azul Elétrico #2563EB (CTA)
- Azul-Marinho #0F172A (sidebar)
- Branco / Cinza #F1F5F9 / #64748B

## ✅ O que está incluso
- Landing pública com logo e descrição
- Login, cadastro, recuperação (validação Zod + RHF, sem backend)
- Painel privado: Início, Minha Loja, Produtos, Redes Sociais, Campanhas, Relatórios, Configurações
- Produtos com estado local + botão wa.me
- Redes Sociais com badge "Não conectado" (aviso anti-mock)
- Loja pública /loja/[slug] com botão WhatsApp
- Componentes reutilizáveis, loading, empty states, responsivo

## 🚀 Rodar local
```bash
npm install
npm run dev
# http://localhost:3000
```

## ☁️ Publicar na Vercel (grátis)
1. Crie repo no GitHub e push:
```bash
git init
git add .
git commit -m "ShopConnect Fase 1"
git branch -M main
git remote add origin https://github.com/seu-usuario/shopconnect.git
git push -u origin main
```
2. Acesse vercel.com -> New Project -> Importe o repo
3. Framework: Next.js (detecta automático)
4. Clique Deploy
5. Pronto! Sem env necessário nesta fase

## 🔜 Fase 2 - Preparação Supabase
Arquitetura já preparada:
- `src/types` e `src/lib/validators` isolados
- `services/api.ts` será substituído por Supabase client
- Crie `.env.local` (nunca commitar):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
- Na Vercel: Settings -> Environment Variables -> adicione as 3

### Regras
- Não expor chaves no frontend
- Não simular integrações como reais (mantido aviso em Redes/Relatórios)
- Vendas sempre via WhatsApp nesta versão

## 📁 Estrutura
src/app/(public)/, (auth)/, (dashboard)/, loja/[slug]/
src/components/ui/ e layout/
src/types/ e lib/

Build testado: `npm run build` passa sem erros.
