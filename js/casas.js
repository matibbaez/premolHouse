function mostrarDetalles(titulo, imagen) {
    document.getElementById('modalTitle').innerText = 'Detalles del ' + titulo;
    document.getElementById('modalImage').src = imagen;

    // Puedes agregar características específicas para cada modelo aquí
    if (titulo === 'Modelo Americana') {
        document.getElementById('modalText').innerText = "\nLas viviendas americanas son el modelo más elegido por los argentinos. Se destaca por sus altos techos a dos aguas, evitando cualquier tipo de filtración, aislando el calor y el frío.";
    } else if (titulo === 'Modelo Minimalista') {
        document.getElementById('modalText').innerText = "\nLos modelos minimalistas te brindan una fachada moderna, con más iluminación y más parecidas a una casa tradicional. Teniendo un techo oculto con caída hacia atrás.";
    } else if (titulo === 'Diseñado Nosotros') {
        document.getElementById('modalText').innerText = "\nNuestros diseños son únicos y están pensados para brindar la máxima comodidad y calidez a nuestros clientes. Incorporamos elementos innovadores que hacen que nuestras casas se destaquen por su estilo y funcionalidad.";
    }
        
    $('#detallesModal').modal('show');
}

function cerrarDetalles() {
    $('#detallesModal').modal('hide');
}