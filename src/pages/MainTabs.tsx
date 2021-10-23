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
import { globeOutline, warningOutline } from 'ionicons/icons';
import EpidemicsTab from './EpidemicsTab';
import InfectionsTab from './InfectionsTab';

import { Storage } from '@capacitor/storage';
import { Controller } from '../controller/controller';
import { GameConfiguration } from './SeasonSetupPage';


const controller = new Controller();

class MainTabs extends React.Component<{}, { season: 0 | 1 }> {

    constructor(props: any) {
        super(props)
        this.state = { season: 0 };
        Storage.get({ key: "setup" }).then((result) => {
            const state: GameConfiguration = JSON.parse(result.value as any) as any;
            controller.setup(state.season,
                state.month,
                state.playerCount,
                state.eventCards,
                state.epidemicCards,
                state.objectiveCards,
                state.seasonZeroConfiguration
            )
        });
    }

    public render(): JSX.Element {
        return <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/epidemics">
                    <EpidemicsTab controller={controller} />
                </Route>
                <Route exact path="/infections">
                    <InfectionsTab controller={controller} />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
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
