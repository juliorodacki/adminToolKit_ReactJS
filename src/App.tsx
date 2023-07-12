import useRouteElements from './routes/useRouteElements';
import './scss/app.scss';
function App() {
    const routeElements = useRouteElements();
    return <div id='app'>{routeElements}</div>;
}

export default App;
