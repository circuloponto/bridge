'use client';

import CursorFollower from './CursorFollower';
import ScrollProgress from './ScrollProgress';

export default function ClientWrapper() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
    </>
  );
}
