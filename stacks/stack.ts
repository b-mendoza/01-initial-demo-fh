import type { StackContext } from '@serverless-stack/resources';
import { NextjsSite } from '@serverless-stack/resources';

export function AppStack({ stack }: StackContext): void {
  const frontend = new NextjsSite(stack, 'initial-demo-fh', {
    path: 'initial-demo-fh',
  });

  stack.addOutputs({
    URL: frontend.url,
  });
}
