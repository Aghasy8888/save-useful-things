import StyledButton, { FansyButton, SubmitButton } from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StyledButton type="submit">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FansyButton as='a'>Styled Fansy Button</FansyButton>
      <div>
        <br />
      </div>
      <SubmitButton >Styled Submit Button</SubmitButton>
    </div>
  );
}

export default App;
