// // import React from 'react';
// // import { StyleSheet, View } from 'react-native';

// // import PlaceInput from './src/components/PlaceInput/PlaceInput';
// // import PlaceList from './src/components/PlaceList/PlaceList';
// // import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// // import reactImage from './src/assets/react.png';

// // export default class App extends React.Component {

// //   state = {
// //     places: [],
// //     selectedPlace: null
// //   }

// //   placeAddedHandler = (placeName) => {
// //     this.setState(prevState => {
// //       return {
// //         places: prevState.places.concat({
// //           key: Math.random(),
// //           name: placeName,
// //           image: reactImage
// //         })
// //       }
// //     })
// //   }

// //   placeDeletedHandler = key => {
// //     this.setState(prevState => {
// //       return {
// //         places: prevState.places.filter((place) => {
// //           // return false will not be in the array
// //           return place.key !== key;
// //         })
// //       }
// //     })
// //   }

// //   placeSelectedHandler = key => {
// //     this.setState(prevState => {
// //       return {
// //         selectedPlace: prevState.places.find(place => {
// //           return place.key === key
// //         })
// //       }
// //     })
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <PlaceDetail selectedPlace={this.state.selectedPlace}/>
// //         <PlaceInput onPlaceAdded={this.placeAddedHandler}  />
// //         <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 26,
// //     justifyContent: 'flex-start'
// //   }
// // });

// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { connect } from 'react-redux';

// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace 
// } from './src/store/actions/index';

// class App extends Component {

//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   };

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });


// // connect accept two arguments (mapStateToProps, mapDispatchToProps)

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


// register screen and start app
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';


import configureStore from './src/store/configureStore';

const store = configureStore();

// register screens
Navigation.registerComponent("maxrn.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("maxrn.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("maxrn.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("maxrn.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("maxrn.SideDrawer", () => SideDrawer)


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'maxrn.AuthScreen',
    title: 'Login'
  }
})
