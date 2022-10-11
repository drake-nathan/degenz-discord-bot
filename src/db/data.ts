import { Nft, FetchMethod, Section } from './types';

export const nfts: Nft[] = [
  {
    name: 'Degenz Access Pass',
    collectionSlug: 'degenzaccesspass',
    address: '0xA56d1B415Cb4B23e76910bb8c2F5A0a5B2C86a87',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.singles,
    mintDate: new Date('2022-06-01'),
  },
  {
    name: 'Degenz',
    collectionSlug: 'degenz',
    address: '0xfb9e9e7150cCebFe42D58de1989C5283d0EAAB2e',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.singles,
    mintDate: new Date('2021-07-01'),
  },
  {
    name: 'Re-Genz',
    collectionSlug: 're-genz',
    address: '0xAFd867667eC6D2Be5BdCd41D76Da7e96A1f67F18',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.singles,
    mintDate: new Date('2021-08-01'),
  },
  {
    name: 'rektguy',
    collectionSlug: 'rektguy',
    address: '0xB852c6b5892256C264Cc2C888eA462189154D8d7',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.rektguy,
    mintDate: new Date('2022-05-01'),
    specialTraitFloors: [
      {
        name: 'Blue Beams',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Eyes&search[stringTraits][0][values][0]=Blue%20Beams',
      },
      {
        name: 'Laser Eyes',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Eyes&search[stringTraits][0][values][0]=Laser%20Eyes',
      },
      {
        name: 'Golden Girls',
        query:
          '?search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Gold&search[sortAscending]=true&search[sortBy]=UNIT_PRICE',
      },
      {
        name: 'Silver Foxes',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Iced',
      },
      {
        name: 'Candles',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Background&search[stringTraits][0][values][0]=Candles',
      },
      {
        name: 'Candles Inverted',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Background&search[stringTraits][0][values][0]=Candles%20Inverted',
      },
      {
        name: 'Saturn Shades',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Eyes&search[stringTraits][0][values][0]=Saturn%20Shades',
      },
      {
        name: 'Sharp Teeth',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Teeth&search[stringTraits][0][values][0]=Sharp%20Aquamarine&search[stringTraits][0][values][1]=Sharp%20Cantaloupe&search[stringTraits][0][values][2]=Sharp%20Crimson&search[stringTraits][0][values][3]=Sharp%20Toxic&search[stringTraits][0][values][4]=Sharp%20Violet',
      },
      {
        name: 'Conical',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Headgear&search[stringTraits][0][values][0]=Conical%20Aquamarine&search[stringTraits][0][values][1]=Conical%20Cantaloupe&search[stringTraits][0][values][2]=Conical%20Crimson&search[stringTraits][0][values][3]=Conical%20Toxic&search[stringTraits][0][values][4]=Conical%20Violet',
      },
      {
        name: 'Robotic',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Robotic%20Aquamarine&search[stringTraits][0][values][1]=Robotic%20Cantaloupe&search[stringTraits][0][values][2]=Robotic%20Crimson&search[stringTraits][0][values][3]=Robotic%20Toxic&search[stringTraits][0][values][4]=Robotic%20Violet',
      },
      {
        name: 'mfer',
        query:
          '?search[stringTraits][0][name]=Logo&search[stringTraits][0][values][0]=mfer',
      },
      {
        name: 'Bananas',
        query:
          '?search[stringTraits][0][name]=Liquid&search[stringTraits][0][values][0]=Banana',
      },
      {
        name: '3d Glasses',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Eyes&search[stringTraits][0][values][0]=3D%20Glasses',
      },
      {
        name: 'Serum',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Liquid&search[stringTraits][0][values][0]=Serum',
      },
      {
        name: "Diamond Dolly's",
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Diamond',
      },
      {
        name: 'Strawberries',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Strawberry%20Laces',
      },
      {
        name: 'Clowns',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Mask&search[stringTraits][0][values][0]=Clown',
      },
      {
        name: 'Grills',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Teeth&search[stringTraits][0][values][0]=Silver%20Grills&search[stringTraits][0][values][1]=Gold%20Grills',
      },
    ],
    tokens: [
      {
        tokenId: 3566,
      },
      {
        tokenId: 5144,
      },
      {
        tokenId: 6799,
      },
      {
        tokenId: 4160,
      },
      {
        tokenId: 4211,
      },
      {
        tokenId: 7091,
      },
      {
        tokenId: 2883,
      },
      {
        tokenId: 2850,
      },
      {
        tokenId: 6660,
      },
      {
        tokenId: 6113,
      },
    ],
  },
  {
    name: 'Red Lite District',
    collectionSlug: 'osf-rld',
    address: '0x513cD71defC801b9c1aA763dB47b5df223da77a2',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.rld,
    mintDate: new Date('2022-02-01'),
  },
  {
    name: 'RLD Editions',
    collectionSlug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    sectionSlug: Section.rld,
    tokens: [
      {
        tokenId: 1,
        name: 'FUCK CASH GRABS',
        rldDropNumber: 1,
        mintDate: new Date('2022-03-01'),
      },
      {
        tokenId: 3,
        name: 'professional degen 3',
        rldDropNumber: 2,
        mintDate: new Date('2022-04-01'),
      },
      {
        tokenId: 4,
        name: 'the rekt show',
        rldDropNumber: 3,
        mintDate: new Date('2022-05-01'),
      },
      {
        tokenId: 5,
        name: 'cruising',
        rldDropNumber: 4,
        mintDate: new Date('2022-06-01'),
      },
      {
        tokenId: 6,
        name: 'UPEROL SPRITZ',
        rldDropNumber: 5,
        mintDate: new Date('2022-07-01'),
      },
      {
        tokenId: 7,
        name: 'Send It!',
        rldDropNumber: 6,
        mintDate: new Date('2022-08-01'),
      },
      {
        tokenId: 8,
        name: 'The Penrose Hotel',
        rldDropNumber: 7,
        mintDate: new Date('2022-09-01'),
      },
      {
        tokenId: 11,
        name: 'radio city',
        rldDropNumber: 8,
        mintDate: new Date('2022-10-01'),
      },
    ],
  },
  {
    name: '7 Deadly Sins',
    collectionSlug: 'osf-7-sins',
    address: '0x8297d8e55C27AA6CE2d8a65b1Fa3Debb02410efC',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    sectionSlug: Section.sevenDeadlySins,
    tokens: [
      {
        tokenId: 3,
        name: 'The Keeper',
      },
      {
        tokenId: 2,
        name: 'pride',
      },
      {
        tokenId: 4,
        name: 'greed',
      },
      {
        tokenId: 5,
        name: 'lust',
      },
      {
        tokenId: 6,
        name: 'envy',
      },
      {
        tokenId: 7,
        name: 'gluttony',
      },
      {
        tokenId: 8,
        name: 'rage',
      },
      {
        tokenId: 9,
        name: 'sloth',
      },
      {
        tokenId: 1,
        name: 'purgatorio',
      },
    ],
  },
  {
    name: 'no rgb signal',
    collectionSlug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    sectionSlug: Section.oneOfOnes,
    tokenId: 2,
  },
  {
    name: 'The Private Party',
    collectionSlug: 'osfs-distillery',
    query:
      '?search[query]=private%20party&search[sortAscending]=true&search[sortBy]=UNIT_PRICE',
    address: '0x26c7de7d475AAD40Cf8211c0e9Ad8469aa4E6878',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaTraitScrape,
    sectionSlug: Section.distillery,
  },
  {
    name: 'sangsom & lemonade',
    collectionSlug: 'osfs-distillery',
    query: '?search[query]=sangsom&search[sortAscending]=true&search[sortBy]=UNIT_PRICE',
    address: '0x26c7de7d475AAD40Cf8211c0e9Ad8469aa4E6878',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaTraitScrape,
    sectionSlug: Section.distillery,
  },
  {
    name: 'the rekt lotto 1',
    collectionSlug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    sectionSlug: Section.editions,
    tokenId: 10,
  },
  {
    name: 'Lova Park',
    collectionSlug: 'lova-park-33260',
    address: '0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.superRareScrape,
    sectionSlug: Section.oneOfOnes,
  },
  {
    name: 'rekt6529',
    collectionSlug: 'thememes6529',
    address: '0x33fd426905f149f8376e227d0c9d3340aad17af1',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    sectionSlug: Section.editions,
    tokenId: 5,
  },
  {
    name: `joke's on you`,
    collectionSlug: 'dodart',
    address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaTraitScrape,
    sectionSlug: Section.editions,
    query:
      '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Artist&search[stringTraits][0][values][0]=OSF',
  },
  {
    name: 'Rolling',
    collectionSlug: 'alphadoggg-signature',
    address: '0x48dacfb883a452af47404650f7538e6e0893cc56',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    sectionSlug: Section.editions,
    tokenId: 4,
  },
];
