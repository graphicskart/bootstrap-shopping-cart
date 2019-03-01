import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
const CartItem = (props) => {
    const { title = '', image = '', qty = 0, expressDelivery = false, price = 0, onDelete } = props;
    return(
        <Row className="cart-item">
            <Col xs={12}>
                <Row>
                    <Col xs={2}>
                        <img src={image} />
                    </Col>
                    <Col xs={8} className="info">
                        <Row>
                            <Col xs={6} className="title-group">
                                <Row>
                                    <Col xs={12}>
                                        <p className="title">{title}</p>
                                    </Col>
                                    <Col xs={12}>
                                        {expressDelivery?<p className="delivery">Express delivery</p>:null}
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={3} className="title-group">
                                <p className="qty">{qty} unit</p>
                            </Col>
                            <Col xs={3} className="title-group">
                                <p className="price">${price}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} className="title-group">
                        <i className="far fa-times-circle float-right" onClick={onDelete}></i>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CartItem;