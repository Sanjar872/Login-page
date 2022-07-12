import React, {useState} from 'react'
import Logo1 from '../Rasmlar/login (2).jpg'
import Google from '../Rasmlar/qqqqqq.png'
import { useNavigate } from 'react-router'

// import Button from '@mui/material/Button';
// import { Button } from '@mui/material';

import { Main,Container, Box1,Box2,H1,H3, Img,Section, Form,Input1,Input2,Con,P,MyButton,ButtonDiv,LineDiv,Div,Div1,Gogle,Mymg,Foter,Forget,Label2,Pp,Sspan} from './style'
import { Email } from '@mui/icons-material'




const Login = () => {

    // const [state, setState] = useState();
    const [inputData, setInputData] = useState({login:"", password:""});
    const navigation = useNavigate();
    
    function handleChange(e) {
        const {name,value} = e.target

        setInputData(inputData => ({...inputData, [name]: value}))

    }


    function SingIn(params) {
        let Login = 'Sanjar';
        let Password = "12345";

        if (inputData.login === Login && inputData.password === Password) {
            navigation('/about')
            localStorage.setItem('login',Email)
            localStorage.setItem('password',Password)
            navigation('/about')

            // console.log(true);
            // window.location ='https://www.w3schools.com/js/js_window_location.asp';
            
        }else{
            alert(`login yoki parol nptiogri`)
        }
        
    }



  return (
    <Container>
        <Main>
            <Box1>
                <Img src={Logo1} alt="" />
                
            </Box1>
            <Box2>
                <Con>

                <Section>
                <H1>Lovebirds</H1>
                <H3>Welcome to Lovebirds</H3>
                </Section>
                <Form>
                    <Label2 htmlFor="">User name or Email </Label2>
                    <br />
                    <Input1 onChange={handleChange} type="text" name='login' />
                    <br /><br />
                    <Label2 htmlFor="">Password</Label2>
                    
                    <Input2 onChange={handleChange} type="password" name='password' placeholder='******' />
                    <Forget>
                    <P>Forget password?</P>

                    </Forget>
                    <ButtonDiv>
                    <MyButton onClick={SingIn}  variant="contained">Sign in</MyButton>
                    </ButtonDiv>
                    <LineDiv>
                        <Div></Div>
                        <Pp>or</Pp>
                        <Div1></Div1>
                    </LineDiv>
                    <Gogle>
                        <Mymg src={Google} alt="" />
                        <p>Sign in with Google</p>
                    </Gogle>
                    <Foter>
                        <p>New Lovebrids? <Sspan>Create Account</Sspan></p>
                    </Foter>

                </Form>
                </Con>
                
            </Box2>
        </Main>
    </Container>
  )
}

export default Login