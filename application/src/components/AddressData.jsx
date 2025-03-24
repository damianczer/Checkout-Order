import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from '@mui/material/Grid'; // Revert to stable Grid component
import Box from '@mui/material/Box';
import Text from '../controls/Text';
import Wrapper from '../controls/Wrapper';
import Label from '../controls/Label';
import Country from '../controls/Country';
import { required, onlyLetters, zipcode, houseNumber } from '../validation';
import Zipcode from '../controls/Zipcode';

const AddressData = () => (
  <Box sx={
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }
  >
    <Grid
      container
      spacing={1}
      sx={
        {
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '30px'
        }
      }
    >
      <Wrapper>
        <Label>Zipcode: *</Label>
        <Field
          name="zipcode"
          component={Zipcode}
          validate={[required, zipcode]}
        />
      </Wrapper>
      <Wrapper>
        <Label>City: *</Label>
        <Field
          name="city"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>Street: *</Label>
        <Field
          name="street"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>House Number: *</Label>
        <Field
          name="houseNumber"
          type="number"
          component={Text}
          validate={[required, houseNumber]}
        />
      </Wrapper>
      <Wrapper>
        <Label>Country: *</Label>
        <Field
          name="country"
          component={Country}
          validate={[required]}
        />
      </Wrapper>
      <Wrapper>
        <Label>Address Line (optional):</Label>
        <Field
          name="addressLine"
          component={Text}
        />
      </Wrapper>
    </Grid>
  </Box>
);

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false
})(AddressData);
