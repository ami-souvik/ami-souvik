import { useRouter } from '@context';

export const Anchor = ({ href, className, children }) => {
  const { navigate } = useRouter();
  const click = (e) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <a className={className} onClick={click}>
      {children}
    </a>
  );
};
