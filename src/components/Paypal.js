import React from 'react';
import ReactDOM from "react-dom"

import _ from 'lodash';


export default class Paypal extends React.Component {

    createOrder(data, actions) {
        return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: "0.01",
                },
            },
        ],
        });
    }

    onApprove(data, actions) {
        return actions.order.capture();
    }

    render() {
        return (
            <div></div>
        );
    }
}

