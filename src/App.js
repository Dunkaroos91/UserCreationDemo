import React, { useEffect } from 'react'
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton, SelectWrap, Select,
} from './AppStyled'
import Axios from "axios";
import { useState } from "react";


function App() {
  const [occupations, setOccupations] = useState([])
  const [states, setStates] = useState([]);
  const [userForm, setUserForm] = useState({ occupation: '', state: '' })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  useEffect(() => {
    Axios.get("https://frontend-take-home.fetchrewards.com/form").then((res) => {
      setStates(res.data.states);
      setOccupations(res.data.occupations);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, passwordConfirm, name, email, occupation, state } = userForm
    if (password === passwordConfirm) {
      console.log(name, password, passwordConfirm, occupation, state, email)
      Axios.post("https://frontend-take-home.fetchrewards.com/form",
        {
          name,
          email,
          password,
          occupation,
          state
        })
        .then(function (response) {
          alert('User Created')
          setUserForm({
            name: '',
            email: '',
            password: '',
            occupation: '',
            state: '',
            passwordConfirm: '',
          })



        })
        .catch(function (error) {
          console.log(error);
          alert(error?.message);
        });
    } else {
      alert('Passwords do not match')
    }
  }



  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>User Creation</FormH1>
              <FormLabel>Full Name</FormLabel>
              <FormInput required placeholder="Enter your full name" value={userForm.name} name='name' onChange={handleChange} />
              <FormLabel>Email</FormLabel>
              <FormInput type='email' required placeholder="Enter your email address" value={userForm.email} name='email' onChange={handleChange} />
              <FormLabel>Password</FormLabel>
              <FormInput type='password' required placeholder="Enter your password" value={userForm.password} name='password' onChange={handleChange} />
              <FormLabel>Confirm Password</FormLabel>
              <FormInput type='password' required placeholder="Confirm your password" value={userForm.passwordConfirm} name='passwordConfirm' onChange={handleChange} />
              <FormLabel>State</FormLabel>
              <Select value={userForm.state} name='state' required onChange={handleChange}>
                <option disabled value="">Select a State</option>
                {states.map((state) => <option key={state.abbreviation} value={state.name}>{state.name}</option>)}
              </Select>
              <SelectWrap />
              <FormLabel>Occupation</FormLabel>
              <Select value={userForm.occupation} name='occupation' required onChange={handleChange}>
                <option disabled value="">Select an Occupation</option>
                {occupations.map((occupation, index) => <option key={index} value={occupation}>{occupation}</option>)}
              </Select>
              <SelectWrap />
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default App;
