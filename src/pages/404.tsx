import React from 'react';

import Layout from '@src/components/Layout';
import Seo from '@src/components/Seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404 :q" />
    <h1>이런!</h1>
    <p>막다른 길로 오셨어요 😢</p>
  </Layout>
);

export default NotFoundPage;
