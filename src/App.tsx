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
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, globeOutline, triangle, warningOutline } from 'ionicons/icons';
import EpidemicsTab from './pages/EpidemicsTab';
import InfectionsTab from './pages/InfectionsTab';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/epidemics">
            <EpidemicsTab controller={controller} />
          </Route>
          <Route exact path="/infections">
            <InfectionsTab controller={controller} />
          </Route>
          <Route exact path="/">
            <Redirect to="/epidemics" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="epidemics" href="/epidemics">
            <IonIcon icon={warningOutline} />
            <IonLabel>Epidemics</IonLabel>
          </IonTabButton>
          <IonTabButton tab="infections" href="/infections">
            <IonIcon icon={globeOutline} />
            <IonLabel>Infections</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;