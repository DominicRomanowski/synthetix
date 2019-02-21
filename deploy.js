require('dotenv').config();

if (!process.env.PRIVATE_KEY || !process.env.INFURA_KEY || !process.env.ETHERSCAN_KEY) {
	console.log(
		'You must pass a configuration using a .env file. Copy .env.example to .env and add appropriate variables.'
	);
	process.exit(1);
}

// --------------------------------------------------------------
// Deployment script
// --------------------------------------------------------------
//
// These settings can be used to configure the behaviour of the script.
//
// You can specify for each contract whether it should be deployed:
//
// Example:
//		ExchangeRates: { action: 'deploy' }
//
// or if there's an existing instance that should be used instead of the new deployment.
//
// Example:
//		ExchangeRates: {
//			action: 'use-existing',
//			existingInstance: '0xd9c19368d3cE48dB78Ebdbea95699f3f2291E2d1',
// 		}

const settings = {
	network: 'ropsten',
	contractDeploymentGasLimit: 8000000,
	methodCallGasLimit: 150000,
	gasPrice: '1.0', // In gwei
	saveFlattenedContracts: true,
	flattenedContractsFolder: './flattened-contracts',
	verifyContracts: true,
	synths: [
		'XDR',
		'sUSD',
		'sEUR',
		'sJPY',
		'sAUD',
		'sKRW',
		'sXAU',
		'sGBP',
		'sCHF',
		'sCNY',
		'sSGD',
		'sCAD',
		'sRUB',
		'sINR',
		'sBRL',
		'sNZD',
		'sPLN',
	],
	contracts: {
		Depot: {
			action: 'use-existing',
			existingInstance: '0x2f7Ab1D143D3A86173020427F69A6B0088aC03Ad',
		},
		ExchangeRates: {
			action: 'use-existing',
			existingInstance: '0x1A61b686Ad77b6aCF87a394048ed03399433a027',
		},
		FeePool: {
			action: 'use-existing',
			existingInstance: '0x0E3dFdD58bC0E88443877135aF085aa111df06E3',
		},
		Synthetix: {
			action: 'deploy',
		},
		SynthetixEscrow: {
			action: 'use-existing',
			existingInstance: '0x9B7d73333413395f346C6f872b50686D219953E0',
		},
		SynthetixState: {
			action: 'use-existing',
			existingInstance: '0x34cD3b61596F19f79b5CDbB20f5eeD081C51C082',
		},
		Synth: {
			XDR: {
				action: 'use-existing',
				existingInstance: '0x41e8160F72af87DD078Bf0046CD06dC586867448',
			},
			sUSD: {
				action: 'use-existing',
				existingInstance: '0x5cD55899568e9A3f414519691543fc6F9B1857C1',
			},
			sEUR: {
				action: 'use-existing',
				existingInstance: '0xB790bab31d3e94b48F45D52538Ad8D91ED6057E0',
			},
			sJPY: {
				action: 'use-existing',
				existingInstance: '0x2C47978a397CB0a0Beb542A68d497392772F1DcB',
			},
			sAUD: {
				action: 'use-existing',
				existingInstance: '0x0ae403812347f5B7a7D70C8Cbe5d06f705a994Ff',
			},
			sKRW: {
				action: 'use-existing',
				existingInstance: '0xCCca07f15B86F5FaA1f917A6D75FB6184EfC66D0',
			},
			sXAU: {
				action: 'use-existing',
				existingInstance: '0x23977427da51A21Da3F4DD0A27E608aA6b4a2F86',
			},
			sGBP: {
				action: 'use-existing',
				existingInstance: '0x0d3cbd974C4C1131A66CC0f2D520FB8E533c4f39',
			},
			sCHF: {
				action: 'use-existing',
				existingInstance: '0x369E54eC039D9C05E0dc251e2FD964bD9bD08931',
			},
			sCNY: {
				action: 'deploy',
			},
			sSGD: {
				action: 'deploy',
			},
			sCAD: {
				action: 'deploy',
			},
			sRUB: {
				action: 'deploy',
			},
			sINR: {
				action: 'deploy',
			},
			sBRL: {
				action: 'deploy',
			},
			sNZD: {
				action: 'deploy',
			},
			sPLN: {
				action: 'deploy',
			},
			sXAG: {
				action: 'deploy',
			},
			sBTC: {
				action: 'deploy',
			},
		},
		Proxy: {
			FeePool: {
				action: 'use-existing',
				existingInstance: '0x9d9A7152f23EcdDE5eBb2c52c2090bbefCa6A8a5',
			},
			Synthetix: {
				action: 'use-existing',
				existingInstance: '0x3224908ba459Cb3EEeE35e95b9Dd3de7a9e39598',
			},
			XDR: {
				action: 'use-existing',
				existingInstance: '0x25b1C6f37499f74364A8d974C44be765f1074E90',
			},
			sUSD: {
				action: 'use-existing',
				existingInstance: '0xDd710d668dF4d8871468C91C6366458E77ef7c38',
			},
			sEUR: {
				action: 'use-existing',
				existingInstance: '0x5aC8D4a93492a7F9461d698aA074757400FB55B3',
			},
			sJPY: {
				action: 'use-existing',
				existingInstance: '0x9524F59033C9E5bd779C6f4D9f835362593Ae323',
			},
			sAUD: {
				action: 'use-existing',
				existingInstance: '0xA0500AD3044aB20C9Ec1Fd83d914494096Fa2ea9',
			},
			sKRW: {
				action: 'use-existing',
				existingInstance: '0x56eae5da1a34B9a0a01B3dCffD50Ba19F9feCdBB',
			},
			sXAU: {
				action: 'use-existing',
				existingInstance: '0xD1BF63C87fF558e4eE7f0ddab6cCa34b000685f1',
			},
			sGBP: {
				action: 'use-existing',
				existingInstance: '0x8D996937609C06753c7f4105a04828a9970d0073',
			},
			sCHF: {
				action: 'use-existing',
				existingInstance: '0x39dDDddacb1F97aD4230cD4a09D560c0345980c1',
			},
			sCNY: {
				action: 'deploy',
			},
			sSGD: {
				action: 'deploy',
			},
			sCAD: {
				action: 'deploy',
			},
			sRUB: {
				action: 'deploy',
			},
			sINR: {
				action: 'deploy',
			},
			sBRL: {
				action: 'deploy',
			},
			sNZD: {
				action: 'deploy',
			},
			sPLN: {
				action: 'deploy',
			},
			sXAG: {
				action: 'deploy',
			},
			sBTC: {
				action: 'deploy',
			},
		},
		SafeDecimalMath: {
			action: 'use-existing',
			existingInstance: '0xb8a0f476f0C4791F63A64786334059E98E8e640C',
		},
		TokenState: {
			Synthetix: {
				action: 'use-existing',
				existingInstance: '0x3f163A8Ef6495C15A10bA15950DBfba279665837',
			},
			XDR: {
				action: 'use-existing',
				existingInstance: '0x8B57b42d31d5600278E9B1404d6d3AB5fA81E489',
			},
			sUSD: {
				action: 'use-existing',
				existingInstance: '0x77e6233984d3Dd74094d07427393209f4e86E7B8',
			},
			sEUR: {
				action: 'use-existing',
				existingInstance: '0x6b1b6F1437bE4EffDA3E125f9a2701B86244c17c',
			},
			sJPY: {
				action: 'use-existing',
				existingInstance: '0x3A5573Ea88DA3B4e1bd8ad19B6a29Ab77c4530F2',
			},
			sAUD: {
				action: 'use-existing',
				existingInstance: '0x6134F07C0aB24D9E3dc03d803Eb8f9B2556cE53d',
			},
			sKRW: {
				action: 'use-existing',
				existingInstance: '0x764b1e28fc321Ce00D0eB963a5E2922f96505D78',
			},
			sXAU: {
				action: 'use-existing',
				existingInstance: '0xC9F217326BD38435298dbf7Aaf9afE2dC2D6a660',
			},
			sGBP: {
				action: 'use-existing',
				existingInstance: '0xF688e8447eeD39917100C5F24823bF546A332237',
			},
			sCHF: {
				action: 'use-existing',
				existingInstance: '0xCD57cc0daD907F24fd564861acAD48bb039A4baA',
			},
			sCNY: {
				action: 'deploy',
			},
			sSGD: {
				action: 'deploy',
			},
			sCAD: {
				action: 'deploy',
			},
			sRUB: {
				action: 'deploy',
			},
			sINR: {
				action: 'deploy',
			},
			sBRL: {
				action: 'deploy',
			},
			sNZD: {
				action: 'deploy',
			},
			sPLN: {
				action: 'deploy',
			},
			sXAG: {
				action: 'deploy',
			},
			sBTC: {
				action: 'deploy',
			},
		},
	},
};

