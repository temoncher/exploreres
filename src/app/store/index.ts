import { StateName } from '../enums/state-name.enum';

import { MapState, MapStateModel } from './map/map.state';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApplicationStateModel {
  [StateName.MAP]: MapStateModel;
}

export const ApplicationStates = [MapState];
