export default {
    template: `
    <div class="top-rect">
        <div class="top-rect-main" style="margin-right: 30px;" @click="btn">
<!--            <span style="color: white;">“</span>-->
            <p style="padding-left: 20px;color: white;">{{ yy.hitokoto }}</p>
<!--            <span style="color: white;">”</span>-->
            <p style="float: right;padding-top: 10px">-------{{yy.from}}</p>
        </div>
        <div class="top-rect-main" id="he-plugin-standard"></div>
    </div>`,
    data() {
        return {
            topRect: [],
            yy:[]
        }
    },
    methods: {
        btn() {
            axios({
                url:'https://v1.hitokoto.cn',
                method:'post'
            }).then((r)=>{
                this.yy = r.data
            })
        }
    },
    created() {
        api.post('?c=b&encode=json')
            .then((res) => {
                this.yy = res.data
            })

    }
}