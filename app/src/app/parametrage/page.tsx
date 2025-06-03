"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import ActionModal from '@/components/modal/ActionModal';
import TextField from '@/components/text/TextField';

import { useUser } from '@/context/UserContext';

const Parametrage = () => {
  const router = useRouter();
  const { updateUser } = useUser();

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const validateName = (value) => {
    const regex = /^.{3,}$/;
    return regex.test(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (validateName(value)) {
      setError('');
      setIsNameValid(true);
    } else {
      setError("Longueur minimum de 3 caractères.");
      setIsNameValid(false);
    }
  };

  const setUser = async () => {
    if (!isNameValid) return;
    updateUser({ name: name });
    router.push('/acceuil');
  };

  return (
    <>
      <Bar icon="User" title="Compte" color="#F9F7F7" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Créer votre compte pour synchroniser vos données.
          </span>

          <div className='content'>
            <TextField
              title="Nom"
              subtitle="Votre nom permettra de personnaliser l'expérience."
              value={name}
              placeholder="Tapez votre nom"
              type="name"
              handleChange={handleNameChange}
              onKeyDown={setUser}
              inputRef={inputRef}
            />

            {error && <span className='sm-text error'>{error}</span>}
          </div>
        </div>
      </div>

      <ActionModal
        icon="CheckCheck"
        title="Valider"
        onClick={setUser}
        isDisable={!isNameValid}
      />
    </>
  );
};

export default Parametrage;