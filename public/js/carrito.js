let myModalEl = document.getElementById('exampleModal');
let deleteCart = document.getElementById("delete-cart");

const deleteAllItems = () => {
  localStorage.clear();
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  document.getElementById("cart-btn").innerHTML = `
    My cart <i class="fas fa-shopping-cart"></i>
  `;
  showITems(productos);
}

const showITems = (productos) => {
  let html = "";
  let total = 0;

  productos.forEach((producto, index) => {
    html += `
      <div class="row text-center" id="${'row-' + index}">
        <div class="col-3">
          ${producto.nombre}
        </div>
        <div class="col-3">
          ${producto.precio}
        </div>
        <div class="col-3">
          ${producto.stock}
        </div>
        <div class="col-3">
          <button class="btn" id="item-${index}"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
    total += producto.precio;
  });



  document.getElementById('show-cart').innerHTML = html;
}

myModalEl.addEventListener('show.bs.modal', function (event) {
  deleteCart.addEventListener("click", deleteAllItems);
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  showITems(productos);
});

myModalEl.addEventListener('hidden.bs.modal', function (event) {
  deleteCart.removeEventListener("click", deleteAllItems);
});

