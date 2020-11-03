import appHeader from '../js/cmps/app-header.cmp.js'
import userMsg from '../js/cmps/user-msg.cmp.js'
import {myRouter} from './routes.js'



const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
            <app-header />
        <main>
            <router-view></router-view>
        </main>
        <user-msg />
    </section>
    `,
    components:{
        appHeader,
        userMsg
    }
}



const app = new Vue(options);

