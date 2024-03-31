import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const EndGameDialog = ({resultText, isOpen, onClickYes, onClickNo}) => {
  const {centeredView, modalView, button, buttonYes, buttonNo, buttonText, modalText, modalTitle} = styles;

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        <View style={centeredView}>
            <View style={modalView}>
                <Text style={modalTitle}>{resultText}</Text>
                <Text style={modalText}>Deseja jogar novamente?</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', gap: '30px'}}>
                  <Pressable style={[button, buttonYes]} onPress={onClickYes}>
                      <Text style={buttonText}>Sim</Text>
                  </Pressable>
                  <Pressable style={[button, buttonNo]} onPress={onClickNo}>
                      <Text style={buttonText}>Não</Text>
                  </Pressable>
                </View>
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
  buttonYes: {
    backgroundColor: 'green',
  },
  buttonNo: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'purple',
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
    textTransform: 'uppercase',
  },
});

export default EndGameDialog;
