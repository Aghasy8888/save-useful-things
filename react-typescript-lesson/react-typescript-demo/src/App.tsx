import "./App.css";
import {
  Greet,
  PersonList,
  Person,
  Status,
  Heading,
  Oscar,
  Button,
  Input,
  Login,
  Private,
  Profile,
} from "./components";

function App() {
  const personName = {
    firstName: "Kaka",
    lastName: "Ricardo",
  };
  const nameList = [
    {
      firstName: "Kaka",
      lastName: "Ricardo",
    },
    {
      firstName: "Ronaldo",
      lastName: "Cristiano",
    },
    {
      firstName: "Benzema",
      lastName: "Karim",
    },
  ];

  return (
    <div className="App">
      <Greet name="Armen" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicabrio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log(event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Private isLoggedIn={true} Component={Profile}/>
    </div>
  );
}

export default App;
