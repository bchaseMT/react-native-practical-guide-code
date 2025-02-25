const GOOGLE_MAPS_API_KEY = "AIzaSyDJpsCaVd8R4FlBgevE-jpnehT3mf7Kg6Q";

function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x300&maptype=roadmap&key=${GOOGLE_MAPS_API_KEY}`;
  return <Image style={styles.mapPreview} source={{ uri: imagePreviewUrl }} />;
}
