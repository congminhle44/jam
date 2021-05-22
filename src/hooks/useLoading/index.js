/** @format */

import { useAtom } from 'jotai';

import { loadingAtom } from '@/store/loading';

const useLoading = () => {
  const [loading, setLoading] = useAtom(loadingAtom);

  return { loading, setLoading };
};

export default useLoading;
