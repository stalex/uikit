import * as React from 'react';

function M(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h2V4h-6V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H3v2h2v13zm6-11v9H9V8h2zm4 9V8h-2v9h2z"
      />
    </svg>
  );
}

export default M;