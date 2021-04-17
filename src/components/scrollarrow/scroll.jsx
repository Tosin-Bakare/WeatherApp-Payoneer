import React from "react";
// import ArrowKeysReact from "arrow-keys-react";

const ScrollArrow = (scrollOffset) => {
  this.current.scrollLeft += scrollOffset;
  <div
    className="inline-flex mt-12"
    style={{
      marginLeft: "20%",
      fontSize: "50px",
      justifyContent: "space-between",
    }}
  >
    <div className="bold" style={{}}>
      <span
        className="glyphicon glyphicon-arrow-left"
        onClick={() => ScrollArrow(-5)}
      ></span>
    </div>
    <div className="" style={{ marginLeft: "200%" }}>
      <span
        className="glyphicon glyphicon-arrow-right"
        onClick={() => ScrollArrow(5)}
      ></span>
    </div>
  </div>;
};

export default ScrollArrow;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // content: "Use arrow keys on your keyboard!",
//     };
//     ArrowKeysReact.config({
//       left: () => {
//         this.setState({
//           // content: "left key detected.",
//         });
//       },
//       right: () => {
//         this.setState({
//           // content: "right key detected.",
//         });
//       },
//     });
//   }
//   render() {
//     return (
//       <div {...ArrowKeysReact.events} tabIndex="1">
//         {this.state.content}
//         <div
//           className="inline-flex mt-12"
//           style={{
//             marginLeft: "20%",
//             fontSize: "50px",
//             justifyContent: "space-between",
//           }}
//         >
//           <div className="bold" style={{}}>
//             <span className="glyphicon glyphicon-arrow-left"></span>
//           </div>
//           <div className="" style={{ marginLeft: "200%" }}>
//             <span className="glyphicon glyphicon-arrow-right"></span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
