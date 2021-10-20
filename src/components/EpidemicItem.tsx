import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { checkmarkCircleOutline, closeOutline } from 'ionicons/icons';

export default class EpidemicItem extends React.Component<{ label: string, drawn: boolean, position: number }> {

    constructor(props: { label: string, drawn: boolean, position: number }) {
        super(props)
    }
  
    public render() {
        return <IonItem key={this.props.position}>
            <IonIcon icon={this.props.drawn ? checkmarkCircleOutline : closeOutline} slot="end" />
            <IonLabel>{this.props.label} {this.props.position}</IonLabel>
        </IonItem>
    }
}
