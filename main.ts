import { webServe } from 'deno_web_serve';

await webServe({
	port: 8080,
	indexFileName: 'main.ts',
	minify: false,
	externals: [],
	envs: ['ENVIRONMENT'],
});
