export default {
    template:`
    <section class="about">
        <h2>My About Page</h2>
        <nav class="about-nav">
            <router-link to="/about/me">About Me</router-link>
            <router-link to="/about/books">About Books</router-link>
        </nav>
        <router-view></router-view>
    </section>
    `
}