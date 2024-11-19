// Support for importing files as raw text
declare module "*?raw" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export = content;
}

// Support for ?inline imports if needed
declare module "*?inline" {
  const content: string;
  export default content;
}

declare module "qtiCustomInteractionContext" {
  const register: {register: (PortableInteraction) => void};
  export = register;
}