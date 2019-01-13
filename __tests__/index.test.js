const cuid = require('cuid');

const tag = require('..').templateTags[0];

describe('insomnia-plugin-cuid', () => {
  test('renders a cuid', async () => {
    const actual = await tag.run();
    const expected = true;

    expect(cuid.isCuid(actual)).toEqual(expected);
  });
});
