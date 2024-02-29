export default function ImageCard({ item }) {
  return (
    <li key={item.id}>
      <div>
        <img src={item.links.html} alt={item.alt_description} />
      </div>
    </li>
  );
}
