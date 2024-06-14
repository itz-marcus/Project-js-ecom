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

let item9 = new CreateItem(9,'Independent Stage 11 Bar Flat Black','Skateboard truck','https://itz-marcus.github.io/Project-imagesV2/Truck.png','Axel: 85cm',1, 750)
 
let item10 = new CreateItem(10,'HAWGS MINI ZOMBIES Cruise Wheels','Skateboard','https://itz-marcus.github.io/Project-imagesV2/wheel.png','Softness: 80a Width: 77mm',1, 800)
 
let items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10]

function displayBoard() {
    let table = document.querySelector("table");

    table.innerHTML = '';
    if (items.length === 0) {
        table.innerHTML = `<div id="cen"><div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
    } else {
        let products = items.map((item, index) => {
            return `
                <tr>
                    <td class="text-brown">${index + 1}</td>
                    <td class="text-brown">${item.name}</td>
                    <td class="text-brown">${item.category}</td>
                    <td class="text-brown"><img src="${item.image}"id='admin-pic'></td>
                    <td class="text-brown">${item.description}</td>
                    <td class="text-brown">${item.quantity}</td>
                    <td class="text-brown">R${item.price}</td>
                    <td><button class="btn btn-primary edit" value="${index}" data-edit>edit</button></td>
                    <td><button class="btn btn-primary delete" value="${index}" data-delete>delete</button></td>
                </tr>
            `;
        });
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>${products.join("")}</tbody>`;
    }
}

window.onload = function () {
    
    if (localStorage.getItem('items')) {
        
        items = JSON.parse(localStorage.getItem('items'));
    } else {
        
        displayBoard();
    }
    
    displayBoard();
};

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayBoard(); 
}
// Function to edit a bicycle item
function editBicycle(index) {
    // Populate the edit modal fields with current data
    let bicycle = items[index];
        document.getElementById("editName").value = bicycle.name;
        document.getElementById("editSubCategory").value = bicycle.subCategory;
    document.getElementById("editCategory").value = bicycle.category;
    document.getElementById("editImage").value = bicycle.image;
    document.getElementById("editDescription").value = bicycle.description;
    document.getElementById("editQuantity").value = bicycle.quantity;
    document.getElementById("editPrice").value = bicycle.price;
    // Show the edit modal
    document.getElementById("editModal").style.display = "block";
    // Store the index in a data attribute for later use
    document.getElementById("editModal").setAttribute("data-index", index);
}
// Function to save changes made in the edit modal
function saveChanges() {
    // Get the index of the item being edited from the data attribute
    let index = parseInt(document.getElementById("editModal").getAttribute("data-index"));
    // Update the item with the new values from the modal inputs
    items[index].name = document.getElementById("editName").value;
    items[index].subCategory = document.getElementById("editSubCategory").value;
    items[index].category = document.getElementById("editCategory").value;
    items[index].image = document.getElementById("editImage").value;
    items[index].description = document.getElementById("editDescription").value;
    items[index].quantity = parseInt(document.getElementById("editQuantity").value);
    items[index].price = parseInt(document.getElementById("editPrice").value);
    // Update the data in localStorage
    localStorage.setItem('items', JSON.stringify(items));
    // Close the edit modal
    closeEditModal();
    // Update the table display
    displayBoard();
}
// Function to close the edit modal
function closeEditModal() {
    // Hide the edit modal
    document.getElementById("editModal").style.display = "none";
}
// Add event listener for delete button clicks
document.querySelector("table").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      let index = event.target.value;
      deleteBicycle(index);
    }
});
// Add event listener for edit button clicks
document.querySelector("table").addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
      let index = event.target.value;
      editBicycle(index);
    }
});
function addProduct() {
    // Get input values
    let name = document.getElementById("addName").value;
    let subCategory = document.getElementById("addSubCategory").value;
    let category = document.getElementById("addCategory").value;
    let image = document.getElementById("addImage").value;
    let description = document.getElementById("addDescription").value;
    let quantity = parseInt(document.getElementById("addQuantity").value);
    let price = parseInt(document.getElementById("addPrice").value);
    // Create a new product object
    let newProduct = new CreateBicycle(items.length + 1, name, subCategory, category, image, description, quantity, price);
    // Add the new product to the array
    items.push(newProduct);
    // Update the data in localStorage
    localStorage.setItem('items', JSON.stringify(items));
    // Close the modal
    closeAddModal();
    // Update the table display
    displayBoard();
}
function closeAddModal() {
    // Hide the add modal
    document.getElementById("addModal").style.display = "none";
}