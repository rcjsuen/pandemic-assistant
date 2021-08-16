import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import { City, getColorS1, toFlag, toString } from '../service/city';

export interface CityItemProps {
    city: City
    onClick: React.MouseEventHandler | undefined
}

const CityItem: React.FC<CityItemProps> = ({city, onClick}) => {
    return (
        <IonItem button={onClick !== undefined} onClick={onClick}>
            <IonLabel>{toFlag(city)} {toString(city)}</IonLabel>
            <IonIcon icon={ellipse} color={getColorS1(city)} slot="end"/>
        </IonItem>
    );
};

export default CityItem;
