import React from 'react';
import { useIonRouter } from "@ionic/react";
import { IonButton } from '@ionic/react';
import { Storage } from '@capacitor/storage';

const NextButton: React.VFC<{ season: 0 | 1, playerCount: number, month: number }> = (props) => {
    const router = useIonRouter();
    return (
        <IonButton expand="block" onClick={async () => {
            await Storage.set({ key: "season", value: String(props.season) });
            await Storage.set({ key: "playerCount", value: String(props.playerCount) });
            await Storage.set({ key: "month", value: String(props.month) });
            router.push(`/setup/${props.season}`);
        }}>
            Next
        </IonButton>
    );
}

export default NextButton;
