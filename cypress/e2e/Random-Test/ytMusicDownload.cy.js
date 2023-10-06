/*/// <reference types="cypress"/>
describe("Form Elements",function(){
    this.beforeEach(()=>{
cy.visit("https://ytmp3.nu/nBlF/")
    })
    it("Downloading music",()=>{
        const youtubeUrls = [
            'https://youtu.be/tEH1cF8HDGY?si=OKTzpjgNrrgiujgz',
            'https://youtu.be/Pl7--yxZjng?si=XBYnKBXvw1_z2Q-9',
            'https://youtu.be/XHwOPkFMtZg?si=sAHGQXwmv3pV9YOJ',
            'https://youtu.be/P8K0d6mw71Q?si=5rQkf2p7aummZupn',
            'https://youtu.be/xpjRba5c7-s?si=kp6-dkj6IzSalmcA',
            'https://youtu.be/rE7O2niluqE?si=sZsJx6-n4DL3Zf7p'
          ];
          
          const myCollection = cy.wrap(youtubeUrls);
          youtubeUrls.forEach(url => {
            cy.get("#url").type(url) // Assuming there is an input element to type the URL
            cy.get("input[type='submit']").click()
            cy.contains("a","Download").click()
          });
        
        
        
    })
})*/
describe("Form Elements", function () {
    this.beforeEach(() => {
      cy.visit("https://ytmp3.nu/nBlF/")
    })
  
    it("Downloading music", () => {
      const youtubeUrls = [
        "https://youtu.be/tEH1cF8HDGY?si=OKTzpjgNrrgiujgz",
        "https://youtu.be/Pl7--yxZjng?si=XBYnKBXvw1_z2Q-9",
        "https://youtu.be/XHwOPkFMtZg?si=sAHGQXwmv3pV9YOJ",
        "https://youtu.be/P8K0d6mw71Q?si=5rQkf2p7aummZupn",
        "https://youtu.be/xpjRba5c7-s?si=kp6-dkj6IzSalmcA",
        "https://youtu.be/rE7O2niluqE?si=sZsJx6-n4DL3Zf7p",
      ]
  
      const myCollection = cy.wrap(youtubeUrls)
      youtubeUrls.forEach((url) => {
        cy.get("#url").type(url) // Assuming there is an input element to type the URL
        cy.get("input[type='submit']").click()
        cy.contains("a", "Download").click().then(() => {
          
  
          // Open the download directory
          cy.exec('start "" "C:\Users\Muaz Yagci\Downloads"')

          cy.window.then((win)=>{
            win.close()
          })
          cy.reload()

        })
      })
    })
  })
  