import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, fetchTeams } from ".././actions/dataActions";

import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

class PlayerFilter extends Component {
  constructor() {
      super();
      this.state = { data: [], currentTeam: 'Select Team' };
    }

    async fetchButtonTeams() {
      const response = await fetch(`/api/teams`);
      const json = await response.json();
      this.setState({ data: json });
    }

    //  method which calls the fetchButtonTeams's setState method to change the state and update data
    componentDidMount(){
      this.fetchButtonTeams()
    }

    handleTeamSelection = e => {
        e.preventDefault();
        const { target: { title }} = e;
        this.props.setTeam(title);
        this.props.fetchPlayers(title);
    //    console.log(title, team, e.target.dataset.team)
        this.setState({ currentTeam: e.target.dataset.team });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Dropdown id="dropdown-player-button" title={this.props.team}>
                      <Dropdown.Toggle id="dropdown-button">
                        {this.state.currentTeam}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          {this.state.data.map(team => (
                            <div key={team}>
                                <Dropdown.Item onClick={this.handleTeamSelection} title={team.id} data-team={team.name}>{team.name}</Dropdown.Item>
                            </div>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </Container>
        )
    }
}

// returns team's players of the current state of component
const mapStateToProps = state => {
    return {
        team: state.players.team
    }
};

//  directs the dispatching of an action by pointing it to an action creator
const mapDispatchToProps = dispatch => {
    return {
        fetchPlayers: params => dispatch(fetchPlayers(params)),
        fetchTeams: params => dispatch(fetchTeams(params)),
        setTeam: team => dispatch({ type: "SET_TEAM", team })
    }
};

// connects PlayerFilter to the store, and dispatch an action to the store to update the state
export default connect(mapStateToProps, mapDispatchToProps)(PlayerFilter)
