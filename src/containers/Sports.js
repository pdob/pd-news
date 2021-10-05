import React from 'react';
import { SafeAreaView } from 'react-native';
import RenderArticle from '../components/RenderArticle';
import endpoints from '../config/endpoints';


const Sports = () => {
  return (
    <SafeAreaView>
      <RenderArticle endpoint={endpoints.sports}/>
    </SafeAreaView>
  );
};

export default Sports;