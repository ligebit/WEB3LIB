"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_CHAINS = void 0;
const chain_1 = require("./chain");
const allTokens_1 = require("./allTokens");
exports.ALL_CHAINS = {
    [chain_1.EChains.Waves]: {
        id: -2,
        name: 'waves',
        currency: 'WAVES',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Waves].find(el => el.coingeckoId == 'waves'))
    },
    [chain_1.EChains.Etherum]: {
        isEvm: true,
        id: 1,
        name: 'etherum',
        currency: 'ETH',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Etherum].find(el => el.coingeckoId == 'ethereum')),
        rpc: {
            endpoint: 'https://mainnet.infura.io/v3/5694893e9dca4f0ab5742e37d9b1669e',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.Aurora]: {
        isEvm: true,
        id: 1313161554,
        name: 'aurora',
        currency: 'ETH',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Etherum].find(el => el.coingeckoId == 'ethereum')),
        explorer: {
            tx: function (tx) { return `https://explorer.aurora.dev/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://mainnet.aurora.dev',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.NEAR]: {
        id: null,
        name: 'near',
        currency: 'NEAR'
    },
    [chain_1.EChains.BSC]: {
        isEvm: true,
        id: 56,
        name: 'bsc',
        currency: 'BNB',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.BSC].find(el => el.coingeckoId == 'binancecoin')),
        rpc: {
            endpoint: 'https://bsc-dataseed.binance.org',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.Polygon]: {
        isEvm: true,
        id: 137,
        name: 'polygon',
        currency: 'MATIC',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Polygon].find(el => el.coingeckoId == 'matic-network')),
        rpc: {
            endpoint: 'https://polygon-mainnet.infura.io/v3/5694893e9dca4f0ab5742e37d9b1669e',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.Avalanche]: {
        isEvm: true,
        id: 43114,
        name: 'avax',
        currency: 'AVAX'
    },
    [chain_1.EChains.FANTOM]: {
        isEvm: true,
        id: 250,
        name: 'fantom',
        currency: 'FTM'
    },
    [chain_1.EChains.ARBITRUM]: {
        isEvm: true,
        id: 42161,
        name: 'etherum',
        currency: 'ETH',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Etherum].find(el => el.coingeckoId == 'ethereum')),
        rpc: {
            endpoint: 'https://arbitrum-mainnet.infura.io/v3/f09fda3fe03b4df3895ea764b39024b0',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.Metis]: {
        isEvm: true,
        id: 1088,
        name: 'metis',
        currency: 'METIS',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Metis].find(el => el.coingeckoId == 'metis-token')),
        rpc: {
            endpoint: 'https://andromeda.metis.io/?owner=1088',
            supportBatchCall: true
        },
        explorerScanLike: 'https://andromeda-explorer.metis.io/api'
    },
    [chain_1.EChains.GodwokenV1]: {
        isEvm: true,
        id: 71402,
        name: 'GodwokenV1',
        currency: 'Godwoken',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Etherum].find(el => el.coingeckoId == 'ethereum')),
        rpc: {
            endpoint: 'https://v1.mainnet.godwoken.io/rpc',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.OasisEmerald]: {
        isEvm: true,
        id: 42262,
        name: 'OasisEmerald',
        currency: 'ROSE',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.OasisEmerald].find(el => el.coingeckoId == 'oasis-network')),
        explorer: {
            tx: function (tx) { return `https://explorer.emerald.oasis.dev/tx/${tx}/internal-transactions`; },
        },
        rpc: {
            endpoint: 'https://emerald.oasis.dev',
            supportBatchCall: true
        },
        explorerScanLike: 'https://explorer.emerald.oasis.dev/api'
    },
    [chain_1.EChains.Meter]: {
        isEvm: true,
        id: 82,
        name: 'Meter',
        currency: 'MTR',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Meter].find(el => el.coingeckoId == 'meter-stable')),
        explorer: {
            tx: function (tx) { return `https://scan.meter.io/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://rpc.meter.io',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.EosEVM]: {
        isEvm: true,
        id: 17777,
        name: 'EOS',
        currency: 'EOS',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.EosEVM].find(el => el.coingeckoId == 'eos')),
        explorer: {
            tx: function (tx) { return `https://explorer.evm.eosnetwork.com/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://api.evm.eosnetwork.com/',
            supportBatchCall: false
        }
    },
    [chain_1.EChains.OntologyEVM]: {
        isEvm: true,
        id: 58,
        name: 'ONG',
        currency: 'ONG',
        // token: new TokenJSON(ALL_TOKENS[EChains.EosEVM].find(el => el.coingeckoId == 'eos')),
        explorer: {
            tx: function (tx) { return `https://explorer.ont.io/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://dappnode1.ont.io:10339',
            supportBatchCall: true
        }
    },
    [chain_1.EChains.KavaEVM]: {
        isEvm: true,
        id: 2222,
        name: 'KavaEVM',
        currency: 'KAVA',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.KavaEVM].find(el => el.coingeckoId == 'kava')),
        explorer: {
            tx: function (tx) { return `https://explorer.kava.io/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://evm2.kava.io',
            supportBatchCall: true
        },
        explorerScanLike: 'https://explorer.kava.io/api'
    },
    [chain_1.EChains.MOONBEAM]: {
        isEvm: true,
        id: 1284,
        name: 'MOONBEAM',
        currency: 'GLMR',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.MOONBEAM].find(el => el.coingeckoId == 'wrapped-moonbeam')),
        explorer: {
            tx: function (tx) { return `https://moonscan.io/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://moonbeam.unitedbloc.com:3000',
            supportBatchCall: true
        },
        explorerScanLike: 'https://api-moonbeam.moonscan.io/api',
        explorerScanLikeToken: 'VIVQDJPYTVTCSS4VI8QF7MDWCKYUP47WGH'
    },
    [chain_1.EChains.Ultron]: {
        isEvm: true,
        id: 1231,
        name: 'Ultron',
        currency: 'ULX',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Ultron].find(el => el.coingeckoId == 'ultron')),
        explorer: {
            tx: function (tx) { return `https://ulxscan.com/transactions/${tx}`; },
        },
        rpc: {
            endpoint: 'https://ultron-rpc.net',
            supportBatchCall: true
        },
    },
    [chain_1.EChains.Gnosis]: {
        isEvm: true,
        id: 100,
        name: 'xDAI',
        currency: 'xDAI',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Etherum].find(el => el.coingeckoId == 'dai')),
        explorer: {
            tx: function (tx) { return `https://gnosisscan.io/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://rpc.gnosischain.com',
            supportBatchCall: true
        },
        explorerScanLike: 'https://blockscout.com/xdai/mainnet/api'
    },
    [chain_1.EChains.Core]: {
        isEvm: true,
        id: 1116,
        name: 'CORE',
        currency: 'CORE',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Core].find(el => el.coingeckoId == 'core')),
        explorer: {
            tx: function (tx) { return `https://scan.coredao.org/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://rpc.coredao.org',
            supportBatchCall: true
        },
        // explorerScanLike: 'https://scan.coredao.org/api',
        // explorerScanLikeToken: '9e4f7ba22c5b44df9d11ef526a8ded36'
    },
    [chain_1.EChains.Energy]: {
        isEvm: true,
        id: 39797,
        name: 'NRG',
        currency: 'NRG',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Energy].find(el => el.coingeckoId == 'energi')),
        explorer: {
            tx: function (tx) { return `https://explorer.energi.network/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://nodeapi.energi.network',
            supportBatchCall: true
        },
        explorerScanLike: 'http://explorer.energi.network/api',
        // explorerScanLikeToken: '9e4f7ba22c5b44df9d11ef526a8ded36'
    },
    [chain_1.EChains.Bitgert]: {
        isEvm: true,
        id: 32520,
        name: 'BRISE',
        currency: 'Brise',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Bitgert].find(el => el.coingeckoId == 'bitrise-token')),
        explorer: {
            tx: function (tx) { return `https://brisescan.com/tx/${tx}`; },
        },
        rpc: {
            endpoint: 'https://rpc.icecreamswap.com',
            supportBatchCall: true
        },
        //explorerScanLike: 'https://brisescan.com/api',
        // explorerScanLikeToken: '9e4f7ba22c5b44df9d11ef526a8ded36'
    },
    [chain_1.EChains.Syscoin]: {
        id: 57,
        rpc: {
            endpoint: 'https://rpc.syscoin.org',
            supportBatchCall: true
        },
        name: 'SYS',
        currency: 'SYS',
        explorer: {
            tx: function (tx) { return `https://explorer.syscoin.org/tx/${tx}`; },
        },
        isEvm: true,
        explorerScanLike: 'https://explorer.syscoin.org/api',
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Syscoin].find(el => el.coingeckoId == 'syscoin')),
    },
    [chain_1.EChains.Wanchain]: {
        id: 888,
        rpc: {
            endpoint: 'https://gwan2-ssl.wandevs.org',
            supportBatchCall: true
        },
        name: 'WAN',
        currency: 'WAN',
        explorer: {
            tx: function (tx) { return `https://wanexplorer.io/txs/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Wanchain].find(el => el.coingeckoId == 'wanchain')),
    },
    [chain_1.EChains.DarwiniaCrabNetwork]: {
        id: 44,
        rpc: {
            endpoint: 'https://crab.api.onfinality.io/public',
            supportBatchCall: true
        },
        name: 'CRAB',
        currency: 'CRAB',
        explorer: {
            tx: function (tx) { return `https://crab.subview.xyz/tx/${tx}`; },
        },
        isEvm: true,
    },
    [chain_1.EChains.DarwiniaNetwork]: {
        id: 46,
        rpc: {
            endpoint: 'https://rpc.darwinia.network',
            supportBatchCall: true
        },
        name: 'RING',
        currency: 'RING',
        explorer: {
            tx: function (tx) { return `https://darwinia.subview.xyz/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.DarwiniaNetwork].find(el => el.coingeckoId == 'darwinia-network-native-token')),
        explorerScanLike: 'https://darwinia.subview.xyz/api'
    },
    [chain_1.EChains.Celo]: {
        id: 42220,
        rpc: {
            endpoint: 'https://rpc.ankr.com/celo',
            supportBatchCall: true
        },
        name: 'CELO',
        currency: 'CELO',
        explorer: {
            tx: function (tx) { return `https://explorer.celo.org/mainnet/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Celo].find(el => el.coingeckoId == 'celo')),
        explorerScanLike: 'https://explorer.celo.org/mainnet/api'
    },
    [chain_1.EChains.Mantle]: {
        id: 5000,
        rpc: {
            endpoint: 'https://rpc.mantle.xyz',
            supportBatchCall: true
        },
        name: 'MNT',
        currency: 'MNT',
        explorer: {
            tx: function (tx) { return `https://explorer.mantle.xyz/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Mantle].find(el => el.coingeckoId == 'mantle')),
        explorerScanLike: 'https://explorer.mantle.xyz/api'
    },
    [chain_1.EChains.Neon]: {
        id: 245022934,
        rpc: {
            endpoint: 'https://neon-proxy-mainnet.solana.p2p.org',
            supportBatchCall: true
        },
        name: 'NEON',
        currency: 'NEON',
        explorer: {
            tx: function (tx) { return `https://neonscan.org/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Neon].find(el => el.coingeckoId == 'neon'))
    },
    [chain_1.EChains.Rollux]: {
        id: 570,
        rpc: {
            endpoint: 'https://rpc.rollux.com',
            supportBatchCall: true
        },
        name: 'Rollux',
        currency: 'SYS',
        explorer: {
            tx: function (tx) { return `https://explorer.rollux.com/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Rollux].find(el => el.coingeckoId == 'syscoin')),
        explorerScanLike: 'https://explorer.rollux.com/api'
    },
    [chain_1.EChains.Oasys]: {
        id: 248,
        rpc: {
            endpoint: 'https://rpc.mainnet.oasys.games/',
            supportBatchCall: true
        },
        name: 'Rollux',
        currency: 'SYS',
        explorer: {
            tx: function (tx) { return `https://scan.oasys.games/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Oasys].find(el => el.coingeckoId == 'oasys')),
        explorerScanLike: 'https://scan.oasys.games/api'
    },
    [chain_1.EChains.Fx]: {
        id: 530,
        rpc: {
            endpoint: 'https://fx-json-web3.functionx.io:8545',
            supportBatchCall: true
        },
        name: 'Fx',
        currency: 'FX',
        explorer: {
            tx: function (tx) { return `https://starscan.io/dex/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Oasys].find(el => el.coingeckoId == 'oasys')),
    },
    [chain_1.EChains.Pego]: {
        id: 20201022,
        rpc: {
            endpoint: 'https://node3.pegorpc.com',
            supportBatchCall: true
        },
        name: 'PG',
        currency: 'PG',
        explorer: {
            tx: function (tx) { return `https://scan.pego.network/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Pego].find(el => el.coingeckoId == 'pego-network-2')),
        explorerScanLike: 'https://scan.pego.network/api'
    },
    [chain_1.EChains.Beam]: {
        id: 4337,
        rpc: {
            endpoint: 'https://subnets.avax.network/beam/mainnet/rpc',
            supportBatchCall: true
        },
        name: 'Beam',
        currency: 'Beam',
        explorer: {
            tx: function (tx) { return `https://subnets.avax.network/beam/tx/${tx}`; },
        },
        isEvm: true,
        token: new allTokens_1.TokenJSON(allTokens_1.ALL_TOKENS[chain_1.EChains.Beam].find(el => el.coingeckoId == 'beam-2'))
    }
};
