"use client";

import React from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';

import Bar from '@/components/Bar';
import Bubble from '@/components/text/Bubble';
import risks from '@/assets/data/risks';

export default function PreventionList() {
  const { slug } = useParams();
  const router = useRouter();

  const risk = risks.find((r) => r.slug === slug);

  if (!risk) {
    notFound();
  }

  return (
    <>
      <Bar icon="Megaphone" title="Prévention" color="#EEE9DA" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">{risk.description}</span>

          <div className="risk-items">
            {risk.items.map((item) => (
              <Bubble
                key={item.slug}
                isDescription
                onClick={() => router.push(`/prevention/details/${item.slug}`)}
              >{item.title}
              </Bubble>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
