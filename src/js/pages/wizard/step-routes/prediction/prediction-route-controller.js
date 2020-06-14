import WizardRouteControllerFactory
  from '../../../../controllers/wizard/wizard-route-controller-factory';
import {stepsIds} from '../../dancing-registration/dancing-registration-route-controller';

export default new WizardRouteControllerFactory(stepsIds.prediction);
