import 'babel-polyfill';
import feeble from 'feeble';
import router from 'feeble-router';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import models from './models';
import './index.css';

const app = feeble();

app.model(...models);

app.use(router);

app.router(routes);

export default app;
