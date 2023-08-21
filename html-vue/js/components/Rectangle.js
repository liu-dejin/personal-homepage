export default {
    template: `
    <div class="main">
        <div class="main-top" v-for="(item, index) in pd" :key="index">
            <div class="main-top-n">
                <a :href='item.hrefs' target="_blank">
                    <span v-html="item.svgs"></span>
                    <span class="ptl">{{ item.title }}</span>
                </a>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            pd: [
                {
                    title: '博客',
                    hrefs: 'https://kfl.kfirstsnowlucky.cn',
                    svgs: '<svg t="1692581454278" class="icon" "width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4124" ><path d="M863.418182 698.181818c-13.963636 0-23.272727 9.309091-23.272727 23.272727v186.181819c0 39.563636-25.6 69.818182-69.818182 69.818181H134.981818c-41.890909 0-86.109091-30.254545-86.109091-69.818181V114.036364C48.872727 74.472727 93.090909 46.545455 134.981818 46.545455h635.345455c44.218182 0 69.818182 30.254545 69.818182 69.818181v325.818182c0 13.963636 9.309091 23.272727 23.272727 23.272727s23.272727-9.309091 23.272727-23.272727V116.363636c0-65.163636-46.545455-116.363636-116.363636-116.363636H134.981818C69.818182 0 2.327273 46.545455 2.327273 114.036364V907.636364c0 69.818182 69.818182 116.363636 132.654545 116.363636h635.345455c69.818182 0 116.363636-51.2 116.363636-116.363636v-186.181819c0-13.963636-11.636364-23.272727-23.272727-23.272727z m153.6-260.654545c-9.309091-9.309091-23.272727-9.309091-32.581818 0L512 889.018182c-9.309091 9.309091-9.309091 23.272727 0 32.581818 9.309091 9.309091 23.272727 9.309091 32.581818 0l472.436364-451.490909c6.981818-6.981818 6.981818-23.272727 0-32.581818zM630.690909 302.545455h-372.363636c-13.963636 0-23.272727 9.309091-23.272728 23.272727s9.309091 23.272727 23.272728 23.272727h372.363636c13.963636 0 23.272727-9.309091 23.272727-23.272727s-11.636364-23.272727-23.272727-23.272727z m0 232.727272h-372.363636c-13.963636 0-23.272727 9.309091-23.272728 23.272728s9.309091 23.272727 23.272728 23.272727h372.363636c13.963636 0 23.272727-9.309091 23.272727-23.272727s-11.636364-23.272727-23.272727-23.272728z" fill="#666666" p-id="4125"></path></svg>'
                },
                {
                    title: '后台管理',
                    hrefs: '',
                    svgs: '<svg t="1692580447384" class="icon "width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1477" ><path d="M927.5392 770.5088H100.9664a30.72 30.72 0 0 1-30.72-30.72V143.36a30.72 30.72 0 0 1 30.72-30.72h826.5728a30.72 30.72 0 0 1 30.72 30.72v596.4288a30.72 30.72 0 0 1-30.72 30.72z m-795.8528-61.44h765.1328V174.08H131.6864z" fill="#2c2c2c" p-id="1478"></path><path d="M459.21792 510.22336l94.47936-167.73632 53.5296 30.15168-94.47424 167.7312zM364.6464 551.8336L252.0576 442.624l109.3632-111.0528 43.776 43.1104-65.9456 66.9184 68.1984 66.0992-42.8032 44.1344zM701.184 551.8336l-42.8032-44.1344 68.1984-66.0992-65.9456-66.9184 43.776-43.1104 109.3632 111.0528-112.5888 109.2096z" fill="#2c2c2c" p-id="1479"></path><path d="M741.7344 908.7488H281.6a30.72 30.72 0 1 1 0-61.44h460.0832a30.72 30.72 0 0 1 0 61.44z" fill="#2c2c2c" p-id="1480"></path></svg>'

                },
                {
                    title: '关于',
                    hrefs: '',
                    svgs: '<svg t="1692581835427" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6864" width="30px" height="30px"><path d="M512 1024C229.376 1024 0 794.624 0 512S229.376 0 512 0s512 229.376 512 512-229.376 512-512 512z m0-949.248C271.36 74.752 75.776 271.36 75.776 512S271.36 949.248 512 949.248 949.248 752.64 949.248 512 752.64 74.752 512 74.752z m0 753.664a45.44 45.44 0 0 1-45.056-45.056V444.416c0-25.6 20.48-45.056 45.056-45.056s45.056 19.456 45.056 45.056V783.36A45.44 45.44 0 0 1 512 828.416z m0-474.112c-24.576 0-45.056-20.48-45.056-46.08V240.64c0-24.576 20.48-45.056 45.056-45.056s45.056 20.48 45.056 45.056v67.584c0 25.6-20.48 46.08-45.056 46.08z" p-id="6865"></path></svg>'

                },
                {
                    title: 'Github',
                    hrefs: '',
                    svgs: '<svg t="1692581913638" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8724" width="30px" height="30px"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#231F20" p-id="8725"></path></svg>'

                },
                {
                    title: '云盘',
                    hrefs: '',
                    svgs: '<svg t="1692582088252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11109" width="30px" height="30px"><path d="M746.666667 725.333333c59.733333-12.8 106.666667-64 106.666666-128 0-72.533333-55.466667-128-128-128-17.066667 0-29.866667 4.266667-42.666666 8.533334V469.333333c0-93.866667-76.8-170.666667-170.666667-170.666666s-170.666667 76.8-170.666667 170.666666c0 17.066667 4.266667 29.866667 4.266667 46.933334-8.533333-4.266667-17.066667-4.266667-25.6-4.266667C260.266667 512 213.333333 558.933333 213.333333 618.666667S260.266667 725.333333 320 725.333333h426.666667z m0 85.333334h-426.666667C213.333333 810.666667 128 725.333333 128 618.666667c0-85.333333 55.466667-157.866667 128-183.466667C273.066667 311.466667 379.733333 213.333333 512 213.333333c110.933333 0 209.066667 72.533333 243.2 170.666667 102.4 12.8 183.466667 102.4 183.466667 213.333333s-85.333333 200.533333-192 213.333334z" fill="#444444" p-id="11110"></path></svg>'

                },
                {
                    title: '源码',
                    hrefs: '',
                    svgs: '<svg t="1692582037499" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10083" width="30px" height="30px"><path d="M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334z m-42.666667 42.666667H256v512h512V256z" fill="#2c2c2c" p-id="10084"></path><path d="M810.666667 341.333333v42.666667H234.666667V341.333333zM528.554667 439.125333l41.045333 11.605334-74.154667 262.144-41.045333-11.605334zM411.690667 454.229333l30.165333 30.208-91.690667 91.648 91.690667 91.690667-30.165333 30.165333-121.856-121.856zM627.498667 454.229333l-30.165334 30.208 91.690667 91.648L597.333333 667.776l30.165334 30.165333 121.856-121.856z" fill="#2c2c2c" p-id="10085"></path></svg>'

                }
            ]
        }
    }
}