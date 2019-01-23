import { connect } from 'react-redux';
import { memberRequest } from '../../actions/memberRequest';
import { organizationUpdated } from '../../actions/organizationUpdate';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer,
      organization: state.organizationUpdateReducer.organization
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organization) => {return dispatch(memberRequest(organization))},
    onChange: (organization) => { return dispatch(organizationUpdated(organization))},
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
