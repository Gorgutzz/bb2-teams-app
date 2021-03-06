// Thunk allows action creators to return functions. The inner function can receive the store methods dispatch and getState as parameters

export const fetchTeams = () => {
    console.log('c')
    return (dispatch) => {
        dispatch({ type: 'LOADING_TEAMS'});
        fetch(`/api/teams`)
            .then(res => res.json())
            .then(responseJSON => {
              console.log('d')
              dispatch({ type: 'ADD_TEAMS', cards: responseJSON})
            })
    }
    console.log('e')
};

// export const sortTeams = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_TEAMS'});
//         fetch(`/api/teams`)
//             .then(res => res.json())
//             .then(responseJSON => { dispatch({ type: 'SORT_TEAMS', cards: responseJSON})
//             })
//     }
// };

export const fetchPlayers = teamId => {
    return dispatch => {
        dispatch({ type: 'LOADING_PLAYERS' });
        fetch(`/api/teams/${teamId}/players`) // interpolate id into path string
          .then(res => res.json())
          .then(responseJSON => { dispatch({ type: 'ADD_PLAYERS', cards: responseJSON});
            })
    }
};

export const fetchStarPlayers = teamId => {
    return dispatch => {
        dispatch({ type: 'LOADING_STAR_PLAYERS' });
        fetch(`/api/teams/${teamId}/star_players`)
          .then(res => res.json())
          .then(responseJSON => { dispatch({ type: 'ADD_STAR_PLAYERS', cards: responseJSON});
            })
    }
};

export const displayObject = (id, category, type) => {
    return dispatch => {
        const data = { id };
        fetch(`/api/${category}/show`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type , object: responseJSON})
            })
    }
};
