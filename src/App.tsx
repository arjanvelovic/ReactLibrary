import { HashRouter, Routes, Route} from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0.config';
import Footer from './components/Footer';



function App() {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <HashRouter>
        <div id="page-container" className='bg-slate-50'>
          <div id="content-wrap">
            <Navbar/>
              <Routes>
                { routes.map((route: any, index: any) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <route.component />
                    }
                  />
                )) }
              </Routes>
              </div>
            <Footer/>
        </div>
      </HashRouter>
    </Auth0Provider>
  );
}

export default App;