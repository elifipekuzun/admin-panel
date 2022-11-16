import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const ActivityIndicator: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]);
  return (
    <div>
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 20 100 100"
          overflow="visible"
          fill="rgb(51,65,85)"
        >
          <defs>
            <circle
              id="spinner"
              r="2"
              cx="43"
              cy="85"
              transform="translate(0 -30)"
            ></circle>
          </defs>{' '}
          <use xlinkHref="#spinner" transform="rotate(0 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(30 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.08s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(60 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.16s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(90 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.24s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(120 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.32s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(150 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.4s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(180 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.48s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(210 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.56s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(240 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.64s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(270 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.72s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(300 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.8s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#spinner" transform="rotate(330 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.88s"
              repeatCount="indefinite"
            ></animate>
          </use>
        </svg>
      )}
    </div>
  );
};
