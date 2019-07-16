// Stateless functional component
// const SubTitle = (props) => {
//   return (props.subtitle && <p>{props.subtitle}</p>);
// }

// class SubTitle extends React.Component {
//   render() {
//     return (this.props.subtitle && <p>{this.props.subtitle}</p>);
//   }
// }

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handlePlusOne = this.handlePlusOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: 0
//     }
//   }
//   handlePlusOne() {
//     console.log('plus');
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }));
//   }
//   handleMinusOne() {
//     console.log('minus');
//     this.setState((prevState) => ({
//       count: prevState.count - 1
//     }));
//   }
//   handleReset() {
//     console.log('reset');
//     this.setState((prevState) => ({
//       count: 0
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handlePlusOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     );
//   }
// }