export default function splitText(text) {
  const words = text.split(" ");
  const chars = text.split("");

  return { chars, words };
}
