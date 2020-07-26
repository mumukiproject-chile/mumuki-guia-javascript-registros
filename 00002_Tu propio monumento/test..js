describe('', function () {
    it('torreAzadi se llama Torre Azadi', function () {
        assert.equal(torreAzadi.nombre.toLowerCase(), 'torre azadi');
    });
});
describe('', function () {
    it('torreAzadi es de Teherán, Irán', function () {
        assert.equal(torreAzadi.locacion, 'Teherán, Irán');
    });
});
describe('', function () {
    it('torreAzadi tiene su año de construcción', function () {
        assert.equal(torreAzadi.anioDeConstruccion, 1971);
    });
});
describe('', function () {
    it('banderaBicentenario se llama Monumento Nacional a la Bandera', function () {
        assert.equal(banderaBicentenario.nombre.toLowerCase(), 'bandera bicentenario');
    });
});
describe('', function () {
    it('banderaBicentenario es de Santiago, Chile', function () {
        assert.equal(banderaBicentenario.locacion, 'Santiago, Chile');
    });
});
describe('', function () {
    it('banderaBicentenario tiene su año de construcción', function () {
        assert.equal(banderaBicentenario.anioDeConstruccion, 1957);
    });
});