import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchOnePhoto} from 'store/actions/photo';
import {RootState} from '../store';

const PhotoScreen = () => {
  const {onePhoto} = useSelector((state: RootState) => state.photoReducer);
  const dispatch = useDispatch();
  const {params} = useRoute();
  const navigation = useNavigation();

  const photoId = (params as Record<string, string>)?.photoId;

  useEffect(() => {
    dispatch(fetchOnePhoto({id: photoId}));
  }, [photoId]);

  return (
    <View>
      <Image style={styles.image} source={{uri: onePhoto?.urls.full}} />

      <View style={styles.info}>
        {onePhoto?.description && (
          <Text style={styles.description}>{onePhoto.description}</Text>
        )}

        <Text style={styles.author}>{onePhoto?.user.name}</Text>

        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Icon name={'ios-chevron-back-sharp'} size={28} color={'#000'} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  info: {
    padding: 20,
  },
  description: {
    color: '#000',
    fontSize: 28,
    fontWeight: '600',
  },
  author: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'italic',
  },
  back: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
});

export default PhotoScreen;
