import React from 'react';
import { IonGrid, IonCol, IonRow, IonList, IonLabel, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import NextButton from '../components/NextButton';

class SetupPage extends React.Component<RouteComponentProps, { season: 0 | 1, month: number, playerCount: number }> {

    constructor(props: RouteComponentProps) {
        super(props)
        this.state = { season: 0, month: 1, playerCount: 2 };
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
                                <IonSelectOption value="2">2</IonSelectOption>
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
                            <IonLabel>Month</IonLabel>
                            <IonSelect value={String(this.state.month)} interface="popover" onIonChange={e => {
                                this.setState({ month: Number(e.detail.value) });
                            }}>
                                <IonSelectOption value="0">Prologue</IonSelectOption>
                                <IonSelectOption value="1">January</IonSelectOption>
                                <IonSelectOption value="2">February</IonSelectOption>
                                <IonSelectOption value="3">March</IonSelectOption>
                                <IonSelectOption value="4">April</IonSelectOption>
                                <IonSelectOption value="5">May</IonSelectOption>
                                <IonSelectOption value="6">June</IonSelectOption>
                                <IonSelectOption value="7">July</IonSelectOption>
                                <IonSelectOption value="8">August</IonSelectOption>
                                <IonSelectOption value="9">September</IonSelectOption>
                                <IonSelectOption value="10">October</IonSelectOption>
                                <IonSelectOption value="11">November</IonSelectOption>
                                <IonSelectOption value="12">December</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol></IonCol>
                                <IonCol>
                                    <NextButton season={this.state.season} playerCount={this.state.playerCount} month={this.state.month} />
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

export default SetupPage;
