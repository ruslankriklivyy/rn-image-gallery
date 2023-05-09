import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect, useState, FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from 'src/store';
import {fetchPhotos} from 'store/actions/photo';
import {PhotoListItem} from './PhotoListItem';

interface IListFooterProps {
  isLoading: boolean;
  isMore: boolean;
}

const PER_PAGE = 10;

const RenderEmpty = () => (
  <View>
    <Text>No more data</Text>
  </View>
);

const ListFooter: FC<IListFooterProps> = ({isLoading, isMore}) => (
  <View style={styles.photosFooter}>
    {isLoading && <ActivityIndicator size={'large'} />}
    {!isLoading && isMore && <Text>No more data</Text>}
  </View>
);

export const PhotosList = () => {
  const [page, setPage] = useState(1);
  const {photos, photosTotal, isLoading} = useSelector(
    (state: RootState) => state.photoReducer,
  );
  const dispatch = useDispatch();

  const fetchMorePhotos = () => {
    if (photosTotal >= photos.length) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchPhotos({page, per_page: PER_PAGE}));
  }, [page]);

  return (
    <FlatList
      contentContainerStyle={styles.photos}
      numColumns={2}
      onEndReachedThreshold={0.2}
      onEndReached={fetchMorePhotos}
      snapToAlignment={'center'}
      data={photos}
      ListEmptyComponent={RenderEmpty}
      ListFooterComponent={() => (
        <ListFooter
          isLoading={isLoading}
          isMore={photosTotal <= photos.length}
        />
      )}
      renderItem={({item}) => <PhotoListItem photoItem={item} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  photosFooter: {
    height: 35,
  },
});
