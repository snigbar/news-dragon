import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";



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
        }
      ]
    },
    {
      path: "/home",
      element: <Main></Main>,
      loader:() => fetch("http://localhost:5000/categories/0"),
      children:[
        {
            path:"/home",
            element:<Home></Home>,
            
        },
        {
            path:"/home/categories/:id",
            element:<Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      loader:() => fetch("http://localhost:5000/categories/0"),
      children: [
        {
          path: ':id',
          element:<News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);


  export default router;
