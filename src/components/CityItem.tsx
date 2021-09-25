import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import { City, getColorS0, getColorS1, toFlag, toString } from '../service/city';

export interface CityItemProps {
    season: number
    city: City
    onClick: React.MouseEventHandler | undefined
}

const CityItem: React.FC<CityItemProps> = ({season, city, onClick}) => {
    return (
        <IonItem button={onClick !== undefined} onClick={onClick}>
            <IonLabel>{toFlag(city)} {toString(city)}</IonLabel>
            <IonIcon icon={ellipse} color={season === 0 ? getColorS0(city) : getColorS1(city)} slot="end"/>
        </IonItem>
    );
};

export default CityItem;
