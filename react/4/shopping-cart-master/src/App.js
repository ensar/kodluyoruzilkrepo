import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";
import { useState } from "react";

const App=()=>  {
  const [state,setState]=useState({
    cart: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    itemCount: 0,
  })
  

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cart = [...state.cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = getItemCount(cart);
    // state'i güncelle
    setState({ cart, itemCount });
  };

 const handleDecrement = (product) => {
    const cart = [...state.cart];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const itemCount = this.getItemCount(cart);
    setState({ cart, itemCount });
  };

 const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

 
    return (
      <div className="App">
        <Navbar totalItems={state.itemCount} />
        <ProductsGrid
          products={products}
          cart={state.cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
  }


export default App;
