import "./App.css";
import Nav from "./pages/main/nav";
import "../src/assets/style/index.scss";
import TixCarousel from "./pages/main/carousel";
import MovieSlider from "./pages/main/movieslider";
import {BrowserRouter, Switch} from 'react-router-dom';
import TimeLine from "./pages/main/timeline";
import Playground from "./playground";
import { mainRouter, userRouter } from "./config/router";
import RouterMainTemplate from "./templates/main";
import RouterLoginTemplate from "./templates/login/index";
// import { Carousel } from 'bootstrap';
const renderMainTemplate = () => {
  return mainRouter.map(({path, exact, Component}) => {
    return (
      <RouterMainTemplate path={path} exact={exact} Component={Component}/>
    )
  })  
}

const renderLoginTemplate = () => {
  return userRouter.map(({path, exact, Component}) => {
    return (
      <RouterLoginTemplate path={path} exact={exact} Component={Component}/>
    )
  })
}
function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        {renderMainTemplate()}
        {renderLoginTemplate()}
      </Switch>
    </BrowserRouter>
    </>  
  );
}

export default App;
