"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import LinkModal from '@/components/modal/LinkModal';
import Bubble from '@/components/text/Bubble';

import { useAgenda } from '@/context/AgendaContext';

const History = () => {
  const router = useRouter();
  const { agenda } = useAgenda();

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const isYesterday = (dateStr: string) => {
    const date = new Date(dateStr);
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    return date.toISOString().split('T')[0] === yesterday.toISOString().split('T')[0];
  };

  const formatDateLabel = (date: string) => {
    if (date === todayStr) {
      return `Aujourd'hui - ${date.split('-').reverse().join('/')}`;
    }
    if (isYesterday(date)) {
      return `Hier - ${date.split('-').reverse().join('/')}`;
    }
    const formatted = new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return capitalize(formatted.split(' ')[0]) + ' - ' + formatted.split(' ').slice(1).join(' ');
  };

    const passed = agenda
    .filter(a => a.date)
    .filter(a => {
        const eventDateStr = a.date;
        return eventDateStr < todayStr; // exclut aujourd'hui
    });

  const groupedByDate: { [date: string]: typeof passed } = {};

  passed.forEach(a => {
    if (!groupedByDate[a.date]) {
      groupedByDate[a.date] = [];
    }
    groupedByDate[a.date].push(a);
  });

  Object.keys(groupedByDate).forEach(date => {
    groupedByDate[date].sort((a, b) => (a.heure || '').localeCompare(b.heure || ''));
  });

  const sortedDates = Object.keys(groupedByDate).sort((a, b) => b.localeCompare(a));

  return (
    <>
      <Bar icon="ChartNoAxesGantt" title="Agenda" color="#A0C3D2" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Retrouvez vos évènements passés, du plus récent au plus ancien.
          </span>

          <div className="content">
            {sortedDates.map(date => (
              <React.Fragment key={date}>
                <span className="md-text" style={{ marginTop: '1rem' }}>
                  {formatDateLabel(date)}
                </span>

                {groupedByDate[date].map(a => (
                  <Bubble
                    isDescription
                    key={a.id}
                    onClick={() => router.push(`/agenda/details?id=${a.id}`)}
                    icon="Calendar1"
                    title={a.date.split('-').reverse().join('/')}
                    icon2={a.heure ? 'Clock' : undefined}
                    title2={a.heure || undefined}
                  >
                    {a.title
                      ? a.title.slice(0, 47) + (a.title.length > 47 ? '...' : '')
                      : 'Aucun contenu'}
                  </Bubble>
                ))}
              </React.Fragment>
            ))}

            {passed.length === 0 && (
              <span className="md-text">Aucun événement passé trouvé.</span>
            )}
          </div>
        </div>
      </div>

      <LinkModal icon="CalendarSearch" title="Explorer" link="/agenda/details" />
    </>
  );
};

export default History;
