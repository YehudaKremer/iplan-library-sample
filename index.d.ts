declare module 'iplan-library-sample/components/Field/Field' {
  export default CustomTextField;
  function CustomTextField({ name }: {
      name: any;
  }): JSX.Element;
  //# sourceMappingURL=Field.d.ts.map
}
declare module 'iplan-library-sample/components/Field/Field.d.ts' {
  {"version":3,"file":"Field.d.ts","sourceRoot":"","sources":["../../../../../../../../yehudakre/source/repos/iplan-library-sample/src/components/Field/Field.js"],"names":[],"mappings":";AAIA;;gBAwBC"}
}
declare module 'iplan-library-sample/components/MyButton/MyButton' {
  export default MyButton;
  function MyButton(props: any): JSX.Element;
  //# sourceMappingURL=MyButton.d.ts.map
}
declare module 'iplan-library-sample/components/MyButton/MyButton.d.ts' {
  {"version":3,"file":"MyButton.d.ts","sourceRoot":"","sources":["../../../../../../../../yehudakre/source/repos/iplan-library-sample/src/components/MyButton/MyButton.js"],"names":[],"mappings":";AAGA,mDAEC"}
}
declare module 'iplan-library-sample/components/MyForm/MyForm' {
  export default MyForm;
  function MyForm(props: any): JSX.Element;
  //# sourceMappingURL=MyForm.d.ts.map
}
declare module 'iplan-library-sample/components/MyForm/MyForm.d.ts' {
  {"version":3,"file":"MyForm.d.ts","sourceRoot":"","sources":["../../../../../../../../yehudakre/source/repos/iplan-library-sample/src/components/MyForm/MyForm.js"],"names":[],"mappings":";AAMA,iDAuBC"}
}
declare module 'iplan-library-sample/index' {
  export { default as Field } from "iplan-library-sample/components/Field/Field";
  export { default as MyButton } from "iplan-library-sample/components/MyButton/MyButton";
  export { default as MyForm } from "iplan-library-sample/components/MyForm/MyForm";
  //# sourceMappingURL=index.d.ts.map
}
declare module 'iplan-library-sample/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../../../../../yehudakre/source/repos/iplan-library-sample/src/index.js"],"names":[],"mappings":""}
}
declare module 'iplan-library-sample' {
  import main = require('iplan-library-sample/index');
  export = main;
}