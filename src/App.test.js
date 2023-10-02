import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Weather App");
    expect(headingElement).toBeInTheDocument();

    const selectElement = screen.getByTestId("select");
    expect(selectElement).toBeInTheDocument();

    const gridContainer = document.querySelector("main");
    expect(gridContainer).toBeInTheDocument();

  });
});
