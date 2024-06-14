let display = document.querySelector('tbody')
let purchasedStuff = JSON.parse(localStorage.getItem('purchasedItems'))


purchasedStuff.forEach(purchasedThings =>{
    display.innerHTML += `
        <tr>
        <td><img id="p-item" src="${purchasedThings.image}"></td>
        <td>${purchasedThings.name}</td>
        <td>${purchasedThings.description}</td>
        <td>${purchasedThings.quantity}</td>
        <td>R${purchasedThings.price}</td>
        <td><button id="clear-item">X</button></td>
        </tr> 
                      `                  
})
{/* <div>
            <img src="${purchasedThings.name}">
            <p>R${purchasedThings.price}</p>
        </div> */}

