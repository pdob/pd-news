import React from 'react';
import { SafeAreaView } from 'react-native';
import RenderArticle from '../components/RenderArticle';
import endpoints from '../config/endpoints';


const Business = () => {
  return (
    <SafeAreaView>
      <RenderArticle endpoint={endpoints.business}/>
    </SafeAreaView>
  );
};

export default Business;