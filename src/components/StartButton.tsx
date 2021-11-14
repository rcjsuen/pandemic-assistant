import React from 'react';
import { useIonRouter } from "@ionic/react";
import { IonButton } from '@ionic/react';
import { Storage } from '@capacitor/storage';
import { GameConfiguration, SeasonSetupState } from '../pages/SeasonSetupPage';

function serialize(state: SeasonSetupState): GameConfiguration {
    const africa: string[] = [];
    state.seasonZeroConfiguration.africaThreatCards.forEach((city) => {
        africa.push(city.getName());
    });
    const southAmerica: string[] = [];
    state.seasonZeroConfiguration.southAmericaThreatCards.forEach((city) => {
        southAmerica.push(city.getName());
    });
    const europe: string[] = [];
    state.seasonZeroConfiguration.europeThreatCards.forEach((city) => {
        europe.push(city.getName());
    });
    return {
        season: state.season,
        playerCount: state.playerCount,
        month: state.month,
        eventCards: state.eventCards,
        epidemicCards: state.epidemicCards,
        objectiveCards: state.objectiveCards,
        seasonZeroConfiguration: {
            africaThreatCards: africa,
            southAmericaThreatCards: southAmerica,
            europeThreatCards: europe
        }
    };
}

const StartButton: React.VFC<{ config: SeasonSetupState }> = (props) => {
    const router = useIonRouter();
    return (
        <IonButton expand="block" onClick={async () => {
            await Storage.set({ key: "initialized", value: "false" });
            await Storage.set({ key: "setup", value: JSON.stringify(serialize(props.config)) });
            router.push("/epidemics");
        }}>
            Start
        </IonButton>
    );
}

export default StartButton;
