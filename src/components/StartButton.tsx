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
    const asia: string[] = [];
    state.seasonZeroConfiguration.asiaThreatCards.forEach((city) => {
        asia.push(city.getName());
    });
    const northAmerica: string[] = [];
    state.seasonZeroConfiguration.northAmericaThreatCards.forEach((city) => {
        northAmerica.push(city.getName());
    });
    let modifier = 0;
    if (state.season === 0) {
        // extra modifiers if the satellite cards are inserted into the deck
        if (state.month === 7) {
            modifier = 3;
        } else if (state.month === 8) {
            modifier = 4;
        } else if (state.month >= 9) {
            modifier = 5;
        }
        modifier = modifier - state.objectiveCards
    }
    return {
        season: state.season,
        playerCount: state.playerCount,
        month: state.month,
        eventCards: state.eventCards,
        epidemicCards: state.epidemicCards,
        modifier: modifier,
        seasonZeroConfiguration: {
            africaThreatCards: africa,
            southAmericaThreatCards: southAmerica,
            europeThreatCards: europe,
            asiaThreatCards: asia,
            northAmericaThreatCards: northAmerica
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
