import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
export function formatRenuval(renuval) {
  return renuval ? <CheckBoxIcon /> : <IndeterminateCheckBoxIcon />;
}
