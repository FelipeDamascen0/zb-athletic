export const Logo = ({font}: any) => {
  return(
    <h1 className={`text-${font ?? '2'}xl font-bold`}>
      Z
      <span className="text-yellow-500">
        &
      </span>
      B
    </h1>
  );
}