import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/main.scss"
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(

        <Provider store={store}>
            <div className="overlay"></div>
            <Toaster
                position="top-left"
                reverseOrder={false}
            />
            <App />
        </Provider>
)
