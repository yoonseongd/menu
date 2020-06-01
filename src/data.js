// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: [],
//     };
//   }

//   componentDidMount() {
//     fetch("http://dys0707.dothome.co.kr/ajaxDB2.php")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           console.log("fetched");
//           this.setState({
//             isLoaded: true,
//             items: result,
//           });
//         },

//         (error) => {
//           console.log("fetch error");

//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;

//     const item = items.map((item) => (
//       <li key={item.name}>
//         {item.name} {item.price}
//       </li>
//     ));

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return <ul>{item}</ul>;
//     }
//   }
// }
// export default App;

// function DayData() {
//     const currentDay = new Date().getDay();
//     //일요일은 0
//     console.log(currentDay);

//     return (
//         const currentDay = this.currentDay;

//         //일 0

//         //월 1
//         if(currentDay==1){
//         const foodImg=<Image style={styles.image} source={require("../img/jang.jpg")} />

//         }
//         //화 2

//         //수 3

//         //목 4

//         //금 5

//         //토 6

//     );
//   }

//   export default DayData;
