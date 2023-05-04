export default function useIsBrowser() {
  return typeof window !== "undefined";
}
