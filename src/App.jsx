import { Post } from './Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thais Gonçalves"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi vel corporis aut ullam minima aliquam delectus ducimus totam ratione quae, sequi ut, accusamus debitis voluptatem optio? Cumque necessitatibus libero voluptatem?"
          />
          <Post
            author="May Martins"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi vel corporis aut ullam minima aliquam delectus ducimus totam ratione quae, sequi ut, accusamus debitis voluptatem optio? Cumque necessitatibus libero voluptatem?"
          />
          <Post
            author="Vitória Peres"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi vel corporis aut ullam minima aliquam delectus ducimus totam ratione quae, sequi ut, accusamus debitis voluptatem optio? Cumque necessitatibus libero voluptatem?"
          />
        </main>
      </div>

    </div>
  )
}


