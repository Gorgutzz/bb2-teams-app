import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from ".././actions/dataActions";


class TeamFilter extends Component {
  constructor() {
      super();
      this.state = { teams: [] };
    }

    handleTeamFetch = e => {
        this.props.fetchTeams()
    };


    render() {
      return (

        <div>
            <button onClick={this.handleTeamFetch}>Show All Teams</button>
                {this.state.teams.map(team => {
                    return <div key={team.id}></div>
                })}
        </div>
        )
      }


    }

    const mapStateToProps = state => {
        return {
        }
    };

const mapDispatchToProps = dispatch => {
        return {
            fetchTeams: params => dispatch(fetchTeams(params)),
        }
    };




export default connect(mapStateToProps, mapDispatchToProps)(TeamFilter)
