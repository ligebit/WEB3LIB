import { TokenJSON } from "./allTokens";
import { Token } from "./token";
export declare enum EChains {
    Waves = -2,
    Solana = -1,
    Etherum = 1,
    Optimism = 10,
    Cronos = 25,
    TelosEVM = 40,
    DarwiniaCrabNetwork = 44,
    DarwiniaNetwork = 46,
    BSC = 56,
    Syscoin = 57,
    OKXChain = 66,
    HooSmartChain = 70,
    Meter = 82,
    Gnosis = 100,
    Fuse = 122,
    HuobiChain = 128,
    Polygon = 137,
    Oasys = 248,
    FANTOM = 250,
    BobaNetwork = 288,
    KCC = 321,
    Fx = 530,
    Rollux = 570,
    ASTAR = 592,
    Wanchain = 888,
    Metis = 1088,
    Core = 1116,
    Ultron = 1231,
    MOONBEAM = 1284,
    Moonriver = 1285,
    CubeChain = 1818,
    KavaEVM = 2222,
    Beam = 4337,
    Mantle = 5000,
    Evmos = 9001,
    Bitgert = 32520,
    Avalanche = 43114,
    ARBITRUM = 42161,
    Celo = 42220,
    OasisEmerald = 42262,
    GodwokenV1 = 71402,
    EosEVM = 17777,
    Energy = 39797,
    Pego = 20201022,
    Neon = 245022934,
    Aurora = 1313161554,
    Harmony = 1666600000,
    OntologyEVM = 58,
    NEAR,
    Ontology,
    Tron,
    EChains
}
export interface IChain<T extends Token = TokenJSON> {
    id?: number;
    isEvm?: boolean;
    name?: string;
    currency?: string;
    token?: T;
    explorerScanLike?: string;
    explorerScanLikeToken?: string;
    explorer?: {
        address?(address: string): string;
        tx?(tx: string): string;
    };
    rpc?: {
        endpoint: string;
        supportBatchCall: boolean;
    };
}
