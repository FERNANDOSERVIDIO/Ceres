let localProductos = [];
let precioTotal = 0;
//---------------------------------------------------------------------------------------------------
TomarItemsLocalStorage();
GenerarItems();
GenerarColumnaTotales();
GenerarCuadro();
GenerarTotal();
fadeIn();

//-----------------------------------------------------------------------------------------------------
function TomarItemsLocalStorage(){
    //TOMO LOS OBJETOS DE LOCAL
    for(let i=0;i<localStorage.length;i++){
        const tempItem = localStorage.getItem(localStorage.key(i));
        const temp = JSON.parse(tempItem);
        localProductos.push(temp);
        //console.log(localProductos[i]);
        /*
        $('#carritoVentana').append(`
        <div class="itemCarrito">
                        <img src="${localStorage.key(i).im}" alt="">
                        <div class="flexColumn">
                            <h3 id="itemCarrito-nombre">nombre</h3>
                            <p id="itemCarrito-precio">precio</p>
                        </div>
                        <input type="text" name="" class="inputCantidad" id="">
                        <input type="button" value="X" name="" class="inputBoton" id="btnEliminar">
                    </div>
        `)*/
    }
}
function GenerarItems(){
    for(let i=0;i<localProductos.length;i++){
        console.log(localProductos[i].imagen)
        $('#carritoItemsArea').append(`
        <div id="carritoItem${i}" class="itemCarrito">
            <img src="../${localProductos[i].imagen}" alt="">
            <div class="flexColumn">
                <h3 id="itemCarrito-nombre">${localProductos[i].nombre}</h3>
                <p id="itemCarrito-precio">${localProductos[i].precio}</p>
            </div>
            <input type="button" value="X" name="" class="inputBoton" id="btnEliminar${i}">
        </div>
        `)
        $(`#btnEliminar${i}`).on('click', ()=>{
            $(`#carritoItem${i}`).fadeOut(1000, ()=>{
                console.log(`le di click a ${i}`)
            let key = localStorage.key(i);
            console.log(key);
            localStorage.removeItem(key);
            location.reload();
            })
            
        })
        
    }
    
}
function GenerarColumnaTotales(){
    console.log('entro al columana totales')
    $('#carritoTotales').append(`
    <h3>Productos</h3>
    <p>Cantida de articulos: ${localProductos.length}</p>
    <!-- CUADRO -->
    <div id="cuadro" class="cuadro flexColumn">
        
        
    </div>
    <button>Pagar</button>
    <!-- MEDIOS DE PAGO -->
    <div class="mediosPago">
        <img src="../imagenes/medios-de-pago.png" alt="">
        <p>*los siguientes medios de pago estan disponibles para todo el territorio de la republica argentina</p>
    </div>
    `)
    console.log('salgo');
}
function GenerarCuadro(){
    for(let prod of localProductos){
        $('#cuadro').append(`
        <div class="linea flexRow">
            <p>${prod.nombre}</p>
            <p>${prod.precio}</p>
        </div>
        `)
        const temp = prod.precio.substr(1);
        console.log(temp);
        precioTotal += +temp
    }
}
function GenerarTotal(){
    $('#cuadro').append(`
    <hr>
        <div class="linea flexRow totalTexto">
            <p>TOTAL</p>
            <p>$ ${precioTotal}</p>
        </div>
    `)
}
function fadeIn(){
    console.log('entro al fade')
    $('.itemCarrito').hide();
    $('.itemCarrito').fadeIn(1500);
    //$('#carritoTotales').hide()
    //$('#carritoTotales').fadeIn(1000)
}