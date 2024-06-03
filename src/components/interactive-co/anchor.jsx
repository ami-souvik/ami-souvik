import { useRouter } from '@context';

export const Anchor = ({ href, className, children }) => {
  const { navigate } = useRouter();
  const click = (e) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <div className={className} onClick={click}>
      {children}
    </div>
  );
};
