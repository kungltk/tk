import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentLists from './Student-lists'
class App extends Component {
  render() {
    return (
      <div className="container">
        <StudentLists />
      </div>
    );
  }

}
export default App ;


// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class App extends Component {
//   state = {
//     user: "Jeerawuth",
//     password: "thisIsAbook",
//     address: {
//       houseNo: "123",
//       province: "กทม."
//     }
//   };
//   userClick = () => {
//     this.setState({
//       user: "Ronaldo",
//       password: "IloveyouMoreToday123",
//     });
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-sm-6 mx-auto mt-5">
//             <div className="card ml-5 mr-5">
//               <div className="card-header text-right">
//                 <button className="btn btn-success btn-sm" 
//                 onClick={this.userClick}>คลิกผมหน่อย</button>
//               </div>
//               <div className="card-body">
//                 user: <span className="ml-2">{this.state.user}</span> <br />
//                 password: <span className="ml-2">{this.state.password}</span> <br />
//                 address: <span className="ml-2">{this.state.address.houseNo}</span>
//                 <span className="ml-1"> {this.state.address.province} </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;




// import Interview from './components/Interview'

// function App() {
//   return (
//     <div>
//       <Interview />
//     </div>
//   )
// }

// export default App








// import React from 'react';
// import Post from './Post';
// import Comment from './Comment';
// const App = () => {
//   return (
//     <div>
//       <Post id="2">
//         <Comment userId="1" data="5 stars" />
//         <Comment userId="8" data="4 stars" />
//         <Comment userId="21" data="5 stars" />
//         <Comment userId="30" data="1 stars" />
//       </Post>
//     </div>
//   )
// }
// export default App;
