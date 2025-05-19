"use client";

import React from 'react';
import { notFound, useSearchParams } from 'next/navigation';

import Bar from '@/components/Bar';
import Icon from '@/components/Icon';
import { useRisk } from '@/context/RiskContext';

export default function PreventionDetails() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const { risks } = useRisk();

  if (!risks || risks.length === 0) {
    return <></>;
  }

  const matchingRisk = risks.find((risk) =>
    risk.items.some((item) => item.slug === slug)
  );

  const item = matchingRisk?.items.find((item) => item.slug === slug);

  if (!item || !matchingRisk) {
    notFound();
  }

  const formatText = (text: string) =>
    text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));

  return (
    <>
      <Bar icon="Megaphone" title="Prévention" color="#EEE9DA" />

      <div className="view">
        <div className="thread">

          <span className='md-text'>{item.title}</span>

          <div className='flex flex-row items-center gap-2 align-middle'>
            <Icon icon="OctagonAlert" size={20} />
            <span className='sm-text'>Risques</span>
          </div>
          <span className='md-text'>{formatText(item.risks)}</span>

          <div className='flex flex-row items-center gap-2 align-middle'>
            <Icon icon="Pin" size={20} />
            <span className='sm-text'>Où</span>
          </div>
          <span className='md-text'>{formatText(item.where)}</span>

          <div className='flex flex-row items-center gap-2 align-middle'>
            <Icon icon="Star" size={20} />
            <span className='sm-text'>Prévention</span>
          </div>
          <span className='md-text'>{formatText(item.prevents)}</span>

        </div>
      </div>
    </>
  );
}
