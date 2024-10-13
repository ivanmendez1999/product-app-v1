class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
        }
    }
    
    class UI {
        addProduct(product) {
            const productList = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                    
                        <strong>Nombre del producto</strong>: ${product.name}
                        <strong>Precio del producto</strong>: ${product.price}
                        <strong>Año del producto</strong>: ${product.year}
                        <a href="#" class="btn btn-danger" name="delete">Borrar</a>

                    </div>
                </div>
            `;
            productList.appendChild(element);

        }

        resetForm() {
            document.getElementById("product-form").reset();

        }
        deleteProduct(element) {
            if(element.name ==='delete'){
                element.parentElement.parentElement.parentElement.remove();
                this.showMessage('Producto eliminado satisfactoriamente', 'danger');
            }
        }
        showMessage(message, cssClasss) {
            const div = document.createElement('div');
            div.className = `alert alert-${cssClasss} mt-2`;
            div.appendChild(document.createTextNode(message));

            //mostrando en el DOM
            const container = document.querySelector('.container');
            const app = document.querySelector('#App');
            container.insertBefore(div, app);
            setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 5000);
        }
    }
    
    
    //DOM events
    
    document.getElementById("product-form")
        .addEventListener("submit", function(m) {
            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;
            const year = document.getElementById('year').value;

            const product = new Product(name, price, year);
            const ui = new UI();
                if(name === '' || price === '' || year === '') {
                    return ui.showMessage('Llene los campos vacíos', 'warning');
                }
            ui.addProduct(product);
            ui.resetForm();
            ui.showMessage('Se añadió el producto correctamente.', 'success');

            m.preventDefault();
    });
    document.getElementById("product-list")
    .addEventListener('click', function (m) {
        const ui = new UI();
        ui.deleteProduct(m.target);
    })
    //termina el script