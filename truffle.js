module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 8545,
			network_id: '*',
			gas: 8500000,
		},
	},
	mocha: {
		useColors: true,
		slow: 3000, // We only consider tests slow when they take more than 3 seconds.
	},
	compilers: {
		solc: {
			// version: './node_modules/solc', // Version is managed in package.json as an NPM dependency.
			version: '0.4.25',
			settings: {
				optimizer: {
					enabled: true,
					runs: 200,
				},
			},
		},
	},
};
