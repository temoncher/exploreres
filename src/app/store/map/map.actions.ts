import { StateName } from '@/enums/state-name.enum';
import { Placement } from '@/models/placement.interface';

export namespace MapActions {
  const mapActionsPrefix = StateName.MAP.toUpperCase();

  export class AddPlacement {
    static readonly type = `[${mapActionsPrefix}] Add placement`;
    constructor(public placement: Placement) {}
  }
}
