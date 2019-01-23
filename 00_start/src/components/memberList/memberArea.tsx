import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (string) => any;
}

interface State{
  organization: string;
}

export class MemberAreaComponent extends React.Component <Props, State> {
  constructor (props) {
    super(props);
}

  state = {organization: 'lemoncode'}
  

  render(){
    return (
      <div>
          <MemberTableComponent members={this.props.members}/>
          <br/>
          <input
                type="text"
                value={this.state.organization}
              />
          <input type="submit"
                  value="load"
                  className="btn btn-default"
                  onClick={() => this.props.loadMembers(this.state.organization)}
          />
      </div>
      );
  } 
  
}
