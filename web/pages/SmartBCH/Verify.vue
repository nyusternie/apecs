<template>
    <main class="p-10">
        <h1 class="text-3xl">
            Contract Verification
        </h1>

        <h3 class="text-2xl">
            Account: {{account}}
        </h3>

        <button @click="verify" class="p-3 bg-pink-100 border-2 border-pink-300 rounded-xl">
            Start Verifcation
        </button>

        <select class="mt-5">
            <option value="v0.1.1+commit.6ff4cd6">v0.1.1+commit.6ff4cd6</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>

        <div class="mt-5 relative flex items-start">
            <div class="flex items-center h-5">
                <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </div>

            <div class="ml-3 text-sm">
                <label for="candidates" class="font-medium text-gray-700">Optimization</label>
                <p id="candidates-description" class="text-gray-500">Enables more efficient gas fees</p>
            </div>
        </div>

        <textarea v-model="source" rows="4" />

    </main>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'

/* Import components. */
// import Header from '@/components/Header'
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // Header,
        // UnderConstruction,
    },
    data: () => {
        return {
            compiler: null,
            provider: null,
            source: null,
            contactAddress: null,
            optimization: null,
            abi: null,
            bytecode: null,
            account: null,
        }
    },
    methods: {
        async verify() {
            /* Initialize provider. */
            // const provider = new ethers
            //     .providers
            //     .Web3Provider(window.ethereum, 'any')

            /* Initialize provider. */
            this.provider = new ethers
                .providers
                .JsonRpcProvider('https://smartbch.devops.cash/testnet')

            const contract = new ethers
                .Contract(this.contractAddress, this.abi, this.provider)
            console.log('CONTRACT', contract)

            const retrieve = await contract
                .retrieve()
                .catch(err => console.error(err))
            console.log('RETRIEVE:', retrieve, Number(retrieve))

            const bytecode = await this.provider
                .getCode(this.contractAddress)
            console.log('BYTECODE', bytecode)

            // const sample = require('./sample.txt')
            // const source = fs.readFileSync('./sample.sol', 'UTF-8')
            console.log('SOURCE', this.source)

        },

    },
    created: async function () {
        this.compiler = '0.8.7+commit.e28d00a7'

        this.contractAddress = '0x68F03cD659289510F88e1F6651b9BC09d12fc8DD'

        this.optimization = null

        this.abi = [
            {
                "inputs": [],
                "name": "retrieve",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "num",
                    "type": "uint256"
                }],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]

        this.bytecode = '608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef64766264736f6c63430008070033'

    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
