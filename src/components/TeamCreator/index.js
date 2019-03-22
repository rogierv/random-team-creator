import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TeamMembersList from '../TeamMembersList';
import TeamGenerator from '../TeamGenerator';
import { addMember, deleteMember } from '../../actions/member';
import { getGroups } from '../../actions/group';

class TeamCreatorContainer extends React.Component {
  state = { groupMember: '' };

  componentDidMount() {
    const { getGroups } = this.props;
    getGroups();
  }

  onSubmit = e => {
    const { addMember, match } = this.props;
    const { groupMember } = this.state;
    const groupId = match.params.id;
    e.preventDefault();
    addMember(groupId, groupMember);
    this.setState({ groupMember: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDelete = (id, memberId) => () => {
    const { deleteMember } = this.props;
    deleteMember(id, memberId);
  };

  render() {
    const { groups, match } = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={16}>
        <Grid item xs={3}>
          <TeamMembersList
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            groups={groups}
            selectedGroupId={match.params.id}
            onDelete={this.onDelete}
          />
        </Grid>
        <Grid item xs={6}>
          <TeamGenerator selectedGroupId={match.params.id} />
        </Grid>
      </Grid>
    );
  }
}

TeamCreatorContainer.propTypes = {
  getGroups: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired
};

const mapStateToProps = state => ({ groups: state.groups });

export default connect(
  mapStateToProps,
  { addMember, deleteMember, getGroups }
)(TeamCreatorContainer);
