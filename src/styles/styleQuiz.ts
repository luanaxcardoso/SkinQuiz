import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fdf0f6', 
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf0f6',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8a2be2', 
    marginBottom: 20,
    textAlign: 'center',
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d63384', 
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#5a5a5a',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#d63384', 
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    shadowColor: '#d63384',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default styles;
