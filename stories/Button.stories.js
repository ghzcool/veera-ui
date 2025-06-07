import '../src/components/Button.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'success', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    iconOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  }
};

const Template = ({ variant, size, disabled, iconOnly, fullWidth, label }) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-button variant="${variant ?? 'primary'}"${size ? ' size="' + size + '"' : ''}${disabled ? ' disabled="true"' : ''}${iconOnly ? ' icon-only="true"' : ''}${fullWidth ? ' full-width="true"' : ''}>${label}</v-button>
  `;
  return element.querySelector('v-button');
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'lg'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'sm'
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  label: 'forest',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  label: 'Button',
};