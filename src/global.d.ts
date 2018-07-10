/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: { toString: () => string };
  export = styles;
}
