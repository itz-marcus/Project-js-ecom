function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new CreateItem(1,'Forgive Skateboards Forever','Skateboard','https://baboonboards.com/wp-content/uploads/Untitled-12.png','Features: Width- 8.5 Inches Length- 32.1 Inches Wheelbase- 14.5 Inches Ghost Trucks 160mm Baboon Balls Bearings Ghost wheels',1, 2200)
 
let item2 = new CreateItem(2,'Landyachtz Dinghy complete','Cruise-board','https://baboonboards.com/wp-content/uploads/Landyachtz-dinghy-skeleton-1.jpg','Features: Width- 7.8 Inches Length- 28.5 Inches Wheelbase- 14.6 Inches Polar Bear trucks 105mm Space Balls Bearings Fatty Hawgs wheels',1, 4100)
 
let item3 = new CreateItem(3,'ATV Ditch Life Moto Fun','Cruise-board','https://baboonboards.com/wp-content/uploads/landyachtz-ditch-life-moto-fun-600-x-900.jpg','Features: Width- 9.75 Inches Length- 31 Inches Wheelbase- 15 Polar Bear Trucks 155mm smalls Balls Bearings Ez Hawgs wheels',1,3800)
 
let item4 = new CreateItem(4,'Landyachtz ATV-X Classic','Skateboard','https://baboonboards.com/wp-content/uploads/landyachtz-atv-x-vista-600-x-900.jpg','Features: Width- 8.5 Inches Length- 32 Inches Wheelbase- 14.375 Inches Polar Bear Trucks 155mm Reds Bones Bearings Lil EZ Hawgs wheels',1, 3800)
 
let item5 = new CreateItem(5,'Landyachtz Drop Hammer white Pinecone','Longboard','https://baboonboards.com/wp-content/uploads/Landyachtz-drop-hammer-white-pinecones.jpg','Features: Width- 10 Inches Length- 36.6 Inches Wheelbase- 27.2 Inches Bear Generation 6 Trucks 180mm Reds Bones Bearings Supreme Hawgs wheels',1, 4500)

let item6 = new CreateItem(6,'Landyachtz Tony Danza Spectrum','Longboard','https://baboonboards.com/wp-content/uploads/Landyachtz-Tony-Danza-Spectrum.jpg','Features: Width- 10 Inches Length- 36.6 Inches Wheelbase- 27.2 Inches Grizzly Gen 6 155mm Reds Bones Bearings Fatty Hawgs wheels',1, 4800)

let item7 = new CreateItem(7,'Tabla Polar Oski World Domination','Skateboard','https://itz-marcus.github.io/Project-imagesV2/tabla-polar-oski-world-domination-875.png','Features: Width- 10 Inches Length- 36.6 Inches Wheelbase- 27.2 Inches Grizzly Gen 6 155mm Reds Bones Bearings Fatty Hawgs wheels',1, 1300)

let item8 = new CreateItem(8,'duplicate for deletion code purposes :)','Skateboard','https://itz-marcus.github.io/Project-imagesV2/tabla-polar-oski-world-domination-875.png','Features: Width- 10 Inches Length- 36.6 Inches Wheelbase- 27.2 Inches Grizzly Gen 6 155mm Reds Bones Bearings Fatty Hawgs wheels',1, 1300)
 
let items = [item1,item2,item3,item4,item5,item6,item7,item8]

let main = document.querySelector('#for-sale-itms')
localStorage.setItem('items',JSON.stringify(items))

let purchasedStuffs = []
items.forEach(item =>{
     main.innerHTML += `
                <div id="productCard" class="card" >
                        <img id="thumbnail" src="${item.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p id="description" class="card-text">R${item.price}</p>
                            <button id="addToCart" value=${item.id} >Buy</button>
                            <button id="view">View</button>
                        </div>
                    </div>
                     `                  
})

function addToCart(id){
    let [item] = items.filter(Object=> Object.id === +id) 
    purchasedStuffs.push(item)
    localStorage.setItem('purchasedItems',JSON.stringify(purchasedStuffs))
}

let purchasedButs =  document.querySelectorAll('#addToCart')
purchasedButs.forEach(button => {
    button.addEventListener('click',(event) =>{
        addToCart(event.target.value);
    })
});

let searchbar = document.querySelector('#search-input');
searchbar.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    if (searchTerm.length < 1) {
        displayProducts(allList);
    }
    let filteredProducts = allList.filter(product =>
        product.name.toLowerCase().includes(searchTerm));
        console.log(filteredProducts);
    displayProducts(filteredProducts);
});