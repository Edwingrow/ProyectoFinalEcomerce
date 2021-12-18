let contenedor = document.querySelector(".container-products");

fetch('./js/productos.json')
  .then(response => response.json())
  .then(data => {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    document.getElementById("cart-btn").innerHTML = `
      My cart ${productos.length === 0 ? '' : '(' + productos.length + ')'} <i class="fas fa-shopping-cart"></i>
    `;
    data.forEach((producto, indice) => {
      contenedor.innerHTML += `
        <div class="product">
          <img src="${producto.img}" alt="" class="product__img">
          <div class="product__description">
            <h3 class="product__title">${producto.nombre} ${indice + 1}</h3>
            <span class="product__price">${producto.precio}</span>
          </div>
          <button class="btnCart" id="boton${indice}" ><i class="product__icon fas fa-cart-plus"></i></button>
        </div>
    `})
    data.forEach((producto, indice) => {
      document.getElementById(`boton${indice}`).addEventListener('click', function () {
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        productos.push(producto)
        localStorage.setItem('productos', JSON.stringify(productos));
        document.getElementById("cart-btn").innerHTML = `
          My cart (${productos.length}) <i class="fas fa-shopping-cart"></i>
        `;
      })

    })
  })


