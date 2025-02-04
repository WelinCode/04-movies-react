import { FormSearch } from './Components/FormSearch';
import { Movies } from './Components/Movies';

const api_url = 'http://www.omdbapi.com/?apikey=a3142094&s=disney';
const api_key = 'a3142094';
export const App = () => {
  return (
    <div className='app_container max-w-screen px-[80px] bg-red-400'>
      <FormSearch />
      <Movies />
    </div>
  );
};
