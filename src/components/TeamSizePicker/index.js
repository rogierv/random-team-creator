import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import TeamSizePicker from './TeamSizePicker';

class TeamSizePickerContainer extends React.Component {
  state = { size: '' };

  onClickHander = size => {
    this.setState({ size });
  };

  render() {
    const { groups, selectedGroupId } = this.props;
    return (
      <TeamSizePicker
        groups={groups}
        selectedGroupId={selectedGroupId}
        onClickHander={this.onClickHander}
        size={this.state.size}
      />
    );
  }
}

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  {}
)(TeamSizePickerContainer);