// --------------------------------------------------------------

const axios = require('axios');
const fs = require('fs');
const linker = require('solc/linker');
const mkdirp = require('mkdirp');
const path = require('path');
const qs = require('querystring');
const rimraf = require('rimraf');
const solc = require('solc');
const solidifier = require('solidifier');
const { table } = require('table');
const Web3 = require('web3');

// Configure Web3 so we can sign transactions and connect to the network.
// Consider checking settings.network === 'mainnet' and setup web3 to use hardware wallet
const web3 = new Web3(
	new Web3.providers.HttpProvider(`https://${settings.network}.infura.io/${process.env.INFURA_KEY}`)
);
web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);
web3.eth.defaultAccount = web3.eth.accounts.wallet[0].address;

const account = web3.eth.defaultAccount;
const sendParameters = (type = 'method-call') => ({
	from: web3.eth.defaultAccount, // Ugh, what's the point of a defaultAccount if we have to set it anyway?
	gas: type === 'method-call' ? settings.methodCallGasLimit : settings.contractDeploymentGasLimit,
	gasPrice: web3.utils.toWei(settings.gasPrice, 'gwei'),
});

const etherscanUrl =
	!settings.network || settings.network === 'mainnet'
		? 'https://api.etherscan.io/api'
		: `https://api-${settings.network}.etherscan.io/api`;

