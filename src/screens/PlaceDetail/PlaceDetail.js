// import React from 'react';
// import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

// const placeDetail = props => {

//     let modalContent = null;

//     if (props.selectedPlace) {
//         modalContent = (
//             <View>
//                 <Image source={props.selectedPlace.placeImage} />
//                 <Text>{props.selectedPlace.placeName}</Text>
//             </View>
//         )
//     }

//     return (
//         <Modal visible={props.selectedPlace !== null} animationType="slide">
//             <View style={styles.modalContainer}>
//                 {modalContent}
//                 <View>
//                     <Button title="Delete" color="red" />
//                     <Button title="Close" /> 
//                 </View>
//             </View>
//         </Modal>
//     )

// }

// const styles = StyleSheet.create({
//     modalContainer: {
//         margin: 22
//     }
// })

// export default placeDetail;

import React, { Component } from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render () {
    let modalContent = null;

    return (
       // <Modal
    //   onRequestClose={props.onModalClosed}
    //   visible={props.selectedPlace !== null}
    //   animationType="slide"
    // >
    <View style={styles.container}>
      {/* {modalContent} */}
      <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
      </View>
      <View>
        <Button title="Delete" color="red" onPress={this.placeDeletedHandler} />
        {/* <Button title="Close" onPress={props.onModalClosed} /> */}
      </View>
    </View>
  // </Modal>
    )
  }

  // if (props.selectedPlace) {
  //   modalContent = (
  //     <View>
  //       <Image source={props.selectedPlace.image} style={styles.placeImage} />
  //       <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
  //     </View>
  //   );
  // }

};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);


