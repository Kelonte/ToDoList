function validarTarea(){
    if (tarea.value.length > 0){
        new Item(tarea.value);
        tarea.value = "";
    } else {
        alert("la tarea no puede estar en blanco.")
    }
}

let tarea = document.querySelector(".input");
let botonAgregar = document.querySelector(".botonAgregar");
let container = document.querySelector(".container");

class Item{
    constructor(tareaAsignada){
        this.crearDiv(tareaAsignada)
    }
    crearDiv(tareaAsignada){
        // alert(tareaAsignada);
        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.value = tareaAsignada;
        inputItem.disabled = true;
        inputItem.classList.add("itemInput");
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<img class="imagen" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"></img>';
        botonEditar.classList.add("botonEditar");
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = '<img class="imagen" src="https://cdn-icons-png.flaticon.com/512/323/323811.png"></img>';
        botonRemover.classList.add("botonRemover");

        let item = document.createElement("div");
        item.appendChild(inputItem);
        item.appendChild(botonEditar);
        item.appendChild(botonRemover);
        item.classList.add("item");
        container.appendChild(item);

        botonEditar.addEventListener("click", editItem);
        botonRemover.addEventListener("click", borrarItem);

        function borrarItem(){
            item.remove();
        }

        function editItem(){
            if (inputItem.disabled == true){
                botonEditar.innerHTML = '<img class="imagen" src="https://cdn-icons-png.flaticon.com/512/597/597356.png"></img>';
                inputItem.disabled = false;    
            } else {
                botonEditar.innerHTML = '<img class="imagen" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"></img>';
                inputItem.disabled = true;  
            }
        }
        
    }
}

document.addEventListener("keydown", function(tecla){
    if (tecla.key == "Enter"){
        validarTarea();
    }
});

botonAgregar.addEventListener("click", validarTarea);