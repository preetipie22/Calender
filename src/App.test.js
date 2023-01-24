import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import Calender from "./Calender";
import userEvent from "@testing-library/user-event";
import moment from 'moment';


test("Test Date", () => {
  const view = render(<Calender />);
  const dateVal = new Date();
  const buttonEl = screen.getByPlaceholderText("Date");
  userEvent.click(buttonEl);
  //verifying datepicker element opens on click 
  const calendar = view.container.querySelector('.react-datepicker');
  expect(calendar).toBeInTheDocument();
  const todaysDateButton = screen.getByText(dateVal.getDate());
  userEvent.click(todaysDateButton);
  const inputText = screen.getByPlaceholderText("Date").getAttribute('value');
  //verify date is equal to the selected date
  expect(inputText).toContain(moment(dateVal).format("MM-DD-yyyy"));
});
