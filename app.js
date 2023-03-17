const app = Vue.createApp({
    //data, functions 
    //template: '<h2> I am the template </h2>'
    data(){
        return{
            showbooks: true,
            title: 'The Final Empire', 
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods:{
    //   changeTitle(title){
    //    //this.title = 'words of Randiance'
    //    this.title = title
    //   }   
      toggleShowBooks(){
        this.showBooks= !this.showbooks
      }
      }
})

app.mount('#app')