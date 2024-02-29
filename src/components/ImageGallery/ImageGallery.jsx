import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => {
        return <ImageCard key={image.id} item={image} />;
      })}
    </ul>
  );
}
