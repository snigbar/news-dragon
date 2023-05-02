import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/categories/:id",
            element:<Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element:<News></News>
        }
      ]
    }
  ]);


  export default router;