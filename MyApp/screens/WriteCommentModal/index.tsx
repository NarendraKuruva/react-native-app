import { observer } from "mobx-react";
import React, { ReactElement } from "react";
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const WriteComment = (props: ModalProps): ReactElement => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.isOpen}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      props.setIsOpen;
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <TextInput
          className={"border-solid border-gray-900 border"}
          // onChangeText={onChangeValue}
          multiline={true}
          placeholder={"Search Contacts - (Max 250 char)"}
          maxLength={250}
          numberOfLines={4}
          keyboardType={"default"}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={props.setIsOpen}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

export default observer(WriteComment);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
