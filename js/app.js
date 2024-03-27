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
        deleteTodo(todo, i){
            // console.log(todo, i);
            console.log(`deleted: ${todo.text}`);
            this.todos.splice(i,1);
        }
    }
}).mount('#app');