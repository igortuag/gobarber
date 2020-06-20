import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
