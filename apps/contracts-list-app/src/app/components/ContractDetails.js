import { getContract } from '../services/getContractsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DatePicker from 'react-date-picker';
import FormControlLabel from '@mui/material/FormControlLabel';

const ContractDetails = () => {
  const [contract, setContract] = useState([]);
  const params = useParams();
  useEffect(() => {
    let mounted = true;
    getContract(params.id).then((contract) => {
      if (mounted) {
        setContract(contract);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField value={contract.company} id="contract.company" focus />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox checked={contract.scaduledForRenewal ? true : false} />
            }
            label="Scaduled For Renewal"
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ mb: 1 }}>Period start</Box>
          <DatePicker value={contract.periodStart} />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ mb: 1 }}>Period end</Box>
          <DatePicker value={contract.periodEnd} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mb: 1 }}>Negotiation Renewal Date</Box>
          <DatePicker value={contract.negotiationRenewalDate} />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 4 }}>
        <Button variant="contained">Save contract</Button>
      </Grid>
    </form>
  );
};

export default ContractDetails;