// Globals that help us pass state easily
const flattenedContracts = {};
const artifacts = {};
const deployedContracts = {};
const ZERO_ADDRESS = '0x' + '0'.repeat(40);

// List all files in a directory in Node.js recursively in a synchronous fashion
const findSolFiles = (dir, relativePath = '', fileList = {}) => {
	const files = fs.readdirSync(dir);

	files.forEach(file => {
		const fullPath = path.join(dir, file);
		if (fs.statSync(fullPath).isDirectory()) {
			findSolFiles(fullPath, path.join(relativePath, file), fileList);
		} else if (path.extname(file) === '.sol') {
			fileList[path.join(relativePath, file)] = {
				textContents: fs.readFileSync(fullPath, 'utf8'),
			};
		}
	});

	return fileList;
};

const deployContract = async (contractIdentifier, constructorArguments) => {
	console.log(` - Deploying ${contractIdentifier}`);

	const [contractName, contractNamespace] = contractIdentifier.split('.');

	if (!artifacts[contractName]) throw new Error(`Unknown contract: ${contractName}`);
	if (!settings.contracts[contractName]) {
		throw new Error(`No settings for contract: ${contractName}`);
	}

	let contractSettings = settings.contracts[contractName];

	if (contractNamespace) {
		if (!contractSettings[contractNamespace]) {
			throw new Error(`No settings for contract: ${contractIdentifier}`);
		}

		contractSettings = contractSettings[contractNamespace];
	}

	const { action, existingInstance } = contractSettings;

	// Any contract after SafeDecimalMath can automatically get linked.
	// Doing this with bytecode that doesn't require the library is a no-op.
	let bytecode = artifacts[contractName].evm.bytecode.object;

	if (deployedContracts.SafeDecimalMath) {
		bytecode = linker.linkBytecode(bytecode, {
			[contractName + '.sol']: {
				SafeDecimalMath: deployedContracts.SafeDecimalMath.options.address,
			},
		});
	}

	artifacts[contractName].evm.bytecode.linkedObject = bytecode;

	if (action === 'use-existing') {
		console.log('   - Using existing instance');

		if (!existingInstance) {
			throw new Error(
				`Settings for contract: ${contractIdentifier} specify an existing contract, but do not give an address.`
			);
		}

		deployedContracts[contractIdentifier] = new web3.eth.Contract(
			artifacts[contractName].abi,
			existingInstance
		);
	} else if (action === 'deploy') {
		console.log('   - Deploying new instance...');

		const newContract = new web3.eth.Contract(artifacts[contractName].abi);
		deployedContracts[contractIdentifier] = await newContract
			.deploy({
				data: '0x' + bytecode,
				arguments: constructorArguments,
			})
			.send(sendParameters('contract-deployment'));
	} else {
		throw new Error(`Unknown action for contract ${contractIdentifier}: ${action}`);
	}

	console.log(`   - ${deployedContracts[contractIdentifier].options.address}`);

	return deployedContracts[contractIdentifier];
};

