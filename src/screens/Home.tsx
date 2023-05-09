import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {PhotosList} from 'components/photo/PhotosList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photos</Text>

      <PhotosList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
    fontSize: 28,
  },
});

export default HomeScreen;
