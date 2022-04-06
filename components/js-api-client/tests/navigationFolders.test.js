const { createNavigationByFoldersFetcher, createClient } = require('../dist/index.js');

test('Test Nav fetching Node: Shop', async () => {
    const CrystallizeClient = createClient({
        tenantIdentifier: 'furniture'
    });

    const fetch = createNavigationByFoldersFetcher(CrystallizeClient);
    const response = await fetch('/shop', 'en', 3);

    expect(response.tree.path).toBe('/shop');
    expect(response.tree.children[0].path).toBe('/shop/decoration');
    expect(response.tree.children[0].children[0].path).toBe('/shop/decoration/shelves-in-wood');

    expect(response.tree.children[1].path).toBe('/shop/bathroom-fitting');
    expect(response.tree.children[1].children[2].path).toBe('/shop/bathroom-fitting/mounted-bathroom-vanity-in-gray');
});

test('Test Nav fetching Node: /', async () => {
    const CrystallizeClient = createClient({
        tenantIdentifier: 'furniture'
    });

    const fetch = createNavigationByFoldersFetcher(CrystallizeClient);
    const response = await fetch('/', 'en', 3);
    expect(response.tree.path).toBe('/');
    expect(response.tree.children[0].path).toBe('/shop');
});

test('Test Nav fetching Node: / + extra data', async () => {
    const CrystallizeClient = createClient({
        tenantIdentifier: 'furniture'
    });

    const fetch = createNavigationByFoldersFetcher(CrystallizeClient);
    const response = await fetch('/', 'en', 2, {
        tenant: {
            __args: {
                language: 'en'
            },
            name: true
        }
    });
    expect(response.tree.path).toBe('/');
    expect(response.tree.children[0].path).toBe('/shop');
    expect(response.tenant.name).toBe('Furniture');
});

test('Test Nav fetching Node: / + extra data + specific level', async () => {
    const CrystallizeClient = createClient({
        tenantIdentifier: 'furniture'
    });

    const fetch = createNavigationByFoldersFetcher(CrystallizeClient);
    const response = await fetch(
        '/',
        'en',
        3,
        {
            tenant: {
                __args: {
                    language: 'en'
                },
                name: true
            }
        },
        (level) => {
            switch (level) {
                case 0:
                    return {
                        shape: {
                            identifier: true
                        }
                    };
                case 1:
                    return {
                        createdAt: true
                    };
                default:
                    return {};
            }
        }
    );
    expect(response.tree.path).toBe('/');
    expect(response.tree.children[0].path).toBe('/shop');
    expect(response.tenant.name).toBe('Furniture');
    expect(response.tree.shape.identifier).toBe('__catalogue-tree-root');
});
