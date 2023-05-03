import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../providers/PrivateRoute";
import Terms from "../pages/Terms/Terms";



const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'/',
          element:<Navigate to='/home'></Navigate>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/Terms',
          element:<Terms></Terms>
        }
      ]
    },
    {
      path: "/home",
      element: <Main></Main>,
      loader:() => fetch("https://news-dragon-server-snigbar.vercel.app/categories/0"),
      children:[
        {
            path:"/home",
            element:<Home></Home>,
            
        },
        {
            path:"/home/categories/:id",
            element:<Category></Category>,
            loader: ({params}) => fetch(`https://news-dragon-server-snigbar.vercel.app/categories/${params.id}`)
        }
      ]
    },
    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      loader:() => fetch("https://news-dragon-server-snigbar.vercel.app/categories/0"),
      children: [
        {
          path: ':id',
          element:<PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`https://news-dragon-server-snigbar.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);


  export default router;
