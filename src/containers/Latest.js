import React from 'react';
import { SafeAreaView } from 'react-native';
import RenderArticle from '../components/RenderArticle';
import endpoints from '../config/endpoints';


const Latest = () => {
  return (
    <SafeAreaView>
      <RenderArticle endpoint={endpoints.latest}/>
    </SafeAreaView>
  );
};

export default Latest;