import router from "./router.js";
const {createApp} = Vue;

const app = createApp({
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
        console.log("%c为天地立心，\n为生命立命，\n为往圣继绝学，\n为万世开太平", "line-height:22px;color:#00a5f2")
    }
})

app.use(router)
app.mount('#app')