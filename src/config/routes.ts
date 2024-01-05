import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Books from '../pages/Books'
import BookDetails from '../components/BookDetails'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/cart",
      component: Cart,
      name: "Cart",
    },
    {
      path: "/books",
      component: Books,
      name: "Books",
    },
    {
        path: "/about/:bookId",
        component: BookDetails,
        name: "BookDetails",
      }
];

export default routes