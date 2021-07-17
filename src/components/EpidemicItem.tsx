import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { checkmarkCircleOutline, closeOutline } from 'ionicons/icons';

export default class EpidemicItem extends React.Component<{ drawn: boolean, position: number }> {

    constructor(props: { drawn: boolean, position: number }) {
        super(props)
    }
  
    public render() {
        return <IonItem key={this.props.position}>
            <IonIcon icon={this.props.drawn ? checkmarkCircleOutline : closeOutline} slot="end" />
            <IonLabel>Epidemic {this.props.position}</IonLabel>
        </IonItem>
    }
}
