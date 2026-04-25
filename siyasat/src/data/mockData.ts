import type { Thesis } from '../types';

export const mockTheses: Thesis[] = Array(5).fill({
  id: '11213',
  title: 'A Vector Autoregressive (VAR) Model for the Hourly Forecasting of Climatological Data in General Santos City',
  authors: 'Quimosing, J., Into, F., et. al.',
  year: '2025',
  department: 'DMPCS',
  degree: 'Bachelor of Science in Computer Science',
  college: 'College of Sciences and Mathematics',
  abstract: 'Through multivariate time series exploration, the Vector Autoregressive (VAR) model was developed to predict marked climatological data for General Santos City, Philippines. The dataset, which covered the period from January 01, 2001, until June 30, 2024, was obtained from the NASA POWER API and included crucial variables...'
});