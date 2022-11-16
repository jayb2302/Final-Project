const cart = [ ]

/*const obj = {name:"Shoe", price: 9.33, qty: 3}
console.log(obj)
console.log(obj.name)
console.log(obj.price)
console.log(obj.qty)
console.log(obj.price * obj.qty)*/

        function addItem(name, price) {
            for (let i = 0; i < cart.length; i += 1) {
                if (cart[i].name === name) { 
                    cart[i].qty += 1
                    //stop here!
                    return
                }
            }
            const item = { name: name, price: price, qty: 1 }
            cart.push(item)
        }

        function showItems() {
            let qty = 0
            for (let i = 0; i < cart.length; i += 1) {
                qty += cart[i].qty
            }
            console.log(`you have ${qty} items in your cart`)

            for (let i = 0; i < cart.length; i += 1) {
                console.log(`- ${cart[i].name} ${cart[i].price} x ${cart[i].qty}`)
            }
            
            let total = 0
            for(let i = 0; i < cart.length; i +=1){
                total += cart[i].price * cart[i].qty
            }

            console.log(`Total in cart: ${total}`)
        }

        addItem('Apple', 0.99)
        addItem('Opinion', 2.98)
        addItem('Orange', 1.29)
        addItem('Opinion', 2.98)
        addItem('Frisbee', 9.33)
        addItem('Opinion', 2.98) 
        addItem('Apple', 0.99)

        showItems()