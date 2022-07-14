class main{

//SELECTORES SAMSUNG S6//

samsungS6 = ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
botonAddCart =".col-sm-12 > .btn"
botonCart ="#cartur"
validadorTotal ="#page-wrapper > .row"
botonPlacerOrder =".col-lg-1 > .btn"
fildName ="#name"
fildCountry ="#country"
fildCity ="#city"
fildCredirCard ="#card"
fildMonth ="#month"
fildYear ="#year"
botonPurchase ="#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
validadorCompraOk =".confirm"

//FUNCIONES SAMSUNG S6//

get_contendorCelulares(){
    return cy.get("this.contenedorCelulares")
}

get_samsungS6(){
    return cy.get(this.samsungS6)
}

get_botonAddtoCart(){
    return cy.get(this.botonAddCart)
}

get_botonCart(){
    return cy.get(this.botonCart)
}

get_validadorTotal(){
    return cy.get(this.validadorTotal)
}

get_botonPlaceOrder(){
    return cy.get(this.botonPlacerOrder)
}
 get_fildName(){
    return cy.get(this.fildName)
 }

 get_fildCountry(){
    return cy.get(this.fildCountry)
 }

 get_fildCity(){
    return cy.get(this.fildCity)
 }

 get_fildCard(){
    return cy.get(this.fildCredirCard)
 }

 get_fildMonth(){
    return cy.get(this.fildMonth)
 }
 get_fildYear(){
    return cy.get(this.fildYear)
 }
get_botonPurchase(){
    return cy.get(this.botonPurchase)
}
get_botonValidadorCompraOk(){
    return cy.get(this.validadorCompraOk)
}


//SELECCTORES NEXUS 6//

Nexus6 =":nth-child(3) > .card > .card-block"
validadorTextoNexus6 ="#more-information"
botonCartNexus6 =".col-sm-12 > .btn"
linkCart ="#cartur"
verificadorTotal = ".col-lg-1"
botonRealizarPedido =".col-lg-1 > .btn"
campoName ="#name"
campoCountry= "#country"
campoCity = "#city"
campoCreditCard="#card"
campoMonth ="#month"
campoYear = "#year"
botonCompra ="#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
botonConfirmacionOk= ".confirm"

//Funciones Nexus 6//
get_selectorNexus6(){
    return cy.get(this.Nexus6)
}

get_validadorTextNexus6(){
    return cy.get(this.validadorTextoNexus6)
}
get_botonAddCartNexus6(){
    return cy.get(this.botonCartNexus6)
}
get_botonVerificandoCarrito(){
    return cy.get(this.linkCart)
}
get_verificadorMontoTotal(){
    return cy.get(this.verificadorTotal)
}
 
get_botonOrdenarCompra(){
    return cy.get(this.botonRealizarPedido)
}

get_campoName(){
    return cy.get(this.campoName)
}
get_campoCountry(){
    return cy.get(this.campoCountry)
}
get_campoCity(){
    return cy.get(this.campoCity)
}
get_campoCreditCard(){
    return cy.get(this.campoCreditCard)
}
get_campoMonth(){
    return cy.get(this.campoMonth)
}
get_campoYear(){
    return cy.get(this.campoYear)
}
get_botonCompra(){
    return cy.get(this.botonCompra)
}
get_confirmacionFormulario(){
    return cy.get(this.botonConfirmacionOk)
}
}


export default main 