import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../../types';
import SearchResult from '../../components/SearchResult/SearchResult';
import styles from './SearchPage.module.css';

function SearchPage(): JSX.Element {
  const [results, setResults] = useState<Search | null>(null);

  async function handleSearch(artist: string) {
    const url = `http://localhost:4001/graphql?query=query%20artist%20%7B%0A%20%20search%20%7B%0A%20%20%20%20artists(query%3A%20"${artist}")%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20releaseGroups%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20coverArtArchive%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20images%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20image%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=artist`;
    fetch(url)
      .then((response) => response.json())
      .then(setResults);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <SearchResult onSubmit={handleSearch} />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main__results}>
          {results?.data.search.artists.edges.map((result) => {
            return (
              <div className={styles.main__group}>
                {result.node.releaseGroups.edges.map((group) => {
                  return (
                    <div className={styles.main__images}>
                      {group.node.coverArtArchive.images.map((image) => {
                        return (
                          <Link to="./DetailsPage">
                            <img
                              className={styles.main__image}
                              src={image.image}
                              key={image.image}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default SearchPage;
