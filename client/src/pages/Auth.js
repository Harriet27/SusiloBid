import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Input, FormGroup, Form, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPass } from '../redux/action';
import { Redirect, Link } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();

    const [formOld, setFormOld] = useState('');

    const id = useSelector((state) => state.auth.id);
    const loading = useSelector((state) => state.profile.loading);
    const confirmed = useSelector((state) => state.profile.confirmed);

    const handlechange = e => {
        setFormOld({
            ...formOld,
            [e.target.name]: e.target.value,
        });
    };

    const handleConfirm = () => {
        dispatch(confirmPass(id, formOld));
    };

    if (confirmed === false) {
        return <Redirect to='/edit-profile' />
    }
    return (
        <React.Fragment>
            <h1 style={styles.header}>
                Confirm Account
            </h1>
            <div style={styles.formDiv}>
                <Form style={styles.form}>
                    <FormGroup>
                        <Label>Confirm Old Password</Label>
                        <Input type="password" name="confirmOldPassword" placeholder="Confirm Old Password" onChange={handlechange} />
                    </FormGroup>
                    <div style={styles.buttonDiv}>
                        <Button variant="outline-dark" style={styles.button} type="submit" onClick={handleConfirm}>
                            {
                                loading
                                ?
                                'Loading...'
                                :
                                'Confirm'
                            }
                        </Button>
                    </div>
                </Form>
            </div>
        </React.Fragment>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginTop: '60px',
    },
    formDiv: {
        display: 'flex',
        justifyContent: 'center',
        height: '60vh',
        alignItems: 'center',
    },
    form: {
        width : '400px',
        height: '400px',
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    button: {
        fontSize: '15px',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
    },
};

export default Auth;
