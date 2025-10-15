// Allow Three.js JSX elements in TypeScript via a permissive IntrinsicElements index signature.
// This avoids build errors like: "Property 'mesh' does not exist on type 'JSX.IntrinsicElements'".
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
export {};
