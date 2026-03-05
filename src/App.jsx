import React from 'react';
import { Header } from './components/header/header';
import { Footer } from './components/footer/Footer';
import { Profile } from './components/profile/Profile';
import './index.css';

export function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Profile
          avatar='https://randomuser.me/api/portraits/women/44.jpg'
          name='Anna Caroline Dias'
          bio='Desenvolvedora Full-Stack'
          phone='551599999-9999'
          email='anna.caroline.dias@gmail.com'
        />
        <Profile
          avatar='https://randomuser.me/api/portraits/men/32.jpg'
          name='João Silva'
          bio='Desenvolvedor Front-End'
          phone='551598888-8888'
          email='joao.silva@gmail.com'
          theme='male'
        />
        <Profile
          avatar='https://randomuser.me/api/portraits/women/22.jpg'
          name='Maria Oliveira'
          bio='Desenvolvedora Back-End'
          phone='551597777-7777'
          email='maria.oliveira@gmail.com'
        />
        <Profile
          avatar='https://randomuser.me/api/portraits/women/65.jpg'
          name='Ana Costa'
          bio='Desenvolvedora Mobile'
          phone='551596666-6666'
          email='ana.costa@gmail.com'
        />

        <Profile
          avatar='https://randomuser.me/api/portraits/men/44.jpg'
          name='Carlos Pereira'
          bio='Desenvolvedor DevOps'
          phone='551595555-5555'
          email='carlos.pereira@gmail.com'
          theme='male'
        />

        <Profile
          avatar='https://randomuser.me/api/portraits/men/22.jpg'
          name='Pedro Santos'
          bio='Desenvolvedor de Jogos'
          phone='551594444-4444'
          email='pedro.santos@gmail.com'
          theme='male'
        />
      </div>
      <Footer />
    </>
  );
}
