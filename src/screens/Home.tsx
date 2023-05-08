import {FlatList, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {RootState} from '../store';
import {fetchPhotos} from '../store/actions/photo';

const HomeScreen = () => {
  const {photos} = useSelector((state: RootState) => state.photoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  return (
    <View>
      <Text>Home</Text>

      <FlatList
        data={photos}
        renderItem={({item}) => (
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: item.urls.regular}}
            />
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
