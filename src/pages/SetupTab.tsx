import React from 'react';
import { IonGrid, IonCol, IonRow, IonList, IonLabel, IonInput, IonItem, IonSelect, IonSelectOption, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ControllerProps } from "../controller/controller";

class SetupTab extends React.Component<ControllerProps, { season: 0 | 1, playerCount: number, eventCards: number, epidemicCards: number, objectiveCards: number }> {

    constructor(props: ControllerProps) {
        super(props)
        this.state = { season: 0, playerCount: 2, eventCards: 4, epidemicCards: 5, objectiveCards: 0 };
    }

    private getDangerCardText(): string {
        return this.state.season === 0 ? "Threat Cards" : "Epidemic Cards";
    }

    public render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Pandemic Assistant</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Pandemic Assistant</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonList>
                        <IonItem>
                            <IonLabel>Season</IonLabel>
                            <IonSelect value={String(this.state.season)} interface="popover" onIonChange={e => {
                                this.setState({ season: Number(e.detail.value) as any });
                            }}>
                                <IonSelectOption value="0">0</IonSelectOption>
                                <IonSelectOption value="1">1</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Player Count</IonLabel>
                            <IonSelect value={String(this.state.playerCount)} interface="popover" onIonChange={e => {
                                this.setState({ playerCount: Number(e.detail.value) });
                            }}>
                                <IonSelectOption value="1">1</IonSelectOption>
                                <IonSelectOption value="2">2</IonSelectOption>
                                <IonSelectOption value="3">3</IonSelectOption>
                                <IonSelectOption value="4">4</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Event Cards</IonLabel>
                            <IonSelect value={String(this.state.eventCards)} interface="popover" onIonChange={e => {
                                this.setState({ eventCards: Number(e.detail.value) });
                            }}>
                                <IonSelectOption value="0">0</IonSelectOption>
                                <IonSelectOption value="1">1</IonSelectOption>
                                <IonSelectOption value="2">2</IonSelectOption>
                                <IonSelectOption value="3">3</IonSelectOption>
                                <IonSelectOption value="4">4</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="6">6</IonSelectOption>
                                <IonSelectOption value="7">7</IonSelectOption>
                                <IonSelectOption value="8">8</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        {this.state.season === 0 &&
                            <IonItem>
                                <IonLabel>Objective Cards</IonLabel>
                            <IonInput type="number" value={this.state.objectiveCards} placeholder="Enter Number" min="0" onIonChange={e => this.setState({ objectiveCards: Number(e.detail.value) })}></IonInput>
                            </IonItem>
                        }
                        <IonItem>
                            <IonLabel>{this.getDangerCardText()}</IonLabel>
                            <IonSelect value={String(this.state.epidemicCards)} interface="popover" onIonChange={e => {
                                this.setState({ epidemicCards: Number(e.detail.value) });
                            }}>
                                <IonSelectOption value="4">4</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="6">6</IonSelectOption>
                                <IonSelectOption value="7">7</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol></IonCol>
                                <IonCol>
                                    <IonButton expand="block" onClick={() => {
                                        this.props.controller.setup(this.state.season, this.state.playerCount, this.state.eventCards, this.state.epidemicCards, this.state.objectiveCards);
                                    }}>
                                        Setup
                                    </IonButton>
                                </IonCol>
                                <IonCol></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
}

export default SetupTab;
