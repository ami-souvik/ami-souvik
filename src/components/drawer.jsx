export const Drawer = ({ items }) => {
  return (
    <aside>
      <div>
        {items.map(({ title }) => (
          <div className="my-2 py-2 px-4 border rounded">
            <p>{title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};
