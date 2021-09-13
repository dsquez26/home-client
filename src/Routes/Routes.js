import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from '../Pages/AboutPage/AboutPage';
import CareersPage from '../Pages/CareersPage/CareersPage';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ServicesPage from '../Pages/ServicesPage/ServicesPage';

function Routes () {
    return (
      
            <Switch>
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Home" component={HomePage} />
                <Route exact path="/services" component={ServicesPage} />
                <Route exact path="/careers" component={CareersPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/login" component={LoginPage} /> 
            </Switch>
       
       
    )
}

export default Routes