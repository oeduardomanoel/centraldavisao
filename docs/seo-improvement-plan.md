# Plano de Melhoria Contínua de SEO - Central da Visão

Este documento consolida a estratégia completa para otimização de motores de busca (Google), baseada nas melhores práticas e estruturada através de múltiplas disciplinas de SEO.

## 1. Fundamentos de SEO (seo-fundamentals)
A base de toda estratégia é garantir rastreabilidade, indexação e relevância.
- **E-E-A-T (Experiência, Especialidade, Autoridade, Confiabilidade):** Garantir que o conteúdo médico/oftalmológico seja revisado por especialistas.
- **Auditoria de Palavras-Chave:** Levantamento contínuo das intenções de busca dos pacientes (ex: "cirurgia de catarata preço", "clínica oftalmológica perto de mim").
- **Arquitetura da Informação:** Estrutura de links internos clara, com menus intuitivos (Silos de conteúdo para cada especialidade médica).

## 2. Auditoria e Diagnóstico (seo-audit)
- **Checklist Técnico:** Crawlear o site mensalmente usando ferramentas como Screaming Frog.
- **Identificação de Erros:** Corrigir erros 404, cadeias de redirecionamento (301) e links quebrados.
- **Análise de Concorrência:** Analisar o gap de conteúdo em relação aos maiores players de saúde oftalmológica.
- **Monitoramento de Punições/Penalidades:** Analisar o Google Search Console regularmente.

## 3. SEO Técnico (seo-technical & seo-sitemap)
- **Core Web Vitals:** Otimização implacável de LCP (Largest Contentful Paint), FID (First Input Delay) e CLS (Cumulative Layout Shift).
- **Mobile-First Indexing:** Garantir que o site seja 100% responsivo e rápido em conexões 3G/4G.
- **XML Sitemaps:** Limpar e segmentar os sitemaps (ex: `sitemap-blog.xml`, `sitemap-clinicas.xml`) e mantê-los atualizados no Search Console.
- **Robots.txt:** Otimizar o crawl budget, bloqueando páginas irrelevantes de busca interna e filtros.

## 4. Otimização On-Page (seo-page & seo-content)
- **Title Tags e Meta Descriptions:** Criação de títulos atraentes (CTR alto) contendo as palavras-chave principais, limitados a 60 e 155 caracteres respectivamente.
- **Heading Tags (H1, H2, H3):** Estruturação semântica em todos os artigos e landing pages de tratamentos.
- **Qualidade do Conteúdo:** Melhoria contínua de artigos do blog. Atualizar conteúdos antigos e eliminar "Thin Content" (conteúdo pobre).
- **Links Internos:** Conectar artigos de topo de funil (ex: "Sintomas de Catarata") a páginas de fundo de funil (ex: "Agende sua Consulta para Catarata").

## 5. SEO Local e Geolocalização (seo-geo & seo-hreflang)
- **Google Business Profile:** Otimizar as fichas das clínicas parceiras (horários, fotos reais, gestão de avaliações).
- **Páginas de Localidade:** Criar Landing Pages otimizadas por região de atuação (ex: "Clínica Oftalmológica em [Cidade]").
- **Hreflang (se aplicável):** Implementar as tags hreflang corretamente caso exista expansão para outros idiomas/países no futuro.

## 6. Web Semântica e Dados Estruturados (seo-schema)
- **Implementação de JSON-LD:**
  - `MedicalOrganization` ou `LocalBusiness` para as clínicas.
  - `MedicalCondition` e `MedicalProcedure` nas páginas de tratamentos.
  - `FAQPage` estruturado para tirar dúvidas comuns em todas as páginas de conversão.
  - `BreadcrumbList` para facilitar a navegação e a exibição rica nos resultados.
  - `Article` para posts no blog, garantindo identificação clara do autor médico.

## 7. Otimização de Imagens (seo-images & seo-image-gen)
- **Compactação:** Utilizar formatos de próxima geração como WebP.
- **Atributo Alt Constante:** Todas as imagens devem descrever especificamente o conteúdo (Acessibilidade + SEO).
- **Geração de Imagens Inteligentes:** Auxílio na criação/otimização de imagens, utilizando CDNs para carregamento imediato e *lazy-loading* em imagens abaixo da dobra.

## 8. Monitoramento e Analytics (seo-dataforseo & seo-plan)
- **DataForSEO / Rank Tracking:** Configurar tracking diário para short-tail e long-tail keywords.
- **KPIs Mensais:** 
  - Tráfego Orgânico (Não-Branded)
  - Taxa de Conversão Orgânica (Lead/Agendamento)
  - Posições Médias nas principais categorias de serviços
- **Ciclo de Iteração (Plan):** Avaliar resultados a cada 15 dias, ajustando a rota conforme atualizações do algoritmo do Google.

---
**Próximos Passos (Ação do Desenvolvedor/Time):**
1. Revisar e aprovar as diretrizes.
2. Iniciar pela Auditoria Técnica e Correção de Core Web Vitals.
3. Avançar para refinamento On-Page e Schema Markup das clínicas/tratamentos.
