import Home from './Components/Pages/Home/Home'
import Blog from './Components/Pages/Blog/Blog'
import Us from './Components/Pages/Us/Us'
import Notfound from './Components/Pages/NotFound/Notfound'
import { createBrowserRouter ,RouterProvider  } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import 'tailwindcss'
import Articles from './Components/Pages/Articles/Articles'
import ArticleDetails from './Components/Pages/Articles/ArticleDetails'
import { post } from './Components/Pages/Blog/Blog'


const routers = createBrowserRouter([
{ path : "" ,element : <Layout/> , 
  children : [
    {index : true , element : <Home/>},
    {path : "Home" , element :  <Home/>},
    {path : "Blog" , element :  <Blog/>},
    {path : "Us" , element :  <Us/>},
    {path : "*" , element :  <Notfound/>},
   { path:"/articles", element : <Articles post={post}  />},
   { path:"/Blog/:slug", element: <ArticleDetails post={post} />},
  ]


}

])
export default function App() {

  return (
    <>
<div className=' bg-blue-950 '> 
  <RouterProvider router = {routers}></RouterProvider>
  
  </div>
 
  </>
  )
}
