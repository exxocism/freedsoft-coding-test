declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react';
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  // const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
