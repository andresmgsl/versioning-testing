import { Provider, setProvider, workspace } from '@project-serum/anchor';

describe('pills_manager', () => {
  // Configure the client to use the local cluster.
  setProvider(Provider.env());

  it('Is initialized!', async () => {
    // Add your test here.
    const program = workspace.PillsManager;
    const tx = await program.rpc.initialize();
    console.log('Your transaction signature', tx);
  });

  it('Should do nothing', async () => {
    console.log('This is just a dummy test');
  });
});
