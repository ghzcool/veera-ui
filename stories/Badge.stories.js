import '../src/components/Badge.js';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      defaultValue: 'info',
    },
    hasIcon: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Info',
    },
  },
};

const Template = ({ variant, hasIcon, label }) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-badge variant="${variant}"${hasIcon ? ' has-icon="true"' : ''}>${label}</v-badge>
  `;
  return element.querySelector('v-badge');
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  variant: 'info',
  hasIcon: false,
  label: 'no icon',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  hasIcon: true,
  label: 'Info',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  hasIcon: true,
  label: 'Success',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  hasIcon: true,
  label: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  hasIcon: true,
  label: 'Error',
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  hasIcon: true,
  label: 'Neutral',
};
