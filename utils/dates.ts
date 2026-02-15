// This file contains date helper functions for the application
// Uses date-and-time library for date manipulation

import { format } from 'date-and-time';

format(new Date(), 'ddd, MMM DD YYYY'); // Wed, Jul 09 2025

const DateUtils = {
  formatDate: (date: Date, formatStr: string): string => {
    return format(date, formatStr);
  },
  nowDate: (): string => {
    const now = new Date();
    return format(now, 'ddd, MMM DD YYYY');
  }
};

export default DateUtils;