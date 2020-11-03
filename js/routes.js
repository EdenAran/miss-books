import bookApp from './pages/book-app.cmp.js'
import bookDetail from './pages/book-detail.cmp.js'
import homePage from './pages/home.cmp.js'
import aboutPage from './pages/about.cmp.js'
import aboutBooks from './pages/about-books.cmp.js'
import aboutMe from './pages/about-me.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,
        children: [
            {
                path: 'books',
                component: aboutBooks
            },
            {
                path: 'me',
                component: aboutMe
            }
        ]
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetail
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })