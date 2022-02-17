let app = new Vue ({
    el: '#miapp',
    data: {
        discArray: [],
    },
    created(){
        this.generaArray();
        console.log(this.discArray)
    },
    methods: {
        generaArray(){
            axios.get('http://localhost:8888/php-ajax-dischi/Milestone%202/api.php')
                .then( (risposta) => {
                    // handle success
                    this.discArray = risposta.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
    },
});