import React from 'react';
import { connect } from 'react-redux';

import TeamSizePicker from './TeamSizePicker';

class TeamSizePickerContainer extends React.Component {
  state = { size: '' };

  onClickHander = size => {
    this.setState({ size });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { groups, selectedGroupId } = this.props;
    return (
      <TeamSizePicker
        groups={groups}
        selectedGroupId={selectedGroupId}
        onClickHander={this.onClickHander}
        size={this.state.size}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  {}
)(TeamSizePickerContainer);
