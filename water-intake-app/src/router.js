import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
   
    { path: 'register', element:<Register/>}
]);

export default router;