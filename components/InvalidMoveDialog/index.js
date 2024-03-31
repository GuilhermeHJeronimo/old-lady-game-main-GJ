import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const InvalidMoveDialog = ({isOpen, onClickClose}) => {
  const {centeredView, modalView, button, buttonClose, textStyle, modalText} = styles;

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        <View style={centeredView}>
            <View style={modalView}>
                <Text style={modalText}>Não é possível jogar aqui!</Text>
                <Pressable style={[button, buttonClose]} onPress={onClickClose}>
                    <Text style={textStyle}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'purple',
    textTransform: 'uppercase',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'purple',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default InvalidMoveDialog;