const verifyContracts = async () => {
	if (!settings.verifyContracts) {
		console.log('Verification disabled in settings.');
		return;
	}

	const tableData = [];

	for (const contract of Object.keys(deployedContracts)) {
		// Check if this contract already has been verified.

		// ExchangeRates is unable to verify via API
		if (contract === 'ExchangeRates') {
			tableData.push([deployedContracts[contract].options.address, 'Skipped Verification']);
			continue;
		}

		let result = await axios.get(etherscanUrl, {
			params: {
				module: 'contract',
				action: 'getabi',
				address: deployedContracts[contract].options.address,
				apikey: process.env.ETHERSCAN_KEY,
			},
		});

		if (result.data.result === 'Contract source code not verified') {
			const [contractName] = contract.split('.');

			console.log(`Contract ${contract} not yet verified. Verifying...`);

			// Get the transaction that created the contract with its resulting bytecode.
			result = await axios.get(etherscanUrl, {
				params: {
					module: 'account',
					action: 'txlist',
					address: deployedContracts[contract].options.address,
					sort: 'asc',
					apikey: process.env.ETHERSCAN_KEY,
				},
			});

			// Get the bytecode that was in that transaction.
			const deployedBytecode = result.data.result[0].input;

			// Grab the last 50 characters of the compiled bytecode
			const compiledBytecode = artifacts[contractName].evm.bytecode.linkedObject.slice(-50);
			const pattern = new RegExp(`${compiledBytecode}(.+)$`);

			let constructorArguments;
			if (contractName !== 'SafeDecimalMath') {
				constructorArguments = pattern.exec(deployedBytecode)[1];
				console.log('Constructor arguments', constructorArguments);
			}

			result = await axios.post(
				etherscanUrl,
				qs.stringify({
					module: 'contract',
					action: 'verifysourcecode',
					contractaddress: deployedContracts[contract].options.address,
					sourceCode: flattenedContracts[`${contractName}.sol`].content,
					contractname: contractName,
					constructorArguements: constructorArguments,
					compilerversion: 'v' + solc.version().replace('.Emscripten.clang', ''), // The version reported by solc-js is too verbose and needs a v at the front
					optimizationUsed: 1,
					runs: 200,
					libraryname1: 'SafeDecimalMath',
					libraryaddress1: deployedContracts.SafeDecimalMath.options.address,
					apikey: process.env.ETHERSCAN_KEY,
				}),
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			);

			console.log('Got result:', result.data.result);

			if (result.data.result === 'Contract source code already verified') {
				// Ugh, ok, you lie, but fine, skip and continue.
				tableData.push([deployedContracts[contract].options.address, 'Successfully verified']);
				continue;
			}

			const guid = result.data.result;

			let status = '';
			while (status !== 'Pass - Verified') {
				console.log('Checking verification status...');

				result = await axios.get(etherscanUrl, {
					params: {
						module: 'contract',
						action: 'checkverifystatus',
						guid,
					},
				});
				status = result.data.result;

				console.log(`Got ${status}`);

				if (status === 'Fail - Unable to verify') {
					tableData.push([deployedContracts[contract].options.address, 'Unable to verify']);

					console.log('Unable to verify');
					console.log('Moving to next contract');
					break;
				}

				if (status !== 'Pass - Verified') {
					console.log('Sleeping for 5 seconds and re-checking.');
					await new Promise(resolve => setTimeout(resolve, 5000));
				} else {
					tableData.push([deployedContracts[contract].options.address, 'Successfully verified']);
				}
			}
		} else {
			tableData.push([deployedContracts[contract].options.address, 'Already verified']);
		}
	}

	console.log('Verification state');
	console.log(table(tableData));
};

