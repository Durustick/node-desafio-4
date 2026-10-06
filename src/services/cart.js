//Casos de uso de carrito de compras
//adicionar um produto ao carrinho
//remover um produto do carrinho
//deletar item 
//calcular total do carrinho


async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItemById(userCart, index) {

    const removeIndex = index - 1;
    if (index >= 0 && index < userCart.length) {
        userCart.splice(removeIndex, 1);

    }
}

async function removeItem(userCart, index) {
    const indexFound = userCart.findIndex((p) => p.name == index.name);

    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;

    } if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}
async function calculateTotal(userCart) {
    const result = (userCart.reduce((total, item) => total + item.subtotal(), 0));
    console.log(`Total: ${result}`);
}

async function displayCart(userCart) {
    console.log('Cart contents:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Price: ${item.price}, Quantity: ${item.quantity}, Subtotal: ${item.subtotal()}`);
    });
}


export { addItem, deleteItem, removeItemById, removeItem, calculateTotal, displayCart };
