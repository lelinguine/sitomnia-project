"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import { useNote } from '@/context/NotesContext';

const Details = () => {
  const searchParams = useSearchParams();
  const noteId = searchParams.get('id');
  const router = useRouter();

  const { getNote, addOrUpdateNote } = useNote();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!noteId) {
      const id = crypto.randomUUID();
      router.replace(`/notes/details?id=${id}`);
      return;
    }

    const existingNote = getNote(noteId);
    if (existingNote) {
      setContent(existingNote.content);
    }
  }, [noteId, getNote, router]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (noteId) {
      addOrUpdateNote(noteId, e.target.value);
    }
  };

  return (
    <>
      <Bar icon="PencilLine" title="Notes" color="#EEE9DA" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Écrire un note pour se souvenir des informations.
          </span>

          <div className='content'>
            <textarea
              className="md-text auto-textarea"
              autoFocus
              value={content}
              onChange={handleChange}
              placeholder="Tapez votre note ici..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;