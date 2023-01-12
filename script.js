const app = Vue.createApp({
    data() {
        return {
            lists: [
                {
                    text: "Fare i compiti",
                    done: null,
                    executive: null,
                },
                {
                    text: "Fare la spesa",
                    done: null,
                    executive: null,
                },
                {
                    text: "Fare faccende domestiche",
                    done: null,
                    executive: null,
                },
            ],
            dinamicList:" ",
        }
    },
    methods: {
        addTask(){
          if(this.dinamicList){
            const newTask = {
              text: this.dinamicList,
              done: null,
              executive: null,
            }
            this.lists.push(newTask);
            this.dinamicList = '';
          }
        },
    }
})
app.mount("#padre")
