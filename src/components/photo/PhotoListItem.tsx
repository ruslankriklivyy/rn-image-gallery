import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

import {IPhoto} from 'types/entity/Photo';

interface IPhotoListItemProps {
  photoItem: IPhoto;
}

export const PhotoListItem: FC<IPhotoListItemProps> = ({photoItem}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.photosItem}
      onPress={() =>
        navigation.navigate('Photo' as never, {photoId: photoItem.id} as never)
      }>
      <Image style={styles.image} source={{uri: photoItem.urls.regular}} />
      {photoItem?.description && (
        <Text numberOfLines={2} style={styles.photoDescription}>
          {photoItem.description}
        </Text>
      )}
      <Text style={styles.photoAuthor}>{photoItem.user?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
});
