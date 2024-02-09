import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MyButtonComponent } from './MyButton.component';

export default {
    title: 'MyButton',
    component: MyButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [MyButtonComponent],
        }),
    ],
} as Meta;

const Template: Story<MyButtonComponent> = (args: MyButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
};