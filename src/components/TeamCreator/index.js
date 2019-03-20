import React from 'react';
import { connect } from 'react-redux';

import TeamCreator from './TeamCreator';
import { addMember } from '../../actions/member';
import { getGroups } from '../../actions/group';

class TeamCreatorContainer extends React.Component {
  state = { groupMember: '' };

  onSubmit = e => {
    const { groupMember } = this.state;
    const groupId = this.props.match.params.id;
    e.preventDefault();
    this.props.addMember(groupId, groupMember);
    this.setState({ groupMember: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    return (
      <TeamCreator
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        groups={this.props.groups}
        selectedGroupId={this.props.match.params.id}
      />
    );
  }
}

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  { addMember, getGroups }
)(TeamCreatorContainer);
