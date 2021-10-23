import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EpidemicsContainer from '../components/EpidemicsContainer';
import { ControllerProps } from "../controller/controller";

const EpidemicsTab: React.FC<ControllerProps> = ({ controller }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{controller.getSeason() === 0 ? "Escalations" : "Epidemics"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{controller.getSeason() === 0 ? "Escalations" : "Epidemics"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EpidemicsContainer controller={controller}/>
      </IonContent>
    </IonPage>
  );
};

export default EpidemicsTab;
