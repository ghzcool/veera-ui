import '../src/components/List.js';

export default {
  title: 'Components/List',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['ul', 'ol', 'dl'],
      defaultValue: 'ul',
    },
    plain: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

const templateList = `
  <li>Loomakasvatus</li>
  <li>Kultuuride kasvatamine<ul>
      <li>Oder</li>
      <li>Nisu<ul>
          <li>Talinisu</li>
          <li>Kevadnisu</li>
          <li>Dinkel</li>
        </ul>
      </li>
      <li>Rukis</li>
    </ul>
  </li>
  <li>Masinate ja seadmete kasutamine</li>
`;

const Template = ({ type, plain }) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <v-list type="${type}"${plain ? ' plain' : ''}>${templateList}</v-list>
  `;
  return element.querySelector('v-list');
};

export const Default = Template.bind({});
Default.args = {
  type: 'ul',
  plain: false,
};

export const Plain = Template.bind({});
Plain.args = {
  type: 'ul',
  plain: true,
};

export const Ordered = Template.bind({});
Ordered.args = {
  type: 'ol',
  plain: false,
};
