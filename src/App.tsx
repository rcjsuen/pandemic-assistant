import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { globeOutline, settingsOutline, warningOutline } from 'ionicons/icons';
import EpidemicsTab from './pages/EpidemicsTab';
import InfectionsTab from './pages/InfectionsTab';
import SetupTab from './pages/SetupTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Controller } from './controller/controller';

const controller = new Controller();

class App extends React.Component {

    public render(): JSX.Element {
        return <IonApp>
            <IonReactHashRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/setup">
                            <SetupTab controller={controller} />
                        </Route>
                        <Route exact path="/epidemics">
                            <EpidemicsTab controller={controller} />
                        </Route>
                        <Route exact path="/infections">
                            <InfectionsTab controller={controller} />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/setup" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="setup" href="/setup">
                            <IonIcon icon={settingsOutline} />
                            <IonLabel>Setup</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="epidemics" href="/epidemics">
                            <IonIcon icon={warningOutline} />
                            <IonLabel>Epidemics / Incidents</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="infections" href="/infections">
                            <IonIcon icon={globeOutline} />
                            <IonLabel>Infections / Threats</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactHashRouter>
        </IonApp>
    }
}

export default App;
