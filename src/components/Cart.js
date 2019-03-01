import React, { Component } from 'react';
import {
    Col, 
    Row,
    FormControl,
    Button
} from 'react-bootstrap';
import { CartItem } from '../components';

const items = [
    {
        title: 'This is a demo product1',
        image: require('../assets/images/product1.jpg'),
        expressDelivery: true,
        qty: 1,
        price: 12.00
    },
    {
        title: 'This is a demo product1',
        image: require('../assets/images/product1.jpg'),
        expressDelivery: true,
        qty: 1,
        price: 12.00
    },
    {
        title: 'This is a demo product1',
        image: require('../assets/images/product1.jpg'),
        expressDelivery: true,
        qty: 1,
        price: 12.00
    },
    {
        title: 'This is a demo product1',
        image: require('../assets/images/product1.jpg'),
        expressDelivery: true,
        qty: 2,
        price: 12.00
    }
];
export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [...items],
            coupon: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onDelete = (index) => {
        let { items } = this.state;
        items.splice(index, 1);

        this.setState({
            items
        });
    }

    render() { 
        const { items = [] } = this.state;
        const total = items.length?items.reduce((a, b) => ({ price: a.price + (b.price * b.qty) })): { price: 0 };

        return(
            <Col xs={12} sm={{ span: 6, offset: 3 }}>
                <Row>
                    <Col xs={12} className="main-container">
                        {items.length?items.map((item, key) => <CartItem key={key} {...item} onDelete={()=>this.onDelete(key)} />):
                            <h4 className="text-center">Your Cart is empty.</h4>
                        }
                        {items.length?<Col xs={12} className="footer">
                            <Row>
                                <Col xs={12}>
                                    <Row>
                                        <Col xs={2}>

                                        </Col>
                                        <Col xs={8}>
                                            <Row>
                                                <Col xs={6}>
                                                    <FormControl 
                                                        className="input"
                                                        placeholder="Have coupon code?"
                                                        value={this.state.coupon}
                                                        onChange={this.onChange}
                                                        name="coupon"
                                                    />
                                                </Col>
                                                <Col xs={3}>
                                                    <p>Total</p>
                                                </Col>
                                                <Col xs={3}>
                                                    <p className="total">${total.price}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>:null}
                    </Col>
                    <Col xs={12} className="actions">
                        <Button variant="primary">Continue Shopping</Button>
                        <Button variant="success" className="float-right">Checkout Now</Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}