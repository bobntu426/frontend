import * as React from 'react';
import FilledInput from '@mui/material/FilledInput';

import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { ColumnFlexDiv, PageDiv, RowFlexdiv, SmallFlexDiv } from '../styleComponent';
import SideBar from '../component/handleData/sideBar'

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    name: '',
    gender: '',
    school: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <PageDiv>
        <RowFlexdiv>
            <SideBar />
            <ColumnFlexDiv style={{overflow:'auto'}}>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        value={values.name}
                        onChange={handleChange('name')}
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                    />
                    <FormHelperText id="filled-weight-helper-text">姓名</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('school')}
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                    />
                    <FormHelperText id="filled-weight-helper-text">學校</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('gender')}
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                    />
                    <FormHelperText id="filled-weight-helper-text">性別</FormHelperText>
                    </FormControl>
                </div>
        </ColumnFlexDiv>
      </RowFlexdiv>
    </PageDiv>
    
  );
}