const build = async () => {
	console.log('Starting build...');

	// Flatten all the contracts.
	// Start with the libraries, then copy our own contracts on top to ensure
	// if there's a naming clash our code wins.
	console.log('Finding .sol files...');
	const libraries = findSolFiles('node_modules');
	const contracts = findSolFiles('contracts');
	const merged = { ...libraries, ...contracts };

	console.log('Flattening contracts...');
	for (const contract of Object.keys(contracts)) {
		const flattened = await solidifier.flatten({
			files: merged,
			path: contract,
			stripExcessWhitespace: true,
		});

		// Save it for later.
		flattenedContracts[contract] = { content: flattened };
	}

	// Ok, now we need to compile all the files.
	console.log('Compiling contracts...');
	const output = JSON.parse(
		solc.compileStandardWrapper(
			JSON.stringify({
				language: 'Solidity',
				settings: {
					optimizer: {
						enabled: true,
					},
					outputSelection: {
						'*': {
							'*': ['abi', 'evm.bytecode'],
						},
					},
				},
				sources: flattenedContracts,
			})
		)
	);

	const warnings = output.errors.filter(e => e.severity === 'warning');
	const errors = output.errors.filter(e => e.severity === 'error');

	console.log(`Compiled with ${warnings.length} warnings and ${errors.length} errors`);
	if (errors.length > 0) {
		console.log(errors);
		console.log();
		console.log('Exiting because of compile errors.');
		process.exit(1);
	}

	// Ok, now pull the contract we care about out of each file's output.
	for (const contract of Object.keys(output.contracts)) {
		const name = path.basename(contract, '.sol');
		artifacts[name] = output.contracts[contract][name];
	}

	// We're built!
};

const saveFlattenedContracts = async () => {
	if (settings.saveFlattenedContracts) {
		rimraf.sync(settings.flattenedContractsFolder);

		for (const contract of Object.keys(flattenedContracts)) {
			const filename = path.join(settings.flattenedContractsFolder, contract);
			mkdirp.sync(path.dirname(filename));

			console.log(`Saving ${contract} to ${settings.flattenedContractsFolder}.`);
			fs.writeFileSync(filename, flattenedContracts[contract].content);
		}

		console.log('Successfully saved flattened contracts.');
		console.log();
	}
};

