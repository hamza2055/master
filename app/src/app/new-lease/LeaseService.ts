import axios from "axios";
const url = "http://compliancetool.herokuapp.com/calculation";

alert("sdsa");
export default {
  async calculate() {
    alert("calling service");
    var data = {
      leaseContractNo: "Lease No. 1",
      commencementDate: "2017-03-15",
      paymentsAt: "Beginning",
      annualDiscountRate: 5,
      leaseTerm: 2,
      expectedPeriod: 16,
      leasePayment: 100000,
      paymentIntervals: "Yearly",
      initialDirectCost: 0,
      guaranteedResidualValue: 0.0,
      usefulLifeOfTheAsset: 10,
      escalation: 10,
      escalationAfterEvery: 2
    };

    const response = await axios.post(url, data);
    return response.data;
  }
  
};

