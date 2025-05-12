import ContentLoader from "react-content-loader";

const Sceleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="400" height="10" />
      <rect x="0" y="20" rx="5" ry="5" width="350" height="10" />
      <rect x="0" y="40" rx="5" ry="5" width="300" height="10" />
    </ContentLoader>
  );
};

export default Sceleton;
