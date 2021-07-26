require('esbuild').build({
    entryPoints: ['./src/app.js'],
    bundle: true,
    outdir: 'dist'
  }).catch(() => process.exit(1))