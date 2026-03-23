# Plano de Melhorias de Interface e UX (Central da Visão)

Baseado nas diretrizes das skills `frontend-design` e `ui-ux-pro-max`, este documento detalha o plano de refatoração para elevar o padrão estético e de usabilidade do site da clínica.

## 1. Diretrizes Gerais (Medical & Healthcare)

- **Acessibilidade Visão/Leitura (CRÍTICO):** Por ser uma clínica oftalmológica, o contraste de cores deve ser alto. Evitaremos textos cinza claro (`text-gray-400`); usaremos tons de ardósia escuros (`slate-800` a `slate-900`) em fundos claros.
- **Micro-interações:** Adicionar feedback tátil (`cursor-pointer`, mudanças suaves de `shadow` ou `opacity`) interações (duração de 150-300ms) sem causar `layout shift`.
- **Tipografia e Espaçamento:** Maior respiro visual (`whitespace`); uso da proporção áurea ou escalas consistentes (`py-24`, `gap-8`). Fontes elegantes para cabeçalhos (transmitindo confiança e autoridade) e limpas para o corpo.
- **Cores:** Paleta limpa em tons de azul e "teal" (verde-água), transmitindo calma, saúde e tecnologia.

## 2. Mudanças Propostas por Componente

### `hero-section.tsx`
- **Melhoria:** Melhorar a responsividade e o espaçamento (`padding-top` para evitar sobreposição com o Header).
- **Design:** Adicionar um fundo envidraçado (*glassmorphism*) sutil no cartão de CTA ou um degradê suave radial para destacar o título principal e a chamada para "Agendar Consulta".

### `services-section.tsx` e `differentiators-section.tsx`
- **Melhoria:** Migrar de listas genéricas para uma estrutura de *Bento Grid* ou *Cards* premium.
- **Design:** Substituição de emojis por ícones profissionais em SVG (Lucide React). Adição de animações *fade-in* (*Framer Motion* ou css-transitions). Hover states com elevação suave (`hover:-translate-y-1 hover:shadow-xl`).

### `header.tsx` e `footer.tsx`
- **Melhoria do Header:** Implementar um *glass effect* em *scroll* (nav bar fixa e levemente translúcida `bg-white/80 backdrop-blur-md`). Garantir botões com tamanho mínimo de iteração touch para mobile (`min-h-[44px]`).
- **Melhoria do Footer:** Reorganizar a arquitetura da informação em colunas bem definidas, alinhando links rápidos, endereço e selos de qualificação médica (CRM/RQE).

### `contact-section.tsx` e `location-section.tsx`
- **Design de Formulários/Inputs:** Adicionar anéis de foco visíveis (`focus:ring-2 focus:ring-primary/50`) e *labels* descritivos (essencial para leitores de tela e acessibilidade).
- **Botões do WhatsApp:** Dar destaque com cor de marca correta (verde WhatsApp) contrastante com a paleta azul da clínica.

## 3. Plano de Verificação

1. **Acessibilidade (Automático/Manual):** Executar auditoria de contraste de cores nos botões e textos usando extensão do Lighthouse e verificação de tamanhos para toques na tela (*Touch Targets*).
2. **Navegação (Manual):** Testar todos os *hover states* pelo mouse e testar navegação pelo teclado (`TAB`) garantindo a presença do `focus ring` visível.
3. **Responsividade (Manual/DevTools):** Redimensionar e inspecionar a interface em larguras de `375px`, `768px` e `1024px` para conferir quebra de linhas e margens.

---
**Nota Técnica:** Um *savepoint* Git já foi criado com o commit `"Savepoint: Before UI/UX frontend improvements (Doctor profile updated)"`. Podemos retornar imediatamente ao ponto antes destas propostas caso necessário.
