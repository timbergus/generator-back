describe('E2E: login page', function() {
    var ptor;

    beforeEach(function() {
        browser.get('http://localhost:9000');
        ptor = protractor.getInstance();
    });

    it('when accessing, the home page should be load.', function() {
        var ele = by.id('home_contents');
        expect(ptor.isElementPresent(ele)).toBe(true);
    });
});