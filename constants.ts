import { Home, Info, Briefcase, Mail, Zap } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Features', href: '#features', icon: Zap },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'About', href: '#about', icon: Info },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const SCROLL_THRESHOLD = 50;