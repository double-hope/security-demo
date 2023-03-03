import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRefreshToken, useAuth } from 'hooks';

const PersistLoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
      let isMounted = true;

      const verifyRefreshToken = async () => {
          try {
              await refresh();
          }
          catch (err) {
              console.error(err);
          }
          finally {
              isMounted && setIsLoading(false);
          }
      }

      !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

      return () => isMounted = false;
  }, [])

  // useEffect(() => {
  //     console.log(`isLoading: ${isLoading}`)
  //     console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
  // }, [isLoading])

  return (
      <>
          {!persist
              ? <Outlet />
              : isLoading
                  ? <p>Loading...</p>
                  : <Outlet />
          }
      </>
  );
}

export default PersistLoginPage;