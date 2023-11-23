const { expect } = require('chai');
const  getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test result is true', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.equal({ data: 'Successful response from the API' });
	  });
    done();
  });
});
