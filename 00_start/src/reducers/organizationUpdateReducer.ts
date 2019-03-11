import {actionsEnums} from '../common/actionsEnums';

export interface organizationState {
  organization: string
}

const defaultUserState = () =>  ({
 organization: 'lemoncode'
});

export const organizationUpdateReducer  =  (state = defaultUserState (), action) => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORGANIZATION:
      return handleOrganizationUpdateAction(state, action.payload);
  }

  return state;
};

const handleOrganizationUpdateAction = (state : organizationState, organization) => ({
  ...state,
  organization: organization
});
