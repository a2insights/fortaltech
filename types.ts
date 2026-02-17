
import React from 'react';

export interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

export interface MegaMenuItem {
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
}