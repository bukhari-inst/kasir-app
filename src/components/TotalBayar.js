import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from 'utils/constanst';
import { Button, Col, Row } from 'react-bootstrap';
import numberWithCommas from 'utils/formatNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + 'pesanans', pesanan).then((res) => {
      this.props.history.push('/succes');
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col className="px-4" md={{ span: 3, offset: 9 }}>
            <h4>
              Total Harga:{' '}
              <strong className="float-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <Button
              className="my-4 mr-2"
              size="lg"
              variant="primary"
              block
              onClick={() => this.submitTotalBayar(totalBayar)}
            >
              <strong>
                Bayar <FontAwesomeIcon icon={faMoneyBillWave} />{' '}
              </strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
