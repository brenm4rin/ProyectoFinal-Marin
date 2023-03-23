class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const tarot = new Producto(1, "Curso Tarot", 100, "img/tarot.jpg");
const fengshui = new Producto(2, "Curso Feng-Shui", 120, "img/fengshui.jpg");
const numerologia = new Producto(3, "Curso Numerología", 80, "img/numerologia.jpg");
const astrologia = new Producto(4, "Curso Astrología", 150, "img/astrologia.jpg");


const productos = [tarot, fengshui, numerologia, astrologia];

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

console.log(productos);


const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                    <img src = "${producto.img}" class = "card-img-tom imgProductos">    
                    <div class = "card-body" >
                        <h2> ${producto.nombre} </h2>
                        <p> ${producto.precio} </p>
                        <button class = "btn colorBoton" id = "boton${producto.id}" >Agregar al Carrito</button>
                    </div>
                </div>`


        contenedorProductos.appendChild(card);


        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })


    })
}


mostrarProductos();


const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;

    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    console.log(carrito);
    calcularTotal();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})


const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                    <img src = "${producto.img}" class = "card-img-tom imgProductos">    
                    <div class = "card-body" >
                        <h2> ${producto.nombre} </h2>
                        <p> ${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class = "btn colorBoton" id= "eliminar${producto.id}">Eliminar</button>
                    </div>
                </div>`

        contenedorCarrito.appendChild(card);



        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}


const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})


const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}


const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })

    total.innerHTML = `Total $${totalCompra}`;
}


/*-----------------------*/


let dia
let mes
let resultado


const texto = document.getElementById("texto");



const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    dia = document.getElementById("dia").value
    mes = document.getElementById("mes").value

    calcularSignoZodiacal(dia, mes)

});


function calcularSignoZodiacal(dia, mes) {

    if (mes == 1) {
        if (dia >= 21) {
            texto.innerHTML = "Tu signo es Acuario";
            return "acuario";
        } else {
            texto.innerHTML = "Tu signo es Capricornio";
            return "capricornio";
        }
    }
    if (mes == 2) {
        if (dia >= 19) {
            texto.innerHTML = "Tu signo es Piscis";
            return "piscis";
        } else {
            texto.innerHTML = "Tu signo es Acuario";
            return "acuario";
        }
    }
    if (mes == 3) {
        if (dia >= 20) {
            atexto.innerHTML = "Tu signo es Aries";
            return "aries";
        } else {
            texto.innerHTML = "Tu signo es Piscis";
            return "piscis";
        }
    }
    if (mes == 4) {
        if (dia >= 20) {
            texto.innerHTML = "Tu signo es Tauro";
            return "tauro";
        } else {
            texto.innerHTML = "Tu signo es Aries";
            return "Aries";
        }
    }
    if (mes == 5) {
        if (dia >= 21) {
            texto.innerHTML = "Tu signo es Géminis";
            return "geminis";
        } else {
            texto.innerHTML = "Tu signo es Tauro";
            return "tauro";
        }
    }
    if (mes == 6) {
        if (dia >= 20) {
            texto.innerHTML = "Tu signo es Cáncer";
            return "cancer";
        } else {
            texto.innerHTML = "Tu signo es Géminis";
            return "geminis";
        }
    }
    if (mes == 7) {
        if (dia >= 22) {
            texto.innerHTML = "Tu signo es Leo";
            return "leo";
        } else {
            texto.innerHTML = "Tu signo es Cáncer";
            return "cancer";
        }
    }
    if (mes == 8) {
        if (dia >= 21) {
            texto.innerHTML = "Tu signo es Virgo";
            return "virgo";
        } else {
            texto.innerHTML = "Tu signo es Leo";
            return "leo";
        }
    }
    if (mes == 9) {
        if (dia >= 22) {
            texto.innerHTML = "Tu signo es Libra";
            return "libra";
        } else {
            texto.innerHTML = "Tu signo es Virgo";
            return "virgo";
        }
    }
    if (mes == 10) {
        if (dia >= 22) {
            texto.innerHTML = "Tu signo es Escorpio";
            return "escorpio";
        } else {
            texto.innerHTML = "Tu signo es Libra";
            return "libra";
        }
    }
    if (mes == 11) {
        if (dia >= 21) {
            texto.innerHTML = "Tu signo es Sagitario";
            return "sagitario";
        } else {
            texto.innerHTML = "Tu signo es Escorpio";
            return "escorpio";
        }
    }
    if (mes == 12) {
        if (dia >= 21) {
            texto.innerHTML = "Tu signo es Capricornio";
            return "capricornio";
        } else {
            texto.innerHTML = "Tu signo es Sagitario";
            return "sagitario";
        }
    }
    return "Fecha no válida";
}

calcularSignoZodiacal(dia, mes);


const listadoProductos = "json.productos.json";

const listado = document.getElementById("listado");

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(producto => {
            listado.innerHTML += `
            <h5>Nombre: ${producto.nombre}</h5>
            <p>Precio: ${producto.precio}</p>
            <p>ID: ${producto.id}</p>
            `
        })
    })

    .catch(error => console.log(error));
