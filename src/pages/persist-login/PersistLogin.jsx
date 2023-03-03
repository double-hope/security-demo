import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth, useLocalStorage } from 'hooks';
import { useLogin } from 'hooks/useLogin';

const PersistLoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const login = useLogin();
  const { auth } = useAuth();
  const [ session ] = useLocalStorage('session', '');

  useEffect(() => {
      let isMounted = true;

      const relogin = async () => {
        try {
          await login();
        }
        catch (err) {
          console.error(err);
        }
        finally {
            isMounted && setIsLoading(false);
        }
      }

      !auth?.accessToken && !session?.user?.expired ? relogin() : setIsLoading(false);

      return () => isMounted = false;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <>
          {isLoading
            ? <p>Loading...</p>
            : <Outlet />
          }
      </>
  );
}

export default PersistLoginPage;