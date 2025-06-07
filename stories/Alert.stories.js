import '../src/components/Alert.js';

export default {
  title: 'Components/Alert',
  component: 'v-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
    title: { control: 'text' },
    closable: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    headerless: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    hasIcon: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    global: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    floating: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

const Template = ({ variant, title, message, closable, headerless, hasIcon, global, floating }) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-alert variant="${variant}" title="${title}"${closable ? ' closable="true"' : ''}${headerless ? ' headerless="true"' : ''}${hasIcon === false ? ' has-icon="false"' : ''}${global ? ' global="true"' : ''}${floating ? ' floating="true"' : ''}>${message}</v-alert>
  `;
  return element.querySelector('v-alert');
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: 'Info',
  message: 'This is an info alert!',
  closable: true,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Success',
  message: 'This is a success alert!',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Warning',
  message: 'This is a warning alert!',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Error',
  message: 'This is an error alert!',
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  variant: 'info',
  title: 'Without Icon',
  message: 'This is an alert without an icon!',
  hasIcon: false,
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  variant: 'info',
  message: 'This is an alert without a header!',
  headerless: true,
};

export const Global = Template.bind({});
Global.args = {
  variant: 'info',
  title: 'Global',
  message: 'This is an global alert!',
  global: true,
};

export const Floating = Template.bind({});
Floating.args = {
  variant: 'info',
  title: 'Floating',
  message: 'This is a floating alert!',
  closable: true,
  floating: true,
};
