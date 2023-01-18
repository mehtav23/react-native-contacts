import React from "react";
import renderer from "react-test-renderer";
import ContactForm from "../../src/components/ContactFormComponent";
import { screen, render, fireEvent } from '@testing-library/react-native';

const saveFunction = jest.fn();

const data = {
    firstName: 'varun',
    lastName: 'mehta',
    primaryNumber: '+919999942760',
    email: 'varun@gmail.com'
}

describe('<ContactForm />', ()=> {
    it('should render the component when newForm is true', ()=> {
        const tree = renderer.create(<ContactForm onSave={saveFunction} isEditable={false} newForm={true} />).toJSON();
        expect(tree.children.length).toBe(9);
    });

    it('should render the component with editable is true', ()=> {
        const tree = renderer.create(<ContactForm onSave={saveFunction} isEditable={true} newForm={false} data={data} />).toJSON();
        expect(tree.children.length).toBe(9);
    });

    it('should update the first name', async ()=> {
        render(<ContactForm onSave={saveFunction} isEditable={true} newForm={false} data={data} />);
        fireEvent.changeText(screen.getByTestId('first-name-input'), 'Tarun');
        const firstName = await screen.findByTestId('first-name-input')
        expect(firstName.props.value).toBe('Tarun');
    });
    it('should update the last name', async ()=> {
        render(<ContactForm onSave={saveFunction} isEditable={true} newForm={false} data={data} />);
        fireEvent.changeText(screen.getByTestId('last-name-input'), 'Sharma');
        const lastName = await screen.findByTestId('last-name-input')
        expect(lastName.props.value).toBe('Sharma');
    });
    it('should update the primary number', async ()=> {
        render(<ContactForm onSave={saveFunction} isEditable={true} newForm={false} data={data} />);
        fireEvent.changeText(screen.getByTestId('primary-number-input'), '+912345612345');
        const primaryNumber = await screen.findByTestId('primary-number-input')
        expect(primaryNumber.props.value).toBe('+912345612345');
    });
    it('should update the email', async ()=> {
        render(<ContactForm onSave={saveFunction} isEditable={true} newForm={false} data={data} />);
        fireEvent.changeText(screen.getByTestId('email-input'), 'tarun@gmail.com');
        const email = await screen.findByTestId('email-input')
        expect(email.props.value).toBe('tarun@gmail.com');
    });

    it('should call onSave function passed to it ', async ()=> {
        render(<ContactForm onSave={saveFunction} isEditable={true} newForm={false} data={data} />);
        fireEvent.press(screen.getByTestId('save-button'));
        expect(saveFunction).toHaveBeenCalled();
    });

})

