import LinkTo from '@Components/LinkTo';

const SNSLoginButton = ({ children, strategy }: any) => {
  return (
    <LinkTo style={{ display: 'block' }} href={`/api/oauth/${strategy}`}>
      {children}
    </LinkTo>
  );
};

export default SNSLoginButton;
