import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import { ReactComponent } from '*.svg';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}
export default BusinessList;