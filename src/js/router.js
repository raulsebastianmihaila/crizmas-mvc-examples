import Router from 'crizmas-router';

import NotFoundPage from './pages/not-found/not-found-page';
import HomePage from './pages/home/home-page';
import Mvc from './pages/mvc/mvc';
import MvcRouteController from './pages/mvc/mvc-route-controller';
import PendingState from './pages/pending-state/pending-state';
import PendingRouteController from './pages/pending-state/pending-route-controller';
import SimpleForm from './pages/simple-form/simple-form';
import SimpleFormRouteController from './pages/simple-form/simple-form-route-controller';
import FormWithModel from './pages/form-with-model/form-with-model';
import FormWithModelRouteController from './pages/form-with-model/form-with-model-route-controller';
import AsyncValidation from './pages/async-validation/async-validation';
import AsyncValidationRouteController
  from './pages/async-validation/async-validation-route-controller';
import NestedRoutes from './pages/nested-routes/nested-routes';
import NestedRoutesRouteController from './pages/nested-routes/nested-routes-route-controller';
import ChildRoute from './pages/nested-routes/child-route';
import ChildRouteController from './pages/nested-routes/child-route-controller';
import DancingRegistrationRouteController
  from './pages/wizard/dancing-registration/dancing-registration-route-controller';
import DancingRegistration from './pages/wizard/dancing-registration/dancing-registration';
import DancingPreferencesRouteController
  from './pages/wizard/step-routes/dancing-preferences/dancing-preferences-route-controller';
import DancingPreferences from './pages/wizard/step-routes/dancing-preferences/dancing-preferences';
import PredictionRouteController
  from './pages/wizard/step-routes/prediction/prediction-route-controller';
import Prediction from './pages/wizard/step-routes/prediction/prediction';
import PersonalInformationRouteController
  from './pages/wizard/step-routes/personal-information/personal-information-route-controller';
import PersonalInformation
  from './pages/wizard/step-routes/personal-information/personal-information';
import SummaryRouteController from './pages/wizard/step-routes/summary/summary-route-controller';
import Summary from './pages/wizard/step-routes/summary/summary';
import ScrollVirtualizationRouteController
  from './pages/scroll-virtualization/scroll-virtualization-route-controller';
import ScrollVirtualization from './pages/scroll-virtualization/scroll-virtualization';

export default new Router({
  basePath: process.env.basePath,
  routes: [
    {
      controller: {
        onEnter({router}) {
          const path = router.url.searchParams.get('path');

          if (path) {
            router.transitionTo(`${path}${router.url.hash}`);
          }
        }
      },
      children: [
        {
          path: '*',
          component: NotFoundPage
        },
        {
          component: HomePage
        },
        {
          path: 'mvc',
          component: Mvc,
          controller: MvcRouteController
        },
        {
          path: 'pending-state',
          component: PendingState,
          controller: PendingRouteController
        },
        {
          path: 'simple-form',
          component: SimpleForm,
          controller: SimpleFormRouteController
        },
        {
          path: 'form-with-model',
          component: FormWithModel,
          controller: FormWithModelRouteController
        },
        {
          path: 'async-validation',
          component: AsyncValidation,
          controller: AsyncValidationRouteController
        },
        {
          path: 'nested-routes',
          component: NestedRoutes,
          controller: NestedRoutesRouteController,
          children: [
            {
              path: 'child-route',
              component: ChildRoute,
              controller: ChildRouteController
            }
          ]
        },
        {
          path: 'dancing-registration',
          component: DancingRegistration,
          controller: DancingRegistrationRouteController,
          children: [
            Router.fallbackRoute({
              path: '/',
              to: '/dancing-registration/dancing-preferences',
              replace: true
            }),
            {
              path: 'dancing-preferences',
              component: DancingPreferences,
              controller: DancingPreferencesRouteController
            },
            {
              path: 'prediction',
              component: Prediction,
              controller: PredictionRouteController
            },
            {
              path: 'personal-information',
              component: PersonalInformation,
              controller: PersonalInformationRouteController
            },
            {
              path: 'summary',
              component: Summary,
              controller: SummaryRouteController
            }
          ]
        },
        {
          path: 'scroll-virtualization',
          component: ScrollVirtualization,
          controller: ScrollVirtualizationRouteController
        }
      ]
    }
  ]
});
