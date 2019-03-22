import React from 'react';
import { connect } from 'react-redux';

import TeamSizePicker from './TeamSizePicker';

class TeamSizePickerContainer extends React.Component {
  state = { teamCount: '', maxSize: '' };

  handleChange = e => {
    if (e.target.name === 'teamCount') {
      this.setState({ [e.target.name]: e.target.value, maxSize: '' });
    } else if (e.target.name === 'maxSize') {
      this.setState({ [e.target.name]: e.target.value, teamCount: '' });
    }
  };

  render() {
    const { groups, selectedGroupId } = this.props;
    const { teamCount, maxSize } = this.state;
    return (
      <TeamSizePicker
        groups={groups}
        selectedGroupId={selectedGroupId}
        teamCount={teamCount}
        maxSize={maxSize}
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
