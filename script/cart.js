let display = document.querySelector('tbody')
let purchasedStuff = JSON.parse(localStorage.getItem('purchasedItems'))


purchasedStuff.forEach(purchasedThing =>{
    display.innerHTML += `
        <tr>
        <td><img id="p-item" src="${purchasedThing.image}"></td>
        <td>${purchasedThing.name}</td>
        <td>${purchasedThing.description}</td>
        <td>${purchasedThing.quantity}</td>
        <td>R${purchasedThing.price}</td>
        <td><button id="clear-item">X</button></td>
        </tr> 
                      `                  
})

let cartAmount = document.querySelector('#cart-amount')

