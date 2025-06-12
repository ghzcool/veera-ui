import '../src/components/Loader.js';

export default {
  title: 'Components/Loader',
  tags: ['autodocs'],
  component: 'v-loader',
};

const Template = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-loader></v-loader>
  `;
  return element.querySelector('v-loader');
};

export const Default = Template.bind({});
Default.args = {};
