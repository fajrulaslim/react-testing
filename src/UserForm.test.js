import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import UserForm from './UserForm'

test('it shows two inputs and a a button', () => {
    // render the component
    render(<UserForm  />);

    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    // Assertion - make sure the component is doing 
    // what the espect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument()
});

test("it calls onUserAdd when the form is submitted", () => {
    // NOT THE BEST IMPLEMENTATION
    // const argList = []
    // const callback = (...args) => {
    //     argList.push(args)
    // }

    const mock = jest.fn();

    // Try to render my component
    // render(<UserForm onUserAdd={callback} />)
    render(<UserForm onUserAdd={mock} />)

    // Find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole("textbox")
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    })
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    })

    // Simulate typoing in a name
    user.click(nameInput)
    user.keyboard("jane")

    // Simulate typing in an email
    user.click(emailInput)
    user.keyboard("jane@jane.com")

    // Find the button
    const button = screen.getByRole("button")

    // Simulate clicking the button
    user.click(button)

    // Assestion to make sure 'onUserAdd' gets called with email/name
    // expect(argList).toHaveLength(1)
    // expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' })
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' })
})