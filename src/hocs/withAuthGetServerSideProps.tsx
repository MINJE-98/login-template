import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import axios from 'axios';

import { SERVER_URL } from '@Environment';

import UserInterface from '@Lib/db/interface/UserInterface';

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user: UserInterface
) => Promise<P>;

type WithAuthServerSidePropsResult = GetServerSidePropsResult<{
  [key: string]: any;
}>;

export default function withAuthServerSideProps(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    try {
      const { headers } = ctx.req;
      const cookie = !headers.cookie ? '' : headers.cookie;
      const { data } = await axios.get(`${SERVER_URL}/api/user`, {
        withCredentials: true,
        headers: {
          cookie,
        },
      });

      if (incomingGSSP) {
        const incomingGSSPResult = await incomingGSSP(ctx, data);

        if ('props' in incomingGSSPResult) {
          return { props: { ...incomingGSSPResult.props, initUserInfo: data } };
        }

        if ('redirect' in incomingGSSPResult) {
          return { redirect: { ...incomingGSSPResult.redirect } };
        }

        if ('notFound' in incomingGSSPResult) {
          return { notFound: incomingGSSPResult.notFound };
        }
      }
      return {
        props: {
          initUserInfo: data.user,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/signin',
          permanent: true,
        },
      };
    }
  };
}
