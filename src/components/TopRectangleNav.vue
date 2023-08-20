<!--
 * @Author: Firstsnow Lucky firstsnow1119@163.com
 * @Date: 2023-08-20 23:17:07
 * @LastEditors: Firstsnow Lucky firstsnow1119@163.com
 * @LastEditTime: 2023-08-20 23:56:56
 * @FilePath: \个人主页\src\components\TopRectangle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="top-rect">
        <div class="top-rect-main" style="margin-right: 30px;">
            <div>
                <p></p>
            </div>
        </div>
        <div class="top-rect-main">
            <div>
                <p></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            topRect: []
        }
    }
}
</script>
<style scoped>
.top-rect {
    display: flex;
}

.top-rect-main {
    width: 350px;
    height: 150px;
    margin-bottom: 20px;
    background-color: #ccc;
    opacity: 0.7;
}
</style>