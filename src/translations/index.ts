import en from './en';
import ar from './ar';
import { Translation } from './types';

export const translations = { en, ar };

export type { Translation };
export type Language = keyof typeof translations; 