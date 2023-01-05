import type { App } from '@serverless-stack/resources';

import { AppStack } from './stack';

function stacks(app: App): void {
  app.setDefaultFunctionProps({
    bundle: {
      format: 'esm',
    },
    runtime: 'nodejs16.x',
  });

  app.stack(AppStack);
}

export default stacks;
