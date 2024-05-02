var data=[
    {
        codigo: "01",
        categoria: "Ropa",
        nombre: "Top Formal de Mujer a Rayas",
        precioRegular: "$35.00",
        precioFinal: "$30.00",
        imagen: "./img/formal-striped-women-top.jpg",
        estrellas: 4,
        comentarios: 2,
        nuevo: true,
        discount: "-$5.00"
    },
    {
        codigo: "02",
        categoria: "Electronica",
        nombre: "Celular Galaxy Note Series",
        precioRegular: "$750.00",
        precioFinal: "$675.00",
        imagen: "./img/galaxy-note-series-smartphone.jpg",
        estrellas: 4,
        comentarios: 2,
        nuevo: true,
        discount: "-10%"
    },
    {
        codigo: "03",
        categoria: "Accesorios",
        nombre: "Cartera de Diseño Premium",
        precioRegular: "",
        precioFinal: "$85.00",
        imagen: "./img/premium-designer-hand-bag.jpg",
        estrellas: 5,
        comentarios: 1,
        nuevo: true,
        discount: false
    },
    {
        codigo: "04",
        categoria: "Electronica",
        nombre: "Monitor con Amplio Angulo de Visión",
        precioRegular: "",
        precioFinal: "$980.00",
        imagen: "./img/monitor-with-wide-viewing-angle.jpg",
        estrellas: 4,
        comentarios: 3,
        nuevo: true,
        discount: false
    },
    {
        codigo: "05",
        categoria: "Ropa",
        nombre: "Zapatillas Casuales Para Hombres",
        precioRegular: "$40.00",
        precioFinal: "$35.00",
        imagen: "./img/smart-casual-men-sneakers.jpg",
        estrellas: 5,
        comentarios: 1,
        nuevo: true,
        discount: "-$5.00"
    },
    {
        codigo: "06",
        categoria: "Electronica",
        nombre: "Heladera Doble Puerta",
        precioRegular: "",
        precioFinal: "$1240.00",
        imagen: "./img/double-door-smart-refrigerator.jpg",
        estrellas: 5,
        comentarios: 1,
        nuevo: true,
        discount: false
    },
    {
        codigo: "07",
        categoria: "Electronica",
        nombre: "Celular Samsung Galaxy",
        precioRegular: "$600.00",
        precioFinal: "$550.00",
        imagen: "./img/galaxy-android-smartphone.jpg",
        estrellas: 5,
        comentarios: 4,
        nuevo: true,
        discount: "-$50.00"
    },
    {
        codigo: "08",
        categoria: "Electronica",
        nombre: "Webster Parlante Bluetooth",
        precioRegular: "$100.00",
        precioFinal: "$85.00",
        imagen: "./img/webster-bluetooth-speakers.jpg",
        estrellas: 5,
        comentarios: 4,
        nuevo: true,
        discount: "-15%"

    },
    {
        codigo: "09",
        categoria: "Electronica",
        nombre: "Microndas con Conveccion",
        precioRegular: "$200.00",
        precioFinal: "$180.00",
        imagen: "./img/convection-micro-wave-owen.jpg",
        estrellas: 3,
        comentarios: 7,
        nuevo: true,
        discount: "-$20.00"
    },
    {
        codigo: "10",
        categoria: "Ropa",
        nombre: "Pantalon de Algodon para Mujer",
        precioRegular: "",
        precioFinal: "$65.00",
        imagen: "./img/women-cotton-blend-trousers.jpg",
        estrellas: 5,
        comentarios: 2,
        nuevo: true,
        discount: false
    }
]

const dataOriginal=data;
const dataAOrdenar= data.slice();
dataAOrdenar.sort((a,b) => b.estrellas-a.estrellas);
const dataOrdenada = dataAOrdenar;