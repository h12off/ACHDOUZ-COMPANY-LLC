import type { ReactNode } from 'react';

export interface ServiceItem {
  name: string;
  price?: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  items: ServiceItem[];
}
