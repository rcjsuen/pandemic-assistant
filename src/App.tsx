import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import MainTabs from './pages/MainTabs';
import SetupPage from './pages/SetupPage';

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
import SeasonSetupPage from './pages/SeasonSetupPage';

class App extends React.Component {

    public render(): JSX.Element {
        return <IonApp>
            <IonReactHashRouter>
                <Route path="/" component={SetupPage} exact />
                <Route path="/setup/:id" component={SeasonSetupPage} exact />
                <Route path="/epidemics" component={MainTabs} exact />
                <Route path="/infections" component={MainTabs} exact />
            </IonReactHashRouter>
        </IonApp>
    }
}

export default App;
