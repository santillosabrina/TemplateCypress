//import { should } from "chai"
import main from "../PageObjects.cy.js/PageMain.cy"
const tiempo = 2000
describe("test prueba DevSu", ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {    
        return false
    })
    it("Entrando a la Home Store", () => {
        cy.visit("https://www.demoblaze.com/index.html").title().should('eq','STORE')
    })
    it("Seleccionando Samsung S6", () => {
       const compracelular = new main  
       compracelular.get_samsungS6().click({force:true})
       cy.wait(2000)
       compracelular.get_botonAddtoCart().contains("Add to cart").click({force:true})
       compracelular.get_botonCart().should("be.visible").should("have.text", "Cart").click({force:true})
       compracelular.get_validadorTotal().contains("360")
       cy.log("El total es 360")
      
    })    
    it("Gestionando compra Samsung S6", ()=>{
        const procesarCompra = new main
        procesarCompra.get_botonPlaceOrder().should("be.visible", "Placer Order").click({force:true})
    })

    it("Completando Formulario de compra Samsung s6", ()=>{
        const completarFormulario = new main
        completarFormulario.get_fildName().should("be.visible").type("Juan")
        completarFormulario.get_fildCountry().should("be.visible").type("España")
        completarFormulario.get_fildCity().should("be.visible").type("Madrid")
        completarFormulario.get_fildCard().should("be.visible").type("4545223156")
        completarFormulario.get_fildMonth().should("be.visible").type("Agosto")
        completarFormulario.get_fildYear().should("be.visible").type("2022")
    })
    it("Finalizando compra Samsung S6", ()=>{
        const purchase = new main
        purchase.get_botonPurchase().contains("Purchase").click({force:true})
    })
    it("Validacion Ok formulario Samsung S6", ()=>{
        const compraOk = new main
        compraOk.get_botonValidadorCompraOk().should("be.visible")
        cy.wait(tiempo)
        compraOk.get_botonValidadorCompraOk().click()
    })
    it("Seleccionando  Nexus 6", ()=> {
        const compraNexus6 = new main
        compraNexus6.get_selectorNexus6().contains("Nexus 6").click({force:true})
    })

    it("Validando texto Nexus 6", () => {
        const textNexus6 = new main
       textNexus6.get_validadorTextNexus6().should("be.visible")
    })
    it("Agregando Nexus 6 al carrito", () => {
        const botonCart= new main
       botonCart.get_botonAddCartNexus6().contains("Add to cart").click({force:true})
    })
    it("Verificando carga de Nexus 6 al carrito",() => {
        const verificadorCart = new main
        verificadorCart.get_botonVerificandoCarrito().should("be.visible").click({force:true})
        verificadorCart.get_verificadorMontoTotal().contains("650").should("be.visible")
        cy.log("El total es 650")
    })
    it("Procesando la orden compra Nexus 6", ()=>{
        const procesandoCompra = new main
        procesandoCompra.get_botonOrdenarCompra().click({force:true})
    })

    it("Completando formulario de compra Nexus S6", ()=> {
        const formularioCompra = new main
        formularioCompra.get_campoName().should("be.visible").type("Santiago")
        formularioCompra.get_campoCountry().should("be.visible").type("Brasil")
        formularioCompra.get_campoCity().should("be.visible").type("Sao Paulo")
        formularioCompra.get_campoCreditCard().should("be.visible").type("636398987575")
        formularioCompra.get_campoMonth().should("be.visible").type("Julio")
        formularioCompra.get_campoYear().should("be.visible").type("2022")
    })
    it("Finalizando compra Nexus S6", ()=>{
        const finalizandoCompra = new main
        finalizandoCompra.get_botonCompra().contains("Purchase").should("be.visible").click({force:true})
        
    })

    it("Confirmacion Ok formulario compra Nexus S6 - Volviendo a la home store", ()=> {
        const formularioOk = new main
        formularioOk.get_confirmacionFormulario().contains("OK").should("be.visible")
        cy.wait(tiempo)
        formularioOk.get_confirmacionFormulario().click({force:true})
    })
})



 

        
            
