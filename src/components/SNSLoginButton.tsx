import LinkTo from '@Components/LinkTo';

const SNSLoginButton = ({ children, strategy }: any) => {
  return <LinkTo href={`/api/${strategy}`}>{children}</LinkTo>;
};

export default SNSLoginButton;
