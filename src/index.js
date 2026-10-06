import * as cartService from './services/cart.js';
import createItem from  './services/item.js';
const cart = []; 

console.log('welcome to the shopping cart app!');

const item1 = await createItem('shampoo',10, 2);
const item2 = await createItem('soap', 5, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, item1);
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);
