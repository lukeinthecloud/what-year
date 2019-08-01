import React from 'react';
import {connect} from 'react-redux';
import {setAuthenticated} from '../redux/actions/authenticated.action';

function LogoutButton(props) {
    function _logout() {
        props.setAuthenticated(false);
    }

    return (<button onClick={_logout} className="btn btn-danger">Logout</button>);
}

export default connect(
    null,
    {
        setAuthenticated
    }
)(LogoutButton);
