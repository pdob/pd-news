import React from 'react';
import { SafeAreaView } from 'react-native';
import RenderArticle from '../components/RenderArticle';
import endpoints from '../config/endpoints';


const Coronavirus = ({ navigation }) => {
  return (
    <SafeAreaView>
      <RenderArticle endpoint={endpoints.coronavirus}/>
    </SafeAreaView>
  );
};

export default Coronavirus;