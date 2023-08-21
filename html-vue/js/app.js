import router from "./router.js";

const {createApp} = Vue;

const app = createApp({
    data(){
        return{

        }
    },
    created(){
        console.log("%c路有多远，\n只有心知道，\n最美的旅程，\n是不断的经历，\n坚持走下去．\n我是iTab开发者,\n与您同行！", "line-height:22px;color:#00a5f2")
    }
})

app.use(router)
app.mount('#app')