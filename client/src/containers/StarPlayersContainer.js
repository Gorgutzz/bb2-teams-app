import React, { Component } from 'react';
import NavButtonsContainer from "./NavButtonsContainer";
import DataContainer from "./DataContainer";

class StarPlayersContainer extends Component {

    render() {
        return (
            <div>
                <NavButtonsContainer />
                <DataContainer />
            </div>
        )
    }
}

export default StarPlayersContainer
