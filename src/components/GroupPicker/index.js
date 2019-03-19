import React from 'react';
import GroupPicker from './GroupPicker';

export default class GroupPickerContainer extends React.Component {
  state = { groupName: '' };

  onSubmit = e => {
    const { groupName } = this.state;
    e.preventDefault();
    this.setState({ groupName: '' });
    console.log(groupName);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <GroupPicker onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />;
  }
}
