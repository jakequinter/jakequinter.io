import React from 'react';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineExclamation } from 'react-icons/hi';
import { useSession, signIn, signOut } from 'next-auth/react';

import { useAuth } from '@/lib/auth';
import { box } from '@/styles/box';
import { text } from '@/styles/text';
import { button } from '@/styles/button';

export default function LoginForm() {
  const auth = useAuth();

  return (
    <div
      className={box({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '$6',
      })}
    >
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div
        className={box({
          borderRadius: '10px',
          backgroundColor: '$yellow100',
          padding: '$2',
          marginBottom: '$3',
        })}
      >
        <div className={box({ display: 'flex' })}>
          <div>
            <HiOutlineExclamation
              fill="#FBBF24"
              // color="#FBBF24"
              size={24}
            />
          </div>
          <div className={box({ marginLeft: '$2' })}>
            <h3
              className={text({
                weight: 'medium',
                size: '2',
                css: { color: '$yellow700' },
              })}
            >
              Attention
            </h3>
            <div
              className={box({
                marginTop: '$1',
                fontSize: '$2',
              })}
            >
              <p className={text({ css: { color: '$yellow700' } })}>
                This page is intended for the developer and owner of this site
                only!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={box({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <button
          className={button({
            css: {
              display: 'flex',
              alignItems: 'center',
            },
          })}
          onClick={() => signIn()}
        >
          <FcGoogle
            className={text({
              css: { marginRight: '$3', color: 'inherit' },
            })}
            size={20}
          />{' '}
          Sign In with Google
        </button>
      </div>
    </div>
  );
}
