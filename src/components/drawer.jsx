import { useRouter } from '@context';
import { Anchor } from '@components';

export const Drawer = ({ items }) => {
  const { state } = useRouter();
  console.log(state);
  return (
    <aside>
      <div>
        {items.map(({ href, title }) => (
          <Anchor key={href} href={`/resources/${href}`}>
            <div
              className={`my-2 py-2 px-4 border rounded ${state.href === `/resources/${href}` ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
            >
              <p>{title}</p>
            </div>
          </Anchor>
        ))}
      </div>
    </aside>
  );
};
