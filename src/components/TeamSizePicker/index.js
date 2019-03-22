import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TeamSizePicker from './TeamSizePicker';

class TeamSizePickerContainer extends React.Component {
  // I have to set the maxSize to -1, to avoid showing '0' near the selecter. Who solves this in a clean way get a coffee!
  state = { teamCount: 0, maxSize: -1 };

  handleChange = e => {
    if (e.target.name === 'teamCount') {
      this.setState({ [e.target.name]: e.target.value, maxSize: 0 });
    } else if (e.target.name === 'maxSize') {
      this.setState({ [e.target.name]: e.target.value, teamCount: 0 });
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
        maxSize={parseInt(maxSize)}
        handleChange={this.handleChange}
      />
    );
  }
}

TeamSizePickerContainer.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  selectedGroupId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  {}
)(TeamSizePickerContainer);
