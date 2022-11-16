


const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')


//itemList.innerHTML = '<li>Hello World</li>'

const cart = [ ]

/*const a = 999
const obj = { a }
console.log(obj)
console.log('*********')


const obj = {name:"Shoe", price: 9.33, qty: 3}
console.log(obj)
console.log(obj.name)
console.log(obj.price)
console.log(obj.qty)
console.log(obj.price * obj.qty)*/
//-----------------------------------------------
// Add Item
        function addItem(name, price) {
            for (let i = 0; i < cart.length; i += 1) {
                if (cart[i].name === name) { 
                    cart[i].qty += 1
                    //stop here!
                    return
                }
            }
            const item = { name, price, qty: 1 }
            cart.push(item)
        }
//-----------------------------------------------
// Show Items
        function showItems() {
            const qty = getQty()
            //console.log(`you have ${qty} items in your cart`)
            cartQty.innerHTML = `you have ${qty} items in your cart`

            let itemStr = ''
            for (let i = 0; i < cart.length; i += 1) {
                // console.log(`- ${cart[i].name} ${cart[i].price} x ${cart[i].qty}`)
                // { name: 'Apple', price: 0.99, qty:3}
                const { name, price, qty } = cart[i] 
                
                
                itemStr += `<li> 
                ${name} ${price} x ${qty} = ${qty * price}  </li>`
                
               
            }

            itemList.innerHTML = itemStr

            //console.log(`Total in cart: ${getTotal()}`)
            cartTotal.innerHTML = `Total in cart: ${getTotal()}`
        }
//-----------------------------------------------
// Get Qty
        function getQty(){
            let qty = 0
            for (let i = 0; i < cart.length; i += 1) {
                qty += cart[i].qty
            }
            return qty
        }
//-----------------------------------------------
// Get total
        function getTotal(){
            let total = 0
            for(let i = 0; i < cart.length; i +=1){
                total += cart[i].price * cart[i].qty
            }
            return total.toFixed(2)
        }

        function removeItem(name, qty = 0) {
            for (let i = 0; i < cart.length; i += 1){
                if (cart[i].name === name) {
                    if(qty > 0){
                        cart[i].qty -= qty
                    }
                    
                    if (cart[i].qty < 1 || qty === 0) {
                    cart.splice(i, 1)
                }

                    return
                }
            }
        }
//-----------------------------------------------
        addItem('Apple', 0.99)
        addItem('Opinion', 2.98)
        addItem('Orange', 1.29)
        addItem('Opinion', 2.98)
        addItem('Frisbee', 9.33)
        addItem('Opinion', 2.98) 
        addItem('Apple', 0.99)

        showItems()

        removeItem('Apple', 1)
        removeItem('Frisbee')

        showItems()