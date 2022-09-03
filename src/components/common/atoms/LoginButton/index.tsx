import LinkTo from '@Components/common/atoms/LinkTo';

const LoginButton = ({ children, strategy }: any) => {
  return (
    <LinkTo className="" href={`/api/oauth/${strategy}`}>
      {children}
    </LinkTo>
  );
};

export default LoginButton;
