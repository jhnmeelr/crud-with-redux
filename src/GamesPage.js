import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';

import GamesList from './GamesList';

class GamesPage extends Component {
    static propTypes = {
        games: PropTypes.array.isRequired,
        fetchGames: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return (
            <div>
                <h1>Games List</h1>
                <GamesList games={this.props.games} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage);