const deploy = async () => {
	await deployContract('SafeDecimalMath');

	const exchangeRates = await deployContract('ExchangeRates', [
		account,
		account,
		[web3.utils.asciiToHex('SNX')],
		[web3.utils.toWei('0.2', 'ether')],
	]);

	const feePoolProxy = await deployContract('Proxy.FeePool', [account]);

	const feePool = await deployContract('FeePool', [
		feePoolProxy.options.address,
		account,
		account,
		account,
		web3.utils.toWei('0.0015', 'ether'),
		web3.utils.toWei('0.0015', 'ether'),
	]);

	if (
		settings.contracts.Proxy.FeePool.action === 'deploy' ||
		settings.contracts.FeePool.action === 'deploy'
	) {
		await feePoolProxy.methods.setTarget(feePool.options.address).send(sendParameters());
	}

	const synthetixState = await deployContract('SynthetixState', [account, account]);
	const synthetixProxy = await deployContract('Proxy.Synthetix', [account]);
	const synthetixTokenState = await deployContract('TokenState.Synthetix', [account, account]);
	const synthetix = await deployContract('Synthetix', [
		synthetixProxy.options.address,
		synthetixTokenState.options.address,
		synthetixState.options.address,
		account,
		exchangeRates.options.address,
		feePool.options.address,
	]);

	if (
		settings.contracts.Proxy.Synthetix.action === 'deploy' ||
		settings.contracts.Synthetix.action === 'deploy'
	) {
		console.log('Setting target on Synthetix Proxy...');
		await synthetixProxy.methods.setTarget(synthetix.options.address).send(sendParameters());
	}

	if (settings.contracts.TokenState.Synthetix.action === 'deploy') {
		console.log('Setting balance on Synthetix Token State...');
		await synthetixTokenState.methods
			.setBalanceOf(account, web3.utils.toWei('100000000'))
			.send(sendParameters());
	}

	if (
		settings.contracts.TokenState.Synthetix.action === 'deploy' ||
		settings.contracts.Synthetix.action === 'deploy'
	) {
		console.log('Setting associated contract on Synthetix Token State...');
		await synthetixTokenState.methods
			.setAssociatedContract(synthetix.options.address)
			.send(sendParameters());
		console.log('Setting associated contract on Synthetix State...');
		await synthetixState.methods
			.setAssociatedContract(synthetix.options.address)
			.send(sendParameters());
	}

	const synthetixEscrow = await deployContract('SynthetixEscrow', [
		account,
		synthetix.options.address,
	]);

	if (
		settings.contracts.Synthetix.action === 'deploy' ||
		settings.contracts.SynthetixEscrow.action === 'deploy'
	) {
		console.log('Setting escrow on Synthetix...');
		await synthetix.methods.setEscrow(synthetixEscrow.options.address).send(sendParameters());

		await synthetixEscrow.methods.setSynthetix(synthetix.options.address).send(sendParameters());
	}

	if (
		settings.contracts.FeePool.action === 'deploy' ||
		settings.contracts.Synthetix.action === 'deploy'
	) {
		console.log('Setting Synthetix on Fee Pool...');
		await feePool.methods.setSynthetix(synthetix.options.address).send(sendParameters());
	}

	// ----------------
	// Synths
	// ----------------
	for (const currencyKey of settings.synths) {
		const tokenState = await deployContract(`TokenState.${currencyKey}`, [account, ZERO_ADDRESS]);
		const tokenProxy = await deployContract(`Proxy.${currencyKey}`, [account]);
		const synth = await deployContract(`Synth.${currencyKey}`, [
			tokenProxy.options.address,
			tokenState.options.address,
			synthetix.options.address,
			feePool.options.address,
			`Synth ${currencyKey}`,
			currencyKey,
			account,
			web3.utils.asciiToHex(currencyKey),
		]);

		if (
			settings.contracts.Synth[currencyKey].action === 'deploy' ||
			settings.contracts.TokenState[currencyKey].action === 'deploy'
		) {
			console.log(`Setting associated contract for ${currencyKey} TokenState...`);

			await tokenState.methods.setAssociatedContract(synth.options.address).send(sendParameters());
		}
		if (
			settings.contracts.Proxy[currencyKey].action === 'deploy' ||
			settings.contracts.Synth[currencyKey].action === 'deploy'
		) {
			console.log(`Setting proxy target for ${currencyKey} Proxy...`);

			await tokenProxy.methods.setTarget(synth.options.address).send(sendParameters());
		}

		// Comment out if deploying on mainnet - Needs to be owner of Synthetix contract
		if (
			settings.contracts.Synth[currencyKey].action === 'deploy' ||
			settings.contracts.Synthetix.action === 'deploy'
		) {
			console.log(`Adding ${currencyKey} to Synthetix contract...`);

			await synthetix.methods.addSynth(synth.options.address).send(sendParameters());
		}
	}

	await deployContract('Depot', [
		account,
		account,
		synthetix.options.address,
		deployedContracts['Synth.sUSD'].options.address,
		feePool.options.address,
		account,
		web3.utils.toWei('500'),
		web3.utils.toWei('.10'),
	]);

	console.log();
	console.log();
	console.log(' Successfully deployed all contracts:');
	console.log();

	const tableData = Object.keys(deployedContracts).map(key => [
		key,
		deployedContracts[key].options.address,
	]);

	console.log(table(tableData));
};

// Build and deploy and clean that build directory again.
build()
	.then(() => deploy())
	.then(() => saveFlattenedContracts())
	.then(() => verifyContracts());
