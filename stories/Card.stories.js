import '../src/components/Card.js';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      defaultValue: 'md',
    },
    flat: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    content: {
      control: { type: 'text' },
      defaultValue: 'Card content.',
    },
  },
};

const Template = ({ variant, size, flat, content }) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-card variant="${variant}" size="${size}"${flat ? ' flat' : ''}>${content}</v-card>
  `;
  return element.querySelector('v-card');
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  flat: false,
  content: 'Card content.',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  flat: false,
  content: 'Secondary card.',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'md',
  flat: false,
  content: 'Tertiary card.',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'sm',
  flat: false,
  content: 'Small card.',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'primary',
  size: 'md',
  flat: true,
  content: 'Flat card.',
};
