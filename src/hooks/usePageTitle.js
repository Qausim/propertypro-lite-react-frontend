import { useEffect } from 'react';
import { appName } from '../utils/constants';
import { capitalize } from '../utils/textUtils';


const usePageTitle = (title) => {
  const defaultTitle = capitalize(appName);
  useEffect(() => {
    document.title = `${capitalize(title)} - ${defaultTitle}`;
    return () => {
      document.title = defaultTitle;
      console.log(document.title);
    }
  });
}
 
export default usePageTitle;