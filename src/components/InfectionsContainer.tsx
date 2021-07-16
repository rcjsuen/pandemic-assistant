import React, { useState } from 'react';
import { IonActionSheet, IonGrid, IonCol, IonSelect, IonText, IonSelectOption, IonRow, IonList, IonItemDivider, IonItem, IonLabel, IonCheckbox, IonListHeader, IonIcon, IonButton, IonNote, useIonActionSheet } from '@ionic/react';
import { checkboxOutline, checkmarkCircleOutline, close, closeOutline, exitOutline, layersOutline } from 'ionicons/icons';
import './InfectionsContainer.css';
import { City, getColor, toString } from '../service/city';
import { ellipse, globeOutline, triangle, warningOutline } from 'ionicons/icons';
import { Controller } from '../controller/controller';

interface ContainerProps {
    name: string;
}

class InfectionsContainer extends React.Component<{ controller: Controller }, { groups: City[][] }> {

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = { groups: this.props.controller.getCityGroups() };
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
                                this.setState({ groups: this.props.controller.getCityGroups() });
                            }} >
                                Intensify
                            </IonButton>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                <IonList class="ion-padding">
                {this.state.groups.map((group, index) => {
                    return <div key={index}>
                        <IonItemDivider sticky>{index === 0 ? "Current Group" : `Group ${index + 1}`}</IonItemDivider>
                        {group.map((city, index) => {
                            return <IonItem key={index + 1}>
                                <IonLabel>{toString(city as City)}</IonLabel>
                                <IonButton onClick={() => {
                                    this.props.controller.drawInfectionDeck(city);
                                    this.setState({ groups: this.props.controller.getCityGroups() });
                                }} slot="end">
                                    Draw
                                </IonButton>
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
