let productos =[];
let contenedor = document.querySelector(".container-products");

    fetch('./productos.json')
    .then(response => response.json() )
    .then(data =>{
      data.forEach((producto, indice) => {
          /*data = {
            id: indice,
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img,
            cantidad: 0

          }
          productos.push(data);*/
         
          contenedor.innerHTML += `
        <div class="product">
          <img src="${producto.img}" alt="" class="product__img">
          <div class="product__description">
            <h3 class="product__title">${producto.nombre} ${indice+1}</h3>
            <span class="product__price">${producto.precio}</span>
          </div>
          <button class="btnCart" id="boton${indice}" ><i class="product__icon fas fa-cart-plus"></i></button>
          
        </div>
      `})
      data.forEach((producto, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', function(){
          productos.push(producto)
          localStorage.setItem('productos', JSON.stringify(productos))
          console.log(productos)
        })

      }) 
     
    }) 


