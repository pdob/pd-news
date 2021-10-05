import React from 'react';
import { SafeAreaView } from 'react-native';
import RenderArticle from '../components/RenderArticle';
import endpoints from '../config/endpoints';


const Technology = () => {
  return (
    <SafeAreaView>
      <RenderArticle endpoint={endpoints.technology}/>
    </SafeAreaView>
  );
};

export default Technology;