import React from 'react';
import { IonActionSheet, IonGrid, IonCol, IonSelect, IonText, IonSelectOption, IonRow, IonList, IonItemDivider, IonItem, IonLabel, IonCheckbox, IonListHeader, IonIcon, IonButton, IonNote, useIonActionSheet } from '@ionic/react';
import { checkboxOutline, checkmarkCircleOutline, close, closeOutline, exitOutline, layersOutline } from 'ionicons/icons';
import './InfectionsContainer.css';
import { City, getColor, toString } from '../service/city';
import { Controller } from '../controller/controller';

class InfectionsContainer extends React.Component<{ controller: Controller }, { groups: City[][], discards: City[] }> {

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = {
            groups: this.props.controller.getCityGroups(),
            discards: this.props.controller.getDiscards()
        };
    }

    private updateState(): void {
        this.setState({
            groups: this.props.controller.getCityGroups(),
            discards: this.props.controller.getDiscards()
        });
    }
  
    public render() {
        return (
            <div>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonButton expand="block" onClick={() => {
                                this.props.controller.intensify();
                                this.updateState();
                            }} >
                                Intensify
                            </IonButton>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                <IonList>
                <IonItemDivider sticky>Discards</IonItemDivider>
                {this.state.discards.map((card, index) => {
                    return <IonItem key={index + 1}>
                        <IonLabel>{toString(card as City)}</IonLabel>
                    </IonItem>
                })}
                {this.state.groups.map((group, index) => {
                    return <div key={index}>
                        <IonItemDivider sticky>{index === 0 ? "Current Group" : `Group ${index + 1}`}</IonItemDivider>
                        {group.map((city, index) => {
                            return <IonItem key={index + 1} button onClick={() => { 
                                this.props.controller.drawInfectionDeck(city);
                                this.updateState();
                            }}>
                                <IonLabel>{toString(city as City)}</IonLabel>
                            </IonItem>
                        })}
                    </div>
                })}
                </IonList>
            </div>
        );
    }
}

export default InfectionsContainer;
