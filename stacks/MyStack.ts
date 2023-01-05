import type { StackContext } from '@serverless-stack/resources';
import { NextjsSite } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext): void {
  const frontend = new NextjsSite(stack, 'initial-demo-fh', {
    path: 'initial-demo-fh',
    environment: {
      API_URL: process.env['API_URL'] ?? '',
    },
  });

  stack.addOutputs({
    URL: frontend.url,
  });
}
