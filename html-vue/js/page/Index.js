import Rectangle from '../components/Rectangle.js';
import HomeLeft from '../components/HomeLeft.js'
import TopRectangleNav from '../components/TopRectangleNav.js';

export default {
    template: `
         <div class="main-home">
    <div class="main-home-left">
      <HomeLeft></HomeLeft>
    </div>
    <div class="main-home-right">
        <TopRectangleNav></TopRectangleNav>
      <Rectangle></Rectangle>
    </div>
  </div>
      <footer>
        <div class="power">
                <span id="power">Copyright&nbsp;©
                    <script>
                        document.write((new Date()).getFullYear());
                    </script>2023
                    <a href="/blog" id="power-text">金花儿 </a>
                </span>
            站点备案
            <a href="https://beian.miit.gov.cn" id="beian" target="_blank">&amp;&nbsp;陕ICP备2023000669号-1</a>
        </div>
    </footer>
    `,
    data() {
        return {}
    },
    components: {
        Rectangle,
        HomeLeft,
        TopRectangleNav
    }
}