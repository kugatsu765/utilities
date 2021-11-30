import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        // bundling
        'src/index',
        // bundleless, or just copy assets
        // { input: 'src/components/', outDir: 'dist/components' },
    ],
    declaration: true,
})
