declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react';
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  // const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}
