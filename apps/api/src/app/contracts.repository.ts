const contracts = [
  {
    contractId: '1234567',
    company: 'Apple',
    periodEnd: '2021 14:24:22 GMT+0200',
    periodStart: '2021 14:24:22 GMT+0200',
    scaduledForRenewal: true,
    negotiationRenewalDate: '2021 14:24:22 GMT+0200'
  },
  {
    contractId: '7654321',
    company: 'Netflix',
    periodEnd: '2021 14:24:22 GMT+0200',
    periodStart: '2021 14:24:22 GMT+0200',
    scaduledForRenewal: true,
    negotiationRenewalDate: '2021 14:24:22 GMT+0200'
  },
  {
    contractId: '9876544',
    company: 'Coca-cola',
    periodEnd: '2021 14:24:22 GMT+0200',
    periodStart: '2021 14:24:22 GMT+0200',
    scaduledForRenewal: false,
    negotiationRenewalDate: '2021 14:24:22 GMT+0200'
  },

];

export const getAllContracts = () => contracts;
export const getContract = (id: string) => contracts.find((contract) => contract.contractId === id);
