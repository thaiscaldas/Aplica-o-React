import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Thais Gonçalves"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam asperiores omnis assumenda modi laborum aut sapiente nostrum, placeat laboriosam, doloremque a dolore alias nihil incidunt vitae velit maxime in."
      />
      <Post 
        author="May Martins"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam asperiores omnis assumenda modi laborum aut sapiente nostrum, placeat laboriosam, doloremque a dolore alias nihil incidunt vitae velit maxime in."
      />

      <Post 
        author="Vitória Peres"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam asperiores omnis assumenda modi laborum aut sapiente nostrum, placeat laboriosam, doloremque a dolore alias nihil incidunt vitae velit maxime in."
      />

    </div>
  )
}


