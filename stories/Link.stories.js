import '../src/components/Link.js';

export default {
  title: 'Components/Link',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md'],
      defaultValue: 'md',
    },
    hasIcon: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    href: {
      control: { type: 'text' },
      defaultValue: '#',
    },
    icon: {
      control: { type: 'text' },
      defaultValue: 'open_in_new',
    },
    iconAriaLabel: {
      control: { type: 'text' },
      defaultValue: 'Avaneb uuel vahelehel',
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Link',
    },
    target: {
      control: { type: 'text' },
      defaultValue: '_blank',
    },
  },
};

const Template = ({ size, hasIcon, href, icon, iconAriaLabel, label, target }) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-link size="${size}"${hasIcon ? ' has-icon' : ''} href="${href}" icon="${icon}" icon-aria-label="${iconAriaLabel}" target="${target}">${label}</v-link>
  `;
  return element.querySelector('v-link');
};

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  hasIcon: false,
  href: '#',
  icon: 'open_in_new',
  iconAriaLabel: 'Avaneb uuel vahelehel',
  label: 'Link',
  target: '_self',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  size: 'md',
  hasIcon: true,
  href: '#',
  icon: 'open_in_new',
  iconAriaLabel: 'Avaneb uuel vahelehel',
  label: 'Link',
  target: '_self',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  hasIcon: true,
  href: '#',
  icon: 'open_in_new',
  iconAriaLabel: 'Avaneb uuel vahelehel',
  label: 'Small link',
  target: '_self',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  hasIcon: false,
  href: '#',
  icon: 'open_in_new',
  iconAriaLabel: 'Avaneb uuel vahelehel',
  label: 'XS link',
  target: '_self',
};
