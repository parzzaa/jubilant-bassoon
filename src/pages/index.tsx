import React from 'react';
import Layout from '../components/Layout';
import CommentForm from '../components/CommentForm';

const Home: React.FC = () => {
  return (
      <Layout>
        <h1 className="text-2xl font-bold">Telegram Miniapp</h1>
        <CommentForm />
      </Layout>
  );
};

export default Home;
