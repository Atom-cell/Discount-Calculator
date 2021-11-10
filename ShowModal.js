import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Modal, Image } from "react-native";

const ShowModal = ({ hideModal, history }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const history = [{ originalPrice: 120, discount: 20, finalPrice: 100 }];
  //   const history = [11, 22, 33];

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text>Original Price - Discount = Final Price</Text> */}
            {history.map((x, index) => {
              return (
                <View style={styles.info} key={index}>
                  <Text>
                    Original Price={" " + x.originalPrice + " "}
                    Discount={" " + x.discountPercentage + "% "}
                    Final Price={" " + x.finalPrice}
                  </Text>
                  {/* <Text>{x.discontPercentage}</Text>
                  <Text>{x.finalPrice}</Text> */}
                </View>
              );
            })}
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible);
                hideModal();
              }}
            >
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    bottom: "20%",
    left: "5%",
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 1,
    //   height: 4,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 4,
    elevation: 15,
  },
  info: {
    padding: 10,
  },
  //   button: {
  //     borderRadius: 20,
  //     paddingHorizontal: 25,
  //     paddingVertical: 10,
  //     elevation: 2,
  //   },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#F2583E",
    padding: 30,
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 30,
    textAlign: "center",
  },
});

export default ShowModal;
