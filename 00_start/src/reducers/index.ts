import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { organizationUpdateReducer , organizationState} from './organizationUpdateReducer';


export interface State {  
  memberReducer : memberState;
  organizationUpdateReducer: organizationState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  organizationUpdateReducer,
});
