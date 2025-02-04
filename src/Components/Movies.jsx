import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { ItemMovie } from './ItemMovie';

export const Movies = () => {
  const { isLoading, data } = useContext(DataContext);
  return (
    <div>
      {isLoading
        ? ''
        : data.map((item) => (
            <ItemMovie
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              type={item.Type}
              poster={item.Poster}
            />
          ))}
    </div>
  );
};
