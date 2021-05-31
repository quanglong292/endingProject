import Nav from "./pages/main/nav";
import "../src/assets/style/index.scss";
import TixCarousel from "./pages/main/carousel";
import MovieSlider from "./pages/main/movieslider";
import {BrowserRouter, Switch} from 'react-router-dom';
import TimeLine from "./pages/main/timeline";
import Playground from "./playground";
import { adminRouter, mainRouter, userRouter } from "./config/router";
import RouterMainTemplate from "./templates/main";
import RouterLoginTemplate from "./templates/login/index";
import RouterAdminTemplate from "./templates/admin";
// import { Carousel } from 'bootstrap';
const renderMainTemplate = () => {
  return mainRouter.map(({path, exact, Component}) => {
    return (
      <RouterMainTemplate path={path} exact={exact} Component={Component}/>
    )
  })  
}

const renderAdminTemplate = () => {
  return adminRouter.map(({path, exact, Component}) => {
    return (
      <RouterAdminTemplate path={path} exact={exact} Component={Component}/>
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
        {renderAdminTemplate()}
      </Switch>
    </BrowserRouter>
    </>  
  );
}

export default App;
