import { CliccSection, FetchMethod, Nft, Section, Server } from '../db/types';

export const cliccNfts: Nft[] = [
  {
    name: 'Clicc',
    collectionSlug: 'moneyneversleeps-clicc',
    address: '0x5840E4CaB1480a75c31d9688ef03682D756a67d1',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.clicc,
    sectionSlug: Section.clicc,
    tokens: [
      {
        tokenId: 1,
        name: 'clicc card by AD_AD',
        cliccSection: CliccSection.passes,
      },
      {
        tokenId: 9,
        name: 'cliccportal by AD_AD',
        cliccSection: CliccSection.passes,
      },
      {
        tokenId: 2,
        name: 'call to adventure by bastien',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 3,
        name: 'initiation by callas',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 4,
        name: 'transformation by twickert (remix)',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 5,
        name: 'transformation by twickert',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 6,
        name: 'return by tony sellen',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 7,
        name: 'sneeches get stitches by etcha',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 8,
        name: 'teenage wasteland by bastien x twickert',
        cliccSection: CliccSection.season1,
      },
      {
        tokenId: 10,
        name: 'the yearn for freedom by noealz',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 11,
        name: 'shotcallers by jambone',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 12,
        name: 'cetecean by timmboslice',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 13,
        name: 'not so still life by jeremy booth',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 14,
        name: 'double agent by ivan casis jr',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 15,
        name: 'prey by sadboi',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 16,
        name: 'dont mess with whales by stzh',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 17,
        name: 'the world beyond by jos',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 18,
        name: 'transcending dreams by lisanne haack',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 19,
        name: 'brush strokes by raphaël erba',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 20,
        name: 'the walls by tishk barzanji',
        cliccSection: CliccSection.season2,
      },
      {
        tokenId: 21,
        name: 'waiting for uponly by lip comarella',
        cliccSection: CliccSection.season2,
      },
    ],
  },
];
