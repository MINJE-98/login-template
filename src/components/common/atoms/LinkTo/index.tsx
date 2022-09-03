import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type PropTypes = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

const LinkTo = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}: PropsWithChildren<PropTypes>) => {
  return (
    <Link
      {...{
        ...anchorProps,
        href,
        as,
        replace,
        scroll,
        shallow,
        prefetch,
        locale,
      }}
    >
      <a {...anchorProps}>{children}</a>
    </Link>
  );
};

export default LinkTo;
