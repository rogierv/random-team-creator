import React from 'react';
import { connect } from 'react-redux';

import GroupPicker from './GroupPicker';
import { addGroup, deleteGroup, getGroups } from '../../actions/group';

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

  onDelete = (id, count) => e => {
    e.preventDefault();
    if (count > 0) {
      if (window.confirm(`Are you sure you want to delete this group with ${count} members`)) {
        this.props.deleteGroup(id);
      }
    } else {
      this.props.deleteGroup(id);
    }
  };

  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    return (
      <GroupPicker
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        groups={this.props.groups}
        onDelete={this.onDelete}
      />
    );
  }
}

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  { addGroup, getGroups, deleteGroup }
)(GroupPickerContainer);
