import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import './Contact.scss'

//Data
const initialValues = {
  firstName: '',
  lastName: '',
  occupation: '',
  email: '',
  message: '',
  subject: '',
}

const options = [
  { label: 'Computer Programmer', value: 'Computer_programmer' },
  { label: 'Web Developer', value: 'web_developer' },
  { label: 'User Experience Designer', value: 'user_experience_designer' },
  { label: 'Systems Analyst', value: 'systems_analyst' },
  { label: 'Quality Assurance Tester', value: 'quality_assurance_tester' },
]

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
})

const Contact = () => {

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (values) => {
    console.log(values)

    // endpoint URL
    const url = process.env.REACT_APP_FORM_URL

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true)
        } else {
          setError(res.message)
        }
      })
      .catch((error) => setError(error))
  }

  let message
  if (error) {
    return message = <p>{error}</p>
  }

  if (submitted) {
    return message = <p>We have received your message, thank you for contacting!</p>
  }

  return (
    <Container className='contact-page'>
      {message}
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Card>
            <div className="page-title">
              <CardHeader title="Contact Form"></CardHeader>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ dirty, isValid, values, handleChange, handleBlur }) => {
                console.log('isValid', isValid,dirty)
                return (
                  <Form>
                    <CardContent>
                      <Grid item container spacing={2} justify="center">
                        <Grid item xs={12} sm={6} md={6}>
                          <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                          <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                                                            Occupation
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Occupation"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.occupation}
                              name="occupation">
                              <MenuItem>None</MenuItem>
                              {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Subject"
                            variant="outlined"
                            fullWidth
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            name="message"
                            value={values.message}
                            type="text"
                            multiline
                            rows={3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        disabled={!isValid || !dirty}
                        variant="contained"
                        color="primary"
                        type="Submit"
                      >
                        Submit
                      </Button>
                    </CardActions>
                  </Form>
                )
              }}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact