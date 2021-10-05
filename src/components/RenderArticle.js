import React, { 
  useState, 
  useEffect, 
  useCallback 
} from 'react';
import { 
  ActivityIndicator,
  FlatList, 
  Image, 
  Pressable, 
  RefreshControl ,
  View, 
  Text, 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { articleStyles } from '../config/styles/styles';


const RenderArticle = ({ endpoint }) => {
  
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [headers, setHeaders] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {      
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json.articles);
      setHeaders(json.articles[0]);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }    

  useEffect(() => {
    getData();
  }, [refreshing]);  

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);

  const Item = ({ title, url, urlToImage }) => (
    <Pressable onPress={() => navigation.navigate('Web', {url})}>
      <View style={articleStyles.container}>
        <View style={articleStyles.imageContainer}>
          <Image 
            source={{uri: urlToImage || 'https://bit.ly/3iODmdu'}}
            style={articleStyles.image}
          />
        </View>
        <View style={articleStyles.textContainer}>
          <Text style={articleStyles.textContainer}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item 
      title={item.title} 
      url={item.url}
      urlToImage={item.urlToImage}
    />
  );

  const ListHeader = () => {
    return (    
      <Pressable 
        onPress={() => navigation.navigate('Web', {url: headers.url})}
      >
        <View style={{backgroundColor: '#eceff1'}}>
          <Image 
            source={{uri: headers.urlToImage || 'https://bit.ly/3iODmdu'}}
            style={articleStyles.headerImage}
          />
          <Text style={articleStyles.headerText}>{headers.title}</Text>
        </View>
        <View style={articleStyles.separator}/>
      </Pressable>
    );
  };

  return (
    <View>
      {isLoading ? <ActivityIndicator size='large' color='grey'/> : (
        <FlatList 
          data={data.slice(1)}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.title + Math.random().toString()}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          extraData={refreshing}
          ListHeaderComponent={ListHeader}
        />
      )}
    </View>
  );
};

const Separator = () => (
  <View style={articleStyles.separator}/>
);

export default RenderArticle;