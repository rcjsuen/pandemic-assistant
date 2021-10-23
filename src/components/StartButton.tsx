import React from 'react';
import { useIonRouter } from "@ionic/react";
import { IonButton } from '@ionic/react';
import { Storage } from '@capacitor/storage';
import { GameConfiguration } from '../pages/SeasonSetupPage';

const StartButton: React.FC<{ config: GameConfiguration }> = (props) => {
    const router = useIonRouter();
    return (
        <IonButton expand="block" onClick={async () => {
            await Storage.set({ key: "setup", value: JSON.stringify(props.config) });
            router.push("/epidemics");
        }}>
            Start
        </IonButton>
    );
}

export default StartButton;
