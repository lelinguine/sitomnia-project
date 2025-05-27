"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import ActionModal from '@/components/modal/ActionModal';
import TextField from '@/components/text/TextField';

import { useUser } from '@/context/UserContext';

const Connexion = () => {
  const router = useRouter();
  const { settings } = useUser();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {    
    inputRef.current.focus();
  }, []);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setError('');
      setIsEmailValid(true);
    } else {
      setError("Format de l'adresse mail invalide");
      setIsEmailValid(false);
    }
  };

  const connectUser = async () => {
    if (!isEmailValid) return;

    localStorage.setItem('email', email);
    router.push('/acceuil');
  };

  return (
    <>
      <Bar icon="User" title="Compte" color="#F9F7F7" noBack />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Connecter ou créer votre compte pour synchroniser vos données.
          </span>

          <div className='content'>
            <TextField
              title="Adresse email"
              subtitle="Votre email sert d'identifiant."
              value={email}
              placeholder="Tapez votre adresse mail"
              type="email"
              handleChange={handleEmailChange}
              onKeyDown={connectUser}
              inputRef={inputRef}
            />

            {error && <span className='sm-text error'>{error}</span>}
          </div>
        </div>
      </div>

      <ActionModal
        icon="Unplug"
        title="Connecter"
        onClick={connectUser}
        isDisable={!isEmailValid}
      />
    </>
  );
};

export default Connexion;