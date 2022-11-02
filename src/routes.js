import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import { ProdutoProvider } from "./common/context/produto";
import { AuthProvider } from "./common/context/auth";
import ProdutoAdm from "./pages/ProdutoVendedor";
import VerCategoria from "./pages/VerCategoria";
import AddProduto from "./pages/AddProduto";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import SobreEmpresa from "./components/SobreEmpresa";
import Footer from "./components/Footer";
import BuscaProduto from "./components/BuscaProduto";
import EditProduto from "./pages/EditProduto";
import { createBrowserHistory } from 'history'
import { AuthContext } from './common/context/auth'

const history = createBrowserHistory();


function PrivateRoute({ children }) {
    const { isLogged } = useContext(AuthContext);
    return isLogged ? children : <Navigate to="/login" />;
}  

function Router() {
    return (
        <BrowserRouter history={history}>
            <GlobalStyle />
            <ProdutoProvider>
            <AuthProvider> 
            <Header/>              
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/produto" element={<Produto />} />
                    <Route path="/login" element={<Login />} />                    
                    <Route path="/produtos/cat" element={<VerCategoria />} />
                    <Route path="/search" element={<BuscaProduto/>} />

                    <Route path="/produto/add" element={ <PrivateRoute> <AddProduto /> </PrivateRoute>  } />
                    <Route path="/produto/edit" element={ <PrivateRoute> <EditProduto /> </PrivateRoute> } />
                    <Route path="/produto/home" element={ <PrivateRoute> <ProdutoAdm /> </PrivateRoute> } />
                </Routes> 
                </AuthProvider>
            </ProdutoProvider>
            <SobreEmpresa/>
            <Footer/>                   
        </BrowserRouter >
    );
}

export default Router;
