import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/components/log/signup.css'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            const response = await axios.post(import.meta.env.VITE_APISINGNUP, { email, password });
            localStorage.setItem('token', response.data.token);
            setMessage('Inscription réussie ! Vous êtes connecté.');
            window.location.href = "/";
        } catch (error) {
            setMessage('Cette adresse email est déjà enregistrée.');
        }
    };

    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className='input_mail'
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                </div>
                <div className="group">
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className='input_password'
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Mots de passe</label>
                </div>
                <div className="group">
                    <input
                    type="password"
                    name="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                    className='input_password'
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Confirmer le Mots de passe</label>
                </div>

                <div className="group-condi">
                    <div className="check-group">
                        <input type="checkbox" id="terms" />
                    </div>
                    <div className="propo-group">
                        <div>
                            J'accepte les
                            <Link to="/A-propo-de-nous">
                                conditions générales
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <button type="submit">Sign up</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
