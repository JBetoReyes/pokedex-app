declare module '*.css' {
  const content: { [className: string]: string };
  export default msContentScript;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default msContentScript;
}
