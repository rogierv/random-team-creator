import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import TeamCreator from './TeamCreator';
import TeamSizePickerContainer from '../TeamSizePicker';
import { addMember, deleteMember } from '../../actions/member';
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

  onDelete = (id, memberId) => () => {
    this.props.deleteMember(id, memberId);
  };

  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={16}>
        <Grid item xs={3}>
          <TeamCreator
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            groups={this.props.groups}
            selectedGroupId={this.props.match.params.id}
            onDelete={this.onDelete}
          />
        </Grid>
        <Grid item xs={6}>
          <TeamSizePickerContainer selectedGroupId={this.props.match.params.id} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  { addMember, deleteMember, getGroups }
)(TeamCreatorContainer);
