import { actionsEnums } from '../common/actionsEnums';


export const organizationUpdated = (newOrganization: string) => {
  return {
    type: actionsEnums.UPDATE_ORGANIZATION,
    payload: newOrganization
  }
}

