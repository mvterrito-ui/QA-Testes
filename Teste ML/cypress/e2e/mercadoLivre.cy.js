// Teste completo - Mercado Livre Homepage

describe('Mercado Livre - Homepage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    // ==================== HEADER / NAVEGACAO ====================

    describe('Header e Navegacao', () => {
        it('Logo visivel e clicavel', function () {
            cy.get('a.nav-logo').should('be.visible').and('have.attr', 'href').and('include', 'mercadolivre.com.br');
        })

        it('Campo de busca visivel', function () {
            cy.get('input.nav-search-input').should('be.visible').and('have.attr', 'placeholder');
        })

        it('Botao de busca visivel', function () {
            cy.get('button.nav-search-btn').should('be.visible');
        })

        it('Link Crie a sua conta', function () {
            cy.contains('a', 'Crie a sua conta').should('be.visible');
        })

        it('Link Entre', function () {
            cy.contains('a', 'Entre').should('be.visible');
        })

        it('Link Compras', function () {
            cy.contains('a', 'Compras').should('be.visible');
        })

        it('Icone do carrinho visivel', function () {
            cy.get('a.nav-cart').should('be.visible');
        })
    })

    // ==================== BUSCA (sem redirecionamento) ====================

    describe('Funcionalidade de Busca', () => {
        it('Digitar no campo de busca', function () {
            cy.get('input.nav-search-input').type('iPhone 15');
            cy.get('input.nav-search-input').should('have.value', 'iPhone 15');
        })

        it('Campo de busca aceita texto e limpa', function () {
            cy.get('input.nav-search-input').type('Notebook').should('have.value', 'Notebook');
            cy.get('input.nav-search-input').clear().should('have.value', '');
        })

        it('Campo de busca vazio nao redireciona', function () {
            cy.get('button.nav-search-btn').click();
            cy.url().should('include', 'mercadolivre.com.br');
        })

        it('Formulario de busca possui action correta', function () {
            cy.get('form.nav-search').should('have.attr', 'action').and('include', 'search');
        })

        it('Input de busca possui name as_word', function () {
            cy.get('input.nav-search-input').should('have.attr', 'name', 'as_word');
        })
    })

    // ==================== CAROUSEL / BANNER PRINCIPAL ====================

    describe('Carousel Principal', () => {
        it('Banner principal visivel', function () {
            cy.get('.andes-carousel-snapped').first().should('be.visible');
        })

        it('Imagem do banner carregada', function () {
            cy.get('.andes-carousel-snapped img').first().should('exist').and('have.attr', 'src');
        })

        it('Carousel possui multiplas imagens', function () {
            cy.get('.andes-carousel-snapped img').should('have.length.greaterThan', 1);
        })

        it('Carousel possui botoes de navegacao', function () {
            cy.get('.andes-carousel-snapped button').should('have.length.greaterThan', 0);
        })
    })

    // ==================== ACESSO RAPIDO ====================

    describe('Acesso Rapido (Dynamic Access)', () => {
        it('Secao de acesso rapido visivel', function () {
            cy.get('.dynamic-access').should('be.visible');
        })

        it('Links de acesso rapido presentes', function () {
            cy.get('.dynamic-access a').should('have.length.at.least', 3);
        })

        it('Cards de acesso rapido com titulo', function () {
            cy.get('.dynamic-access [class*="title"]').should('have.length.at.least', 1);
        })

        it('Todos os icones de acesso carregados', function () {
            cy.get('.dynamic-access img').should('have.length.at.least', 4);
        })
    })

    // ==================== CATEGORIAS ====================

    describe('Categorias', () => {
        it('Secao de categorias visivel', function () {
            cy.get('.categories-new-design').should('be.visible');
        })

        it('Titulo Categorias visivel', function () {
            cy.contains('Categorias').should('be.visible');
        })

        it('Categoria - Veiculos', function () {
            cy.get('.categories-new-design').contains('Veículos').should('be.visible');
        })

        it('Categoria - Celulares e Telefones', function () {
            cy.get('.categories-new-design').contains('Celulares').should('be.visible');
        })

        it('Categoria - Eletrodomesticos', function () {
            cy.get('.categories-new-design').contains('Eletrodomésticos').should('be.visible');
        })

        it('Categoria - Esportes e Fitness', function () {
            cy.get('.categories-new-design').contains('Esportes').should('be.visible');
        })

        it('Categoria - Ferramentas', function () {
            cy.get('.categories-new-design').contains('Ferramentas').should('be.visible');
        })

        it('Categoria - Moda', function () {
            cy.get('.categories-new-design').contains('Moda').should('be.visible');
        })

        it('Icones de categorias carregados', function () {
            cy.get('.categories-new-design img').should('have.length.at.least', 5);
        })

        it('Links de categorias sao clicaveis', function () {
            cy.get('.categories-new-design a').first().should('have.attr', 'href');
        })
    })

    // ==================== TITULO DA PAGINA ====================

    describe('Metadados da Pagina', () => {
        it('Titulo correto', function () {
            cy.title().should('include', 'Mercado Livre');
        })

        it('Canonical URL', function () {
            cy.get('link[rel="canonical"]').should('have.attr', 'href').and('include', 'mercadolivre.com.br');
        })

        it('Idioma da pagina e pt-BR', function () {
            cy.get('html').should('have.attr', 'lang', 'pt-BR');
        })

        it('Favicon presente', function () {
            cy.get('link[rel*="icon"]').should('exist');
        })
    })

    // ==================== RECOMENDACOES ====================

    describe('Secao de Recomendacoes', () => {
        it('Secao de recomendacoes existe', function () {
            cy.get('section.discovery, .andes-carousel-snapped').should('exist');
        })

        it('Produtos recomendados com imagem', function () {
            cy.get('.andes-carousel-snapped img').should('have.length.greaterThan', 0);
        })
    })

    // ==================== ELEMENTOS ESTRUTURAIS ====================

    describe('Elementos Estruturais', () => {
        it('Header fixo no topo', function () {
            cy.get('.nav-header').should('be.visible');
        })

        it('Footer presente', function () {
            cy.get('.nav-footer').should('exist');
        })

        it('Pagina carrega completamente', function () {
            cy.window().then((win) => {
                expect(win.document.readyState).to.eq('complete');
            });
        })

        it('Scroll funciona', function () {
            cy.scrollTo('bottom', { duration: 1000 });
            cy.scrollTo('top', { duration: 500 });
        })
    })

    // ==================== LINKS DE AUTENTICACAO ====================

    describe('Links de Autenticacao', () => {
        it('Link Crie a sua conta redireciona para registro', function () {
            cy.contains('a', 'Crie a sua conta').should('have.attr', 'href').and('include', 'registration');
        })

        it('Link Entre redireciona para login', function () {
            cy.contains('a', 'Entre').should('have.attr', 'href').and('include', 'login');
        })
    })

    // ==================== ACESSIBILIDADE ====================

    describe('Acessibilidade', () => {
        it('Campo de busca tem placeholder acessivel', function () {
            cy.get('input.nav-search-input').should('have.attr', 'placeholder');
        })

        it('Logo possui texto alternativo via overflow hidden', function () {
            cy.get('a.nav-logo').should('exist');
        })

        it('Carrinho possui title acessivel', function () {
            cy.get('a.nav-cart').should('have.attr', 'title');
        })
    })

    // ==================== PERFORMANCE ====================

    describe('Performance de Carregamento', () => {
        it('Pagina carrega em tempo aceitavel', function () {
            cy.window().then((win) => {
                const navigation = win.performance.getEntriesByType('navigation')[0];
                expect(navigation.loadEventEnd).to.be.lessThan(10000);
            });
        })

        it('Fontes personalizadas carregadas', function () {
            cy.document().then((doc) => {
                const fonts = doc.fonts;
                expect(fonts.size).to.be.greaterThan(0);
            });
        })
    })

    // ==================== BUSCA COM REDIRECIONAMENTO (no final para evitar cross-origin) ====================

    describe('Busca com Redirecionamento', () => {
        it('Buscar produto com Enter redireciona para resultados', function () {
            cy.get('input.nav-search-input').type('Samsung Galaxy{enter}');
            cy.url().should('include', 'Samsung');
        })

        it('Buscar produto com botao redireciona para resultados', function () {
            cy.get('input.nav-search-input').type('iPhone 15');
            cy.get('button.nav-search-btn').click();
            cy.url().should('include', 'iPhone');
        })
    })
})
