export const Image = ({ w = 'auto', sx, ...other }) => (
  <img
    style={{
      width: w,
      ...sx,
    }}
    {...other}
  />
);
