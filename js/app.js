const {createApp} = Vue;

createApp({
    data(){
        return{
            todos: [
                {
                    text: 'Pulire Cucina',
                    done: false
                },
                {
                    text: 'Pulire Camera',
                    done: true
                },
                {
                    text: 'Pulire Salone',
                    done: true
                },
                {
                    text: 'Pulire Sgabbuzino',
                    done: false
                },
                {
                    text: 'Pulire Cantina',
                    done: true
                }
            ]
        }
    },
    methods:{

    }
}).mount('#app');