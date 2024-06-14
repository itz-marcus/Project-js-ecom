let display = document.querySelector('tbody')
let purchasedStuff = JSON.parse(localStorage.getItem('purchasedStuffs'))


purchasedStuff.forEach(purchasedThings =>{
    display.innerHTML += `
        <tr>
        <td><img src="${purchasedThings.image}"></td>
        <td>${purchasedThings.name}</td>
        <td>${purchasedThings.description}</td>
        <td>${purchasedThings.quantity}</td>
        <td>${purchasedThings.price}</td>
        <td></td>
        </tr> 
                      `                  
})
{/* <div>
            <img src="${purchasedThings.name}">
            <p>R${purchasedThings.price}</p>
        </div> */}

