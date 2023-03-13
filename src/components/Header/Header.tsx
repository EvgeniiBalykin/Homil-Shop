export const Header = ({ showLinks }: { showLinks: boolean }) => {
  return (
    showLinks && (
      <div>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
      </div>
    )
  );
};
