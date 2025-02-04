import { FormSearch } from './Components/FormSearch';

const api_url = 'http://www.omdbapi.com/?apikey=a3142094&s=disney';
const api_key = 'a3142094';
export const App = () => {
  return (
    <div className='app_container'>
      <FormSearch />
    </div>
  );
};
