import LinkTo from '@Components/common/atoms/LinkTo';

const SNSLoginButton = ({ children, strategy }: any) => {
  return (
    <LinkTo style={{ display: 'block' }} href={`/api/oauth/${strategy}`}>
      {children}
    </LinkTo>
  );
};

export default SNSLoginButton;
