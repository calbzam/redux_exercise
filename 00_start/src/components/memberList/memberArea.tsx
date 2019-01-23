import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (string) => any;
  organization: string;
  onChange: (e) => void;
}


export class MemberAreaComponent extends React.Component <Props, {}> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
          <MemberTableComponent members={this.props.members}/>
          <br/>
          <input
                type="text"
                value={this.props.organization}
                onChange={(e) => this.props.onChange(e.target.value)}
              />
          <input type="submit"
                  value="load"
                  className="btn btn-default"
                  onClick={() => this.props.loadMembers(this.props.organization)}
          />
      </div>
      );
  } 
  
}
