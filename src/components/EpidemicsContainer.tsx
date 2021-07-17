import React from 'react';
import { IonActionSheet, IonGrid, IonCol, IonRow, IonList, IonItemDivider, IonItem, IonLabel, IonCheckbox, IonListHeader, IonIcon, IonButton, IonNote, useIonActionSheet } from '@ionic/react';
import { checkboxOutline, checkmarkCircleOutline, close, closeOutline } from 'ionicons/icons';
import './EpidemicsContainer.css';
import { Controller } from '../controller/controller';

class EpidemicsContainer extends React.Component<{ controller: Controller }, { showActionSheet: boolean }> {

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = { showActionSheet: false };
    }
  
    public render() {
        const showActionSheet = this.state.showActionSheet;
        let epidemics = this.props.controller.getEpidemicsDrawn();
        const minCards = this.props.controller.getMinRemainder();
        const maxCards = this.props.controller.getMaxRemainder();
        const minRounds = Math.ceil(minCards / 2);
        const maxRounds = Math.ceil(maxCards / 2);
        return (
            <IonList>
                <IonItem>
                    <IonLabel>Cards to Next Epidemic</IonLabel>
                    <IonNote slot="end" color="dark">{minCards === 0 && maxCards === 0 ? "0" : `${minCards}-${maxCards}`}</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Rounds to Next Epidemic</IonLabel>
                    <IonNote slot="end" color="dark">{minRounds === 0 && maxRounds === 0 ? "0" : `${minRounds}-${maxRounds}`}</IonNote>
                </IonItem>
                {epidemics.map((drawn, index) => {
                    return <IonItem key={index + 1}>
                        <IonIcon icon={drawn ? checkmarkCircleOutline : closeOutline} slot="end" />
                        <IonLabel>Epidemic {index + 1}</IonLabel>
                    </IonItem>
                })}
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonButton expand="block" onClick={() => { this.setState({showActionSheet: true}) }}>
                                Draw
                            </IonButton>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                <IonActionSheet
                  isOpen={showActionSheet}
                  onDidDismiss={() => { this.setState({ showActionSheet: false })}}
                  buttons={[
                    { text: "Player Card", handler: () => { this.props.controller.drawPlayerDeck(false) } },
                    { text: "Epidemic", handler: () => { this.props.controller.drawPlayerDeck(true) } },
                    { text: "Cancel", role: "cancel" }
                  ]}
                >
                </IonActionSheet>
            </IonList>
        );
    }
}

export default EpidemicsContainer;
