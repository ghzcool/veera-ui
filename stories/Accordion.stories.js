import '../src/components/Accordion.js';

export default {
    title: 'Components/Accordion',
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'lg'],
            defaultValue: 'sm',
        },
        iconAlign: {
            control: { type: 'select' },
            options: ['left', 'right'],
            defaultValue: 'right',
        },
        title: {
            control: { type: 'text' },
            defaultValue: 'Accordion title',
        },
        content: {
            control: { type: 'text' },
            defaultValue: 'Accordion content goes here.',
        },
    },
};

const Template = ({ disabled, size, title, content, iconAlign, expanded }) => {
    const element = document.createElement('div');
    console.log(title);
    element.innerHTML = `
    <v-accordion${disabled ? ' disabled="true"' : ''}${iconAlign === 'left' ? ' icon-align="left"' : ''}${expanded ? ' expanded="true"' : ''} size="${size}" title="${title}">
      ${content}
    </v-accordion>
  `;
    return element.querySelector('v-accordion');
};

export const Expanded = Template.bind({});
Expanded.args = {
    expanded: true,
    disabled: false,
    size: 'sm',
    title: 'Accordion title',
    content: 'Accordion content goes here.'
};

export const Large = Template.bind({});
Large.args = {
    expanded: false,
    disabled: false,
    size: 'lg',
    title: 'Accordion title',
    content: 'Accordion content goes here.'
};

export const Disabled = Template.bind({});
Disabled.args = {
    expanded: false,
    disabled: true,
    size: 'sm',
    title: 'Accordion title',
    content: 'Accordion content goes here.'
};
