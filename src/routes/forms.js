import React from 'react';
import { ReactRedux, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import { object, number } from 'yup';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { deposit, withdraw } from '../store/actions';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

// const initialValues = {};

function MyTextInput({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...field}
      error={meta.touched && !!meta.error}
      helperText={errorText}
      label={label}
      placeholder={placeholder}
    />
  );
}

function MainForm({ heading, inputLabel, submitLabel, onSubmit }) {
  return (
    <Formik
      initialValues={{
        amount: '',
        details: ''
      }}
      validationSchema={object({
        amount: number()
          .required()
          .positive()
          .integer()
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(+values.amount, values.details);
        setSubmitting(false);
      }}
    >
      <Form>
        <Card variant="outlined">
          <CardHeader title={heading} />
          <CardContent>
            <MyTextInput
              label={inputLabel}
              name="amount"
              type="text"
              placeholder="100"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{'\u20B9'}</InputAdornment>
                )
              }}
            />
            <MyTextInput
              label="Details"
              name="details"
              type="text"
              placeholder="Details"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{'\u20B9'}</InputAdornment>
                )
              }}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" type="submit">
              {submitLabel}
            </Button>
          </CardActions>
        </Card>
      </Form>
    </Formik>
  );
}
function Deposit() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (amount, details) => {
    dispatch(deposit(amount, details));
    enqueueSnackbar(`Rs ${amount} deposited successfully for ${details}`);
    history.push('/');
  };
  return MainForm({
    heading: 'Deposit Form',
    inputLabel: 'Amount to deposit',
    submitLabel: 'Add Money',
    onSubmit: onSubmit
  });
}

function Withdraw() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (amount, details) => {
    dispatch(withdraw(amount, details));
    enqueueSnackbar(`Rs ${amount} withdrawn successfully for ${details}`);
    history.push('/');
  };
  return MainForm({
    heading: 'Withdrawl Form',
    inputLabel: 'Amount to draw',
    submitLabel: 'Get Money',
    onSubmit: onSubmit
  });
}
export { Deposit, Withdraw };
