import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62727b'
  },
  header: {
    backgroundColor: '#29434e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  logo: {
    height: 45,
    width: 45,
  },
  separator: {
    height: 0.6,
    width: '100%',
    backgroundColor: '#cfcfcf'
  },
});



export const articleStyles = StyleSheet.create({
  image: {
    height: 80,
    width: 90,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 4
  },
  separator: {
    height: 7,
    backgroundColor: '#819ca9',
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    backgroundColor: '#eceff1'
  },
  textContainer: {
    flex: 0.8,
    height: 90,
    justifyContent: 'center',
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'serif'
  },
  imageContainer: {
    height: 90,
    flex: 0.3,
    justifyContent: 'center'
  },
  headerImage: {
    height: 200,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }
});

export default styles;