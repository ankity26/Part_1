// defineing components.
const Header = (props) => {
  return (
    <>
      <h1>{props.content.name}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.exercise.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.content.parts[0]} exercise={props.content.parts[0]} />
      <Part part={props.content.parts[1]} exercise={props.content.parts[1]} />
      <Part part={props.content.parts[2]} exercise={props.content.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  // console.log(props);
  return (
    <>
      <p>
        Total no of exercises{" "}
        {props.content.parts[0].exercises +
          props.content.parts[1].exercises +
          props.content.parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const content = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  // console.log("hello world");
  return (
    <div>
      <Header content={content} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

export default App;
