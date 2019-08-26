import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#246fff',
  colorSecondary: '#5200a4',

  // UI
  appBg: '#246fff',
  appContentBg: '#fff',
  appBorderColor: 'rgba(0, 0, 0, 0.15)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#fff',
  barBg: '#fff',

  // Form colors
  inputBg: '#fff',
  inputBorder: 'rgba(255, 255, 255, 0.75)',
  inputTextColor: '#fff',
  inputBorderRadius: 4,

  brandTitle: 'Cheesecake Labs UI Toolkit',
  brandUrl: 'https://cheesecakelabs.com',
  brandImage: 'https://cheesecakelabs.com/wp-content/themes/cheesecake_labs/images/cheesecake-logo.svg',
});