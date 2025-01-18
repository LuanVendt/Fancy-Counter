export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          LIMIT! Send the <b>PIX</b> for &gt; 10
        </span>
      ) : (
        <span>Fancy Counter</span>
      )}
    </h1>
  );
}
