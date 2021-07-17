import { IonActionSheet, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EpidemicsContainer from '../components/EpidemicsContainer';
import './EpidemicsTab.css';
import { ControllerProps } from "../controller/controller";

const EpidemicsTab: React.FC<ControllerProps> = ({controller}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Epidemics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Epidemics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EpidemicsContainer controller={controller}/>
      </IonContent>
    </IonPage>
  );
};

export default EpidemicsTab;
