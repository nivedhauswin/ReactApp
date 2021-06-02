import AppServer from './AppServer';
import ReactController from './Controllers/ReactController'

const app = new AppServer(
    [
        new ReactController()
    ],
);

app.listen(8081)