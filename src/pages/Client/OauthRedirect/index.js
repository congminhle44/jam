/** @format */
import { useHistory, useLocation } from 'react-router';

import Spinner from '@/components/Spinner';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { addUserInfoAtom } from '@/store/login';
import { addNewTokenAtom } from '@/store/token';
import { addNewRefreshTokenAtom } from '@/store/refreshToken';
import jwtDecode from 'jwt-decode';

import { omit } from 'lodash';

const OauthRedirect = () => {
  const history = useHistory();
  const search = useLocation().search;

  const accessToken = new URLSearchParams(search).get('accessToken');
  const refreshToken = new URLSearchParams(search).get('refreshToken');

  const [, addUserInfo] = useAtom(addUserInfoAtom);
  const [, addAccessToken] = useAtom(addNewTokenAtom);
  const [, addRefreshToken] = useAtom(addNewRefreshTokenAtom);

  useEffect(() => {
    addUserInfo(omit(jwtDecode(accessToken), ['iat', 'exp']));
    addAccessToken(accessToken);
    addRefreshToken(refreshToken);
    history.push('/');
    // eslint-disable-next-line
  }, [history, accessToken, refreshToken]);

  return <Spinner />;
};

export default OauthRedirect;
