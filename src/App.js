import React, { useEffect } from 'react'
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton, SelectWrap,
} from './AppStyled'
import Axios from "axios";
import { useState } from "react";


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [occupations, setOccupations] = useState([])
  const [states, setStates] = useState([]);
  const [state, setUserState] = useState('')
  const [occupation, setUserOccupation] = useState('')

useEffect(() => {
  Axios.get("https://frontend-take-home.fetchrewards.com/form").then((res) => {
    setStates(res.data.states);
    setOccupations(res.data.occupations);
  });
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  Axios.post("https://frontend-take-home.fetchrewards.com/form", 
  {
      name,
      email,
      password,
      occupation,
      state
  })
  .then(function (response) {
    console.log(response);
    alert('Success');
    setName('');
    setEmail('');
    setPassword('');
    setUserState('');
    setUserOccupation('');
    
    
  })
  .catch(function (error) {
    console.log(error);
  });
}

return (
    <>
        <Container>
            <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>User Creation</FormH1>
                            <FormLabel>Full Name</FormLabel>
                            <FormInput required value={name} onChange={(event)=>{setName(event.target.value)}}/>
                            <FormLabel>Email</FormLabel>
                            <FormInput type='email' required value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                            <FormLabel>Password</FormLabel>
                            <FormInput type='password' required value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                            <FormLabel>State</FormLabel>
                            <select value={state} required onChange={(event)=>{setUserState(event.target.value)}}>
                              <option disabled value="">Select a State</option>
                              {states.map((state) => <option key={state.abbreviation} value={state.name}>{state.name}</option>)}
                            </select>
                            <SelectWrap />
                            <FormLabel htmlFor='for'>Occupation</FormLabel>
                            <select value={occupation} required onChange={(event)=>{setUserOccupation(event.target.value)}}>
                              <option disabled value="">Select an Occupation</option>
                              {occupations.map((occupation, index) => <option key={index} value={occupation}>{occupation}</option>)}
                            </select>
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
