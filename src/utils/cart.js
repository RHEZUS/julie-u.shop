/*
        async getCartItems(){
            let cart  = JSON.parse(localStorage.getItem('cart'));
            if (!cart) {
              cart = [];
              return;
            }
            for (let i = cart.length - 1; i >= 0; i--) {
              if (typeof cart[i] !== 'object') {
                cart.splice(i, 1);
              }
            }
            console.log(cart);
            if (cart.length > 0) {
              await axios.post('api/cart/items', {'productVariantIds': cart})
              .then((response) => {
                let products = response.data.products;
                this.total = 0;
                for (let index = 0; index < products.length; index++) {
                  products[index].quantity = cart.find(item => item.productVariantId == products[index].id).quantity;
                  this.total += parseInt(products[index].price) * products[index].quantity;
                }
                this.cartItems = products;
                console.log(this.cartItems);
                
              }).catch((error) => {
                  console.log(error);
              });
            }
        },
        addQuantity(productVariantId){
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          cart[index].quantity++;
          localStorage.setItem('cart', JSON.stringify(cart));
          this.getCartItems();
        },
        reduceQuantity(productVariantId){
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          if (cart[index].quantity > 1) {
            cart[index].quantity--;
            localStorage.setItem('cart', JSON.stringify(cart));
            this.getCartItems();
          }
        },

        updateQuantity(productVariantId, quantity){
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          cart[index].quantity = quantity;
          localStorage.setItem('cart', JSON.stringify(cart));
          this.getCartItems();
        },

        async placeOrder(){
          if (!checkAuth){
            this.$router.push('/login');
          } else{
            this.$router.push('/place-order');
          }
        },

        async deleteItem(productVariantId){
          this.isDeletingItem = productVariantId;
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));

          this.getCartItems().then(() => {
            this.toast.success('Item removed from cart', { timeout: 2000 });
            this.isDeletingItem = null;
          });
        }
*/

export default function countCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    return 0;
  }
  return cart.length;
}