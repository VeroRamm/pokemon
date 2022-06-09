
const pokemon = new Vue({
    el: '#pokemon',
    data: {
        dato: [],
        error: false,
        cargado:false
    },
    created() {
        this.fetchData('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.dato = data.pokemon;
                    this.cargado = true;
                });
        }
    }
});

const buscar = document.querySelector('#buscar');
const boton = document.querySelector('#boton');

const filtrar = () => {
       // console.log(buscar.value);
       const texto = buscar.value.toLowerCase();
         const lista = document.querySelectorAll('li');
            lista.forEach(element => {
                const textoLi = element.textContent.toLowerCase();
                if(textoLi.includes(texto)){
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
}



