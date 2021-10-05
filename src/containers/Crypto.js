import React from 'react';
import { SafeAreaView } from 'react-native';
import RenderArticle from '../components/RenderArticle';
import endpoints from '../config/endpoints';


const Crypto = () => {
  return (
    <SafeAreaView>
      <RenderArticle endpoint={endpoints.crypto}/>
    </SafeAreaView>
  );
};

export default Crypto;