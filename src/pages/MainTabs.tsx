import React from 'react';
import { Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { globeOutline, settingsOutline, warningOutline } from 'ionicons/icons';
import EpidemicsTab from './EpidemicsTab';
import InfectionsTab from './InfectionsTab';
import SetupTab from './SetupTab';

import { Storage } from '@capacitor/storage';
import { Controller } from '../controller/controller';


const controller = new Controller();

class MainTabs extends React.Component<{}, { season: 0 | 1 }> {

    constructor(props: any) {
        super(props)
        this.state = { season: 0 };
        Storage.get({ key: "season" }).then((result) => {
            const season = Number(result.value) as (0 | 1);
            this.setState({ season: season });
        });
    }

    public render(): JSX.Element {
        return <IonTabs>
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
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="setup" href="/setup">
                    <IonIcon icon={settingsOutline} />
                    <IonLabel>Setup</IonLabel>
                </IonTabButton>
                <IonTabButton tab="epidemics" href="/epidemics">
                    <IonIcon icon={warningOutline} />
                    <IonLabel>{this.state.season === 0 ? "Escalations" : "Epidemics"}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="infections" href="/infections">
                    <IonIcon icon={globeOutline} />
                    <IonLabel>{this.state.season === 0 ? "Threats" : "Infections"}</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    }
}

export default MainTabs;
