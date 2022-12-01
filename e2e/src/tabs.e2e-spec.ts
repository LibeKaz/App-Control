import { browser, element, by} from 'protractor';

describe('Mi prueba',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });
    // Prueba 1
    it("La pantalla de Perfil se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Perfil");
    });
    // Prueba 2
    it("El usuario puede navegar a la pestaña de Asistencia",async ()=>{
        await element(by.css("[tab=tab2]")).click();
        browser.driver.sleep(500);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Asistencia");
    });
    // Prueba 3
    it("El usuario puede navegar a la pestaña del Calendario",async ()=>{
        await element(by.css("[tab=tab3]")).click();
        browser.driver.sleep(500);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Calendario");
    });
});