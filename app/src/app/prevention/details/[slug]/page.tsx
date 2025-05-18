"use client";

import React from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';

import Bar from '@/components/Bar';
import risks from '@/assets/data/risks';

export default function PreventionDetails() {
  const { slug } = useParams();
  const router = useRouter();

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
          <p><strong>Catégorie :</strong> {matchingRisk.title}</p>
          <p><strong>Risques :</strong><br />{formatText(item.risks)}</p>
          <p><strong>Où :</strong><br />{item.where}</p>
          <p><strong>Prévention :</strong><br />{formatText(item.prevents)}</p>
        </div>






        
      </div>
    </>
  );
}
