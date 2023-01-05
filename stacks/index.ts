import type { App } from '@serverless-stack/resources';

import { MyStack } from './MyStack';

function stacks(app: App): void {
  app.setDefaultFunctionProps({
    bundle: {
      format: 'esm',
    },
    runtime: 'nodejs16.x',
  });

  app.stack(MyStack);
}

export default stacks;
