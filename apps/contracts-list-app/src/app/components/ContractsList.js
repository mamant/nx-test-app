import { useEffect, useState } from 'react';
import { getContractsList } from '../services/getContractsList';
import { formatDate, formatRenuval } from '../utils';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const ContractsList = () => {
  const [contractsList, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getContractsList().then((contracts) => {
      if (mounted) {
        setList(contracts);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <strong>Company Name</strong>
          </Grid>
          <Grid item xs={3}>
            <strong>Contract period</strong>
          </Grid>
          <Grid item xs={2}>
            <strong>Approved</strong>
          </Grid>
          <Grid item xs={2}>
            <strong>Renewal Date</strong>
          </Grid>
        </Grid>
        {contractsList.map((contract) => (
          <Link to={`/contracts/${contract.contractId}`}>
            <Grid container spacing={2} key={contract.contractId}>
              <Grid item xs={4}>
                {contract.company}
              </Grid>
              <Grid item xs={3}>
                {formatDate(contract.periodStart)} -{' '}
                {formatDate(contract.periodEnd)}{' '}
              </Grid>
              <Grid item xs={2}>
                {formatRenuval(contract.scaduledForRenewal)}
              </Grid>
              <Grid item xs={2}>
                {formatDate(contract.negotiationRenewalDate)}
              </Grid>
            </Grid>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContractsList;
