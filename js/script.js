

const app = Vue.createApp({
    name: 'demo API',
    data () {
        return {
            emails: []
        }
    },
    methods: {
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response){
            console.log(response.data.response)
        });
            
        }
    },
    mounted(){
    }

}); 

app.mount('#root')