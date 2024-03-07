describe('Tests pour index.html', function() {
    let page;

    beforeEach(async function() {
        // Charger le fichier index.html avant chaque test
        page = await browser.newPage();
        await page.goto('file://' + __dirname + '/../index.html');
    });

    afterEach(async function() {
        // Fermer la page après chaque test
        await page.close();
    });

    it('Le titre de la page doit être "Hello Application"', async function() {
        const title = await page.title();
        expect(title).toBe('Hello Application');
    });

    it('Le texte de la balise h1 doit être "Hello to my application"', async function() {
        const h1Text = await page.evaluate(() => {
            return document.querySelector('h1').textContent;
        });
        expect(h1Text).toBe('Hello to my application');
    });
});
