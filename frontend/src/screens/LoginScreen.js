import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {login, generateOTP} from '../actions/userActions'

const LoginScreen = ({history}) => {

    const dispatch = useDispatch()

    const recruiterLogin = useSelector((state) => state.recruiterLogin)
    const { recruiterInfo } = recruiterLogin

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(userInfo){
            history.push('/student')
        }
        else if(recruiterInfo){
            history.push('/recruiter')
        }
    }, [history, userInfo, recruiterInfo])

    return (
        <FormContainer>
            <h2 className='text-center my-3'>LIET Placement Portal</h2>
            <div className='p-3 border rounded mb-4 bg-light'>
                <h4 className='mb-3'><i className='fas fa-sign-in-alt me-2'></i>Sign In</h4>
                <Row className='gy-2'>
                    <Col md={12}>
                        <Link to={'/student/login'}>
                            <Button variant='dark' className='w-100 py-2 my-1'>
                                <i className='fas fa-user-graduate me-2'></i> Student Sign In
                            </Button>
                        </Link>
                    </Col>
                    <Col md={12}>
                        <Link to={'/recruiter/login'}>
                            <Button variant='outline-dark' className='w-100 py-2 my-1'>
                                <i className='fas fa-briefcase me-2'></i> Recruiter Sign In
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>

            <div className='p-3 border rounded bg-light'>
                <h4 className='mb-3'><i className='fas fa-user-plus me-2'></i>New User? Register</h4>
                <Row className='gy-2'>
                    <Col md={12}>
                        <Link to={'/student/register'}>
                            <Button variant='success' className='w-100 py-2 my-1'>
                                <i className='fas fa-user-plus me-2'></i> Register as Student
                            </Button>
                        </Link>
                    </Col>
                    <Col md={12}>
                        <Link to={'/recruiter/register'}>
                            <Button variant='primary' className='w-100 py-2 my-1'>
                                <i className='fas fa-building me-2'></i> Register as Recruiter
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </FormContainer>
    )
}

export default LoginScreen
