import { createI18n } from "vue-i18n";
import { price } from "./constant/data";


// Define your translations
const messages = {
  en: {
    welcome: 'Welcome',
    Home: 'Home',
    contactUs: 'Contact Us',
    helpFaq: 'Help & FAQ',
    discover: 'Discover',
    orderHistory: 'Order History',
    productsInBrand: 'Products In Brand: ',
    productsInCategory: 'Products In Category: ',
    productDescription: 'Product Description',
    product: 'Product',
    price: 'price',
    color: 'Color',
    sizes: 'Sizes',
    quantity: 'Quantity',
    total: 'Total',
    totalPrice: 'Total Price',
    addToCart: 'Add To Cart',
    relatedProducts: 'Related Products',
    addToWishlist: 'Add To Wishlist',
    removeFromWishlist: 'Remove From Wishlist',
    quickView: 'Quick View',
    usefulLinks: 'Useful Links',
    categories: 'Categories',
    brands: 'Brands',
    searchProduct: 'Search Product', 
    popularSearches: 'Popular Searches',
    resultsFor: 'Results for',
    loadMoreResults: 'Load More results',
    shoppingCart: 'Shopping Cart',
    shoppingCartEmpty: 'Shopping cart empty',
    placeOrder: 'Place Order',
    payTotal: 'Pay Total',
    Delete: 'Delete',
    wishlist: 'My WishLists',
    myCart: 'My Cart',
    viewDetails: 'View Details',
    discover: 'Discover',
    bestSellers: 'Best Sellers',
    newArrivals: 'New Arrivals',
    freeShipping: 'Free Shipping',
    returnPolicy: 'Return Policy',
    securePayment: 'Secure Payment',
    chooseLanguage: 'Choose Language',
    yourCart: 'Your Cart',
    yourWishlist: 'Your Wishlist',
    notLoggedInYet: 'You are Not Logged In Yet',
    proceedToCheckout: 'Proceed To Checkout',
    taxMessage: 'Tax included. Shipping calculated at checkout.',
    myOrders: 'My Orders',

    // other translations
  },
  fr: {
    welcome: 'Bienvenue',
    Home: 'Acceuil',
    contactUs: 'Contactez-nous',
    helpFaq: 'Aide & FAQ',
    discover: 'Decouvrez',
    orderHistory: 'Historique des commandes',
    productsInBrand: 'Produits dans la marque: ',
    productsInCategory: 'Produts Dans La Category: ',
    productDescription: 'Description du produit',
    product: 'Produit',
    price: 'prix',
    color: 'Couleur',
    sizes: 'Tailles',
    quantity: 'Quantite',
    total: 'Total',
    totalPrice: 'Prix Total',
    addToCart: 'Ajouter Au panie',
    relatedProducts: 'Produits Similaires',
    addToWishlist: 'Ajouter Aux favoris',
    removeFromWishlist: 'Retirer des Favoris',
    quickView: 'Vue Rapide',
    usefulLinks: 'Liens Utiles',
    categories: 'Categories',
    brands: 'Marques',
    searchProduct: 'Chercher le produit',
    resultsFor: 'Resultats pour',
    loadMoreResults: 'Charger plus de resultats',
    shoppingCart: 'Panier',
    shoppingCartEmpty: 'Le panier est Vide',
    placeOrder: 'connander',
    payTotal: 'Total A payer',
    Delete: 'supprimer',
    wishlist: 'Mes Favoris',
    myCart: 'Mon Panier',
    viewDetails: 'Voir les Details',
    discover: 'Decouvrez',
    bestSellers: 'Meilleurs Ventes',
    newArrivals: 'Nouveautes',
    freeShipping: 'Livraison Gratuite',
    returnPolicy: 'Politique de Retour',
    securePayment: 'Paiement Securise',
    chooseLanguage: 'Choisir la langue',
    yourCart: 'Votre Panier',
    yourWishlist: 'Vos Favoris',
    notLoggedInYet: 'Vous n\'etes pas encore connecte',
    proceedToCheckout: 'Passer la commande',
    taxMessage: 'TVA incluse. Frais de port calculés lors du paiement.',
    myOrders: 'Mes Commandes',





    popularSearches: 'Rechercher Populaires',
    // other translations
  },
  // Add more languages here
};

// Detect the user's language or set a default language
const getLocale = () => {
  const locale = navigator.language || navigator.userLanguage;
  return locale.split('-')[0]; // Extract the language code (e.g., 'en', 'fr')
};

const i18n = createI18n({
  locale: getLocale(), // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
