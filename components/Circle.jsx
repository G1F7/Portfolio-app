// This component will be used to create a circle component that can be reused with in the app for styling.
// passing styles as props to make it dynamic
const Circle = (props) => {
  return <div className="circle" style={{ ...props }}></div>;
};

export default Circle;
