"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

import type { Risk } from '@assets/data/risks';
import defaultRisks from '@assets/data/risks';

type RiskContextType = {
  risks: Risk[];
  setRisks: (newRisks: Risk[]) => void;
  updateRiskItemCheck: (riskSlug: string, itemSlug: string, checked: boolean) => void;
  updateRiks: (newRisks: Risk[]) => void;
  addRisks: (newRisks: Risk[]) => void;
};

const RiskContext = createContext<RiskContextType | undefined>(undefined);

export const RiskProvider = ({ children }: { children: React.ReactNode }) => {
  const [risks, setRisksState] = useState<Risk[]>([]);

  useEffect(() => {

  }, []);

  useEffect(() => {
    //localStorage.setItem('preventions', JSON.stringify(risks));
  }, [risks]);

  const setRisks = (newRisks: Risk[]) => {
    setRisksState(newRisks);
  };

  const updateRiskItemCheck = (riskSlug: string, itemSlug: string, checked: boolean) => {
    setRisksState(prev =>
      prev.map(risk =>
        risk.slug === riskSlug
          ? {
              ...risk,
              items: risk.items.map(item =>
                item.slug === itemSlug ? { ...item, isChecked: checked } : item
              ),
            }
          : risk
      )
    );
  };

  const updateRiks = (newRisks: Risk[]) => {
    setRisksState(newRisks);
  }

  const addRisks = (newRisks: Risk[]) => {
    setRisksState(newRisks);
  }

  return (
    <RiskContext.Provider value={{ risks, setRisks, updateRiskItemCheck, updateRiks, addRisks }}>
      {children}
    </RiskContext.Provider>
  );
};

export const useRisk = () => {
  const context = useContext(RiskContext);
  if (!context) throw new Error("useRisk must be used within a RiskProvider");
  return context;
};
