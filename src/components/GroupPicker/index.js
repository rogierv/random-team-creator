import React from 'react';
import { connect } from 'react-redux';

import GroupPicker from './GroupPicker';
import { addGroup, deleteGroup, getGroups } from '../../actions/group';

class GroupPickerContainer extends React.Component {
  state = { groupName: '' };

  componentDidMount() {
    const { getGroups } = this.props;
    getGroups();
  }

  onSubmit = e => {
    const { groupName } = this.state;
    const { addGroup } = this.props;
    e.preventDefault();
    addGroup(groupName);
    this.setState({ groupName: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDelete = (id, count) => e => {
    const { deleteGroup } = this.props;
    e.preventDefault();
    if (count > 0) {
      if (window.confirm(`Are you sure you want to delete this group with ${count} members`)) {
        deleteGroup(id);
      }
    } else {
      deleteGroup(id);
    }
  };

  render() {
    const { groups } = this.props;
    return (
      <GroupPicker
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        groups={groups}
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
