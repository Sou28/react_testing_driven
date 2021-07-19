import {render, screen} from "@testing-library/react"
import LoginForm from "./LoginForm"

it('should have a username and a password field, also a submit button', () => {
    render(<LoginForm/>)

    const usernameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();


});