import React from "react";
import {ThemeProvider, CSSReset} from '@chakra-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Oppskrift from "./Oppskrift";
import Oppskrifter from "./Oversikt/Oppskrifter";

function App() {
    const [config, setConfig] = React.useState<Object>();

    React.useEffect(() => {
        fetch("/__/firebase/init.json")
            .then((res) => res.json())
            .then((c) => {
                setConfig(c);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (config && !firebase.apps.length) {
        firebase.initializeApp(config);
        firebase.analytics();
    }

    if (!firebase.apps.length) {
        return null;
    }

    return (
        <ThemeProvider>
            <CSSReset />
                <Router>
                    <Switch>
                        <Route path="/:oppskrift">
                            <Oppskrift />
                        </Route>
                        <Route>
                            <Oppskrifter />
                        </Route>
                    </Switch>
                </Router>
        </ThemeProvider>
    );
}

export default App;
