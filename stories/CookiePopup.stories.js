import '../src/components/Button.js';
import '../src/components/CookiePopup.js';

export default {
  title: 'Components/CookiePopup',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Meie veebileht kasutab küpsiseid',
    },
    body: {
      control: { type: 'text' },
      defaultValue: 'Meie veebisait kasutab küpsiseid. Valides "Nõustun", annate nõusoleku kõikide küpsiste kasutamiseks.',
    },
    acceptLabel: {
      control: { type: 'text' },
      defaultValue: 'Nõustun',
    },
    declineLabel: {
      control: { type: 'text' },
      defaultValue: 'Ei nõustu',
    },
    chooseLabel: {
      control: { type: 'text' },
      defaultValue: 'Valin küpsised',
    },
    saveLabel: {
      control: { type: 'text' },
      defaultValue: 'Salvestan',
    },
    necessaryLabel: {
      control: { type: 'text' },
      defaultValue: 'Vajalikud küpsised',
    },
    analyticsLabel: {
      control: { type: 'text' },
      defaultValue: 'Analüütilised küpsised',
    },
    marketingLabel: {
      control: { type: 'text' },
      defaultValue: 'Sihtturunduse küpsised',
    },
    tooltipLabel: {
      control: { type: 'text' },
      defaultValue: 'Selgitus küpsiste kohta',
    },
    policyLabel: {
      control: { type: 'text' },
      defaultValue: 'Lugege rohkem meie küpsiste kasutamise põhimõtetest',
    },
    policyLink: {
      control: { type: 'text' },
      defaultValue: '#',
    },
  },
};

const Template = (args) => {
  const element = document.createElement('div');
  let attrs = '';
  for (const [key, value] of Object.entries(args)) {
    if (value) attrs += ` ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}="${value}"`;
  }
  element.innerHTML = `<v-cookie-popup${attrs}></v-cookie-popup>`;
  return element.querySelector('v-cookie-popup');
};

export const Default = Template.bind({});
Default.args = {
  title: 'Meie veebileht kasutab küpsiseid',
  body: 'Meie veebisait kasutab küpsiseid. Valides "Nõustun", annate nõusoleku kõikide küpsiste kasutamiseks.',
  acceptLabel: 'Nõustun',
  declineLabel: 'Ei nõustu',
  chooseLabel: 'Valin küpsised',
  saveLabel: 'Salvestan',
  necessaryLabel: 'Vajalikud küpsised',
  analyticsLabel: 'Analüütilised küpsised',
  marketingLabel: 'Sihtturunduse küpsised',
  tooltipLabel: 'Selgitus küpsiste kohta',
  policyLabel: 'Lugege rohkem meie küpsiste kasutamise põhimõtetest',
  policyLink: '#',
};
