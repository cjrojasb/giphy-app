import React, { lazy, Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen'

const TrendingGifs = lazy(
  () => import('./TrendingGifs')
)

export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen({ distance: '200px' })

  return <div ref={fromRef}>
    <Suspense fallback={null}>
      {isNearScreen ? <TrendingGifs /> : null}
    </Suspense>
  </div>
}