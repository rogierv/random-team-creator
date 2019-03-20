import React from 'react';
import { connect } from 'react-redux';

import GroupPicker from './GroupPicker';
import { addGroup, getGroups } from '../../actions/group';

class GroupPickerContainer extends React.Component {
  state = { groupName: '' };

  onSubmit = e => {
    const { groupName } = this.state;
    e.preventDefault();
    this.props.addGroup(groupName);
    this.setState({ groupName: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    return (
      <GroupPicker onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} groups={this.props.groups} />
    );
  }
}

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  { addGroup, getGroups }
)(GroupPickerContainer);
