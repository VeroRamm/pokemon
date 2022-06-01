
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





