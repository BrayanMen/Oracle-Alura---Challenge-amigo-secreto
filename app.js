// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById("amigo")
    let nombre = nombreInput.value;

    if(nombre === ""){
        alert("Por favor ingrese un nombre valido")
        return;
    }
    if(amigos.includes(nombre)){
        alert("El nombre ya existe")
        return;
    }
    amigos.push(nombre);
    actualizarInterfaz();
    nombreInput.value = "";
};

function actualizarInterfaz(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.map((amigo, i)=>{        
        let itemLista = document.createElement("li");
        itemLista.innerHTML = `
        ${amigo.charAt(0).toUpperCase()+ amigo.slice(1)}
        <button onclick="eliminar(${i})">Eliminar</button>
        `;
        lista.appendChild(itemLista);
    })
};

function eliminar(i){
    amigos.splice(i,1);
    actualizarInterfaz();
};

function sortearAmigo(){
    if(amigos.length < 3){
        alert("Debe haber al menos 3 amigos para sortear")
        return;
    }
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = "";

    let mezclados = mezclar([...amigos]);
    
    let flag = false;
    for(let i = 0; i <mezclados.length;i++){
        if(mezclados[i]===amigos[i]){
            flag = true;
            break
        }
    }

    if(flag){
        sortearAmigo();
        return;
    };

    mezclados.map((amigo, i)=>{
        let itemLista = document.createElement("li");
        itemLista.innerHTML = `
        <strong>${amigos[i].charAt(0).toUpperCase()+ amigos[i].slice(1)}</strong> -> <strong>${amigo.charAt(0).toUpperCase()+ amigo.slice(1)}</strong>
        `;
        resultados.appendChild(itemLista);
    })
};

function mezclar(arr){
    for(let i = arr.length - 1; i > 0 ; i--){
        let random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
};
