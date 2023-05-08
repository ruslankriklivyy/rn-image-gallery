import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {RootState} from '../store';
import {fetchPhotos} from '../store/actions/photo';
import {useLinkTo} from '@react-navigation/native';

const HomeScreen = () => {
  const [page, setPage] = useState(1);
  const {photos} = useSelector((state: RootState) => state.photoReducer);
  const dispatch = useDispatch();
  const linkTo = useLinkTo();

  const fetchMorePhotos = () => {
    console.log('scroll');
  };

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photos</Text>

      <FlatList
        contentContainerStyle={styles.photos}
        numColumns={2}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMorePhotos}
        snapToAlignment={'center'}
        data={photos}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.photosItem}
            onPress={() => linkTo('/Photo')}>
            <Image style={styles.image} source={{uri: item.urls.regular}} />
            {item?.description && (
              <Text numberOfLines={2} style={styles.photoDescription}>
                {item.description}
              </Text>
            )}
            <Text style={styles.photoAuthor}>{item.user?.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
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
  photos: {
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  photosItem: {
    width: '44%',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  photoDescription: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
  },
  photoAuthor: {
    color: '#000',
    fontStyle: 'italic',
    fontSize: 14,
  },
});

export default HomeScreen;
