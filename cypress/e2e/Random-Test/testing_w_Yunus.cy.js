/// <reference types="cypress"/>
import 'cypress-wait-until';
import 'cypress-xpath';

describe("Form Elements",function(){
    this.beforeEach(()=>{
cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
    })
    it("Adding Phones to the cart",()=>{
        cy.contains("a","Phones & PDAs").as("button").click()
        cy.get("#input-sort").select("Price (High > Low)")
        cy.get('img[alt="iPhone"]').click()
        cy.get("#input-quantity").clear().type("4")
        cy.contains("button","Add to Cart").as("button").click()
        cy.waitUntil(() => cy.contains("div", "Success: You have added ").as("text").should("be.visible"))
        cy.waitUntil(()=>cy.contains("span"," 4 item(s) - $492.80").as("text").should("be.visible"))
        cy.get("a[title='Shopping Cart']").click()
        
       
    })
})