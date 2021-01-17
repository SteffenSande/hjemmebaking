import React from "react";
import {ThemeProvider, CSSReset} from '@chakra-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";

//ts-ignore
import "firebase/analytics";
//ts-ignore
import "firebase/auth";
//ts-ignore
import "firebase/firestore";
//ts-ignore
import "firebase/storage";

import Oppskrift from "./Oppskrift";
import Oppskrifter from "./Oversikt/Oppskrifter";


function App() {
    const [config, setConfig] = React.useState<Object>();
    const appId = "1:694867289559:web:698949de787d2581ec5792";

    React.useEffect(() => {
        fetch("/__/firebase/init.json")
            .then((res) => res.json())
            .then((c) => {
                setConfig({...c, appId: appId});
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
