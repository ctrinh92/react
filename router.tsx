import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, ContactUsPage, DataDemo } from "./components";
import { HomePage } from "./components/home/index";
import { App } from "./app";
import { LoginPageContainer } from "./components/login/loginPageContainer";
import { RegisterPageContainer } from "./components/register/registerPageContainer";
import { FaqPageContainer } from "./components/Faq/faqContainer";

export const AppRouter: React.StatelessComponent<{}> = (props) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={RegisterPageContainer} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contactUs" component={ContactUsPage} />
                <Route path="/home/index" component={HomePage} />
                <Route path="/registerPage" component={RegisterPageContainer} />
                <Route path="/loginPage" component={LoginPageContainer} />
                <Route path="/dataDemo" component={DataDemo} />
                <Route path="/faqPage" component={FaqPageContainer} />
            </Route>
        </Router>
    );
}