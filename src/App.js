
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePage from "./pages/createPage/CreatePage";
import PostPage from "./pages/postPage/PostPage";

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route index element={<CreatePage/>} />
         <Route path='/kaif' element={<PostPage/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
