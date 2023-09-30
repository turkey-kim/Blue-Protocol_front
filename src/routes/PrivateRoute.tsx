import {ReactElement, useEffect, useState} from 'react';
import {checkToken} from '../api/auth';
import {Navigate} from 'react-router';

interface Props {
  children: ReactElement;
}

function PrivateRoute({children}: Props): any {
  let [isLoading, setIsLoading] = useState(true);
  let [auth, setAuth] = useState(false);
  useEffect(() => {
    async function fetch() {
      setAuth(await checkToken());
      setIsLoading(false);
    }
    fetch();
  }, []);

  if (isLoading && !auth) return <>Loading...</>;
  if (!isLoading && !auth) return <Navigate to="/" />;
  if (!isLoading && auth) return children;
}

export default PrivateRoute;
