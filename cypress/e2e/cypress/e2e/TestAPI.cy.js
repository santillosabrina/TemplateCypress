describe("Consultando API", ()=> {
    let datos;
    it("Test API rest",() =>{
        datos=cy.request("https://api.demoblaze.com/login")
        datos.its("status")
    })
})