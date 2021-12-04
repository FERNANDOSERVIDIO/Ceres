
//DECLARACIONES --------------------------------------------------------------------

const productos = [
    {id: 1, nombre: 'Aceite de coco', precio: '$450', imagen: 'imagenes/Quad-Coco-Neutro.png'},
    {id: 2, nombre: 'Miel de abeja', precio: '$150', imagen: 'imagenes/Quad-Miel.png'},
    {id: 3, nombre: 'Saros - Cajun', precio: '$300', imagen: 'imagenes/Quad-Saros-Cajun.png'},
    {id: 4, nombre: 'Saros - Andino', precio: '$300', imagen: 'imagenes/Quad-Saros-EncantoAndino.png'},
    {id: 5, nombre: 'Saros - Medio Oriente', precio: '$300', imagen: 'imagenes/Quad-Saros-MedioOriente.png'}
]

let localProductos= []
//EJECUCION ---------------------------------------------------------------------------------------------------
//CARGO LOS PRODUCTOS EN EL DOM
CargarDom();
TomarItemsLocalStorage();
SetCarritoCount();

CarritoMouseOver();

$('#carrito').on('click', ()=>{
    $('#carrito').animate({
        width: '90px',
        height: '90px',
        //transform: 'rotate(90deg)'
    }, 200, ()=>{

        window.location='./paginas/carrito.html'
    })
})

for(let p of localProductos){
    //console.log('debugeo fuera')
    //console.log(p);
}






//Funciones -----------------------------------------------------------------------------------
function CargarDom(){
    for(let i = 0; i<productos.length;i++){
        $('#boxesArea').append(
            `
            <div class="productBox">
            <div class="imageContainer">
                <img id="Productimage" class="image" src="${productos[i].imagen}" alt="">
            </div>
            <h2 id="ProductName">${productos[i].nombre}</h2>
            <p id="ProductPrice">${productos[i].precio}</p>
            <button id="ProductButton${productos[i].id}" class="button">Añadir al carrito</button>
        </div>
            `
        )
    
        $(`#ProductButton${productos[i].id}`).on('click', ()=>{
            //console.log(productos[i]);
            const textProd = JSON.stringify(productos[i])
            console.log(textProd)
            const indice = localStorage.length +1;
            console.log(indice);
            localStorage.setItem(`producto-${productos[i].nombre}-${localStorage.length +1}`, textProd)
            console.log('termino de gurdar')
            $('#carritoContador').text(localStorage.length)
            //location.reload();
        })
    }
}
function TomarItemsLocalStorage(){
    //TOMO LOS OBJETOS DE LOCAL
    for(let i=0;i<localStorage.length;i++){
        const tempItem = localStorage.getItem(localStorage.key(i));
        const temp = JSON.parse(tempItem);
        localProductos.push(temp);
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
function SetCarritoCount(){
    $('#carritoContador').text(localStorage.length);
}
function CarritoMouseOver(){
    $('#carrito').mouseover(()=>{
        console.log('estoy sobre el carrito')
    })
}

