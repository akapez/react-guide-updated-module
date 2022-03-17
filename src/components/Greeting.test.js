import { render , screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('render Hello World as a text' , () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        // ... nothing
    
        //Assert
        const helloWorldText = screen.getByText('Hello World', {exact:false});
        expect(helloWorldText).toBeInTheDocument();
    });

    test('render Happy Weekend! button was not clicked', () => {
        render(<Greeting />);

        const beforeText = screen.getByText('Happy Weekend!', {exact:false});
        expect(beforeText).toBeInTheDocument();
    });

    test('render Changed! button was clicked', () => {
         //Arrange
         render(<Greeting />);
    
         //Act
         const buttonElement = screen.getByRole('button');
         userEvent.click(buttonElement);
     
         //Assert
         const outputText = screen.getByText('Changed!');
         expect(outputText).toBeInTheDocument();
    });

    test('does not render Hello World Happy Weekend! if the button was clicked', () => {
        //Arrange
        render(<Greeting />);
   
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        //Assert
        const outputText = screen.queryByText('Hello World Happy Weekend!!');
        expect(outputText).toBeNull();
   });
})

