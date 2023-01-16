import { Nft, FetchMethod, Section, Server } from '../db/types';

export const rektNfts: Nft[] = [
  {
    name: 'Degenz Access Pass',
    collectionSlug: 'degenzaccesspass',
    address: '0xA56d1B415Cb4B23e76910bb8c2F5A0a5B2C86a87',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.singles,
    mintDate: new Date('2022-06-01'),
  },
  {
    name: 'Degenz (Flips) Gold Pass',
    collectionSlug: 'flipsgoldpass',
    address: '0x8B5cC2be0519BcC13c30e83Dc439BdEab9B3D854',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.singles,
    mintDate: new Date('2022-08-01'),
  },
  {
    name: 'Degenz',
    collectionSlug: 'degenz',
    address: '0xfb9e9e7150cCebFe42D58de1989C5283d0EAAB2e',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.singles,
    mintDate: new Date('2021-07-01'),
  },
  {
    name: 'Re-Genz',
    collectionSlug: 're-genz',
    address: '0xAFd867667eC6D2Be5BdCd41D76Da7e96A1f67F18',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.singles,
    mintDate: new Date('2021-08-01'),
  },
  {
    name: 'TABZ',
    collectionSlug: 'tabz',
    address: '0xFF72F37aA4EAe3B7e1752e25DB85b209f12c1A33',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.singles,
    mintDate: new Date('2022-12-22'),
  },
  {
    name: 'rektguy',
    collectionSlug: 'rektguy',
    address: '0xB852c6b5892256C264Cc2C888eA462189154D8d7',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
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
        name: 'Diamond Dollies',
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
      {
        name: 'Tiedye',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Tiedye',
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
    server: Server.rekt,
    sectionSlug: Section.rld,
    mintDate: new Date('2022-02-01'),
  },
  {
    name: 'RLD Editions',
    collectionSlug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
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
      {
        tokenId: 12,
        name: 'insomnia',
        rldDropNumber: 9,
        mintDate: new Date('2022-11-01'),
      },
      {
        tokenId: 13,
        name: 'LAST ORDERS',
        rldDropNumber: 10,
        mintDate: new Date('2022-12-01'),
      },
      {
        tokenId: 14,
        name: 'Tin-Tin Tatouages',
        rldDropNumber: 11,
        mintDate: new Date('2022-12-31'),
      },
    ],
  },
  {
    name: '7 Deadly Sins',
    collectionSlug: 'osf-7-sins',
    address: '0x8297d8e55C27AA6CE2d8a65b1Fa3Debb02410efC',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
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
    server: Server.rekt,
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
    server: Server.rekt,
    sectionSlug: Section.distillery,
  },
  {
    name: 'sangsom & lemonade',
    collectionSlug: 'osfs-distillery',
    query: '?search[query]=sangsom&search[sortAscending]=true&search[sortBy]=UNIT_PRICE',
    address: '0x26c7de7d475AAD40Cf8211c0e9Ad8469aa4E6878',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaTraitScrape,
    server: Server.rekt,
    sectionSlug: Section.distillery,
  },
  {
    name: 'thx for playing',
    collectionSlug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
    sectionSlug: Section.editions,
    tokenId: 10,
  },
  {
    name: 'Lova Park',
    collectionSlug: 'lova-park-33260',
    address: '0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.superRareScrape,
    server: Server.rekt,
    sectionSlug: Section.oneOfOnes,
  },
  {
    name: 'rekt6529',
    collectionSlug: 'thememes6529',
    address: '0x33fd426905f149f8376e227d0c9d3340aad17af1',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
    sectionSlug: Section.editions,
    tokenId: 5,
  },
  {
    name: `joke's on you (deck of degen)`,
    collectionSlug: 'dodart',
    address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaTraitScrape,
    server: Server.rekt,
    sectionSlug: Section.editions,
    query:
      '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Artist&search[stringTraits][0][values][0]=OSF',
  },
  {
    name: 'Rolling (Alphadoggg)',
    collectionSlug: 'alphadoggg-signature',
    address: '0x48dacfb883a452af47404650f7538e6e0893cc56',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
    sectionSlug: Section.editions,
    tokenId: 4,
  },
  {
    name: 'GHOSTPEPES',
    collectionSlug: 'GHOSTPEPES',
    contractType: 'PEPE',
    fetchMethod: FetchMethod.pepeApi,
    server: Server.rekt,
    sectionSlug: Section.editions,
  },
  {
    name: 'Stay Love (Space Fight)',
    collectionSlug: 'space-fight-releases',
    address: '0xf12fd10f278c1fb29a62d6338d050cf2832f8080',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
    sectionSlug: Section.editions,
    tokenId: 10003,
  },
  {
    name: 'PAR',
    collectionSlug: 'rekt-cities-par',
    address: '0x72499647776e47f73EA78982F16CE9e025B825fb',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.cities,
    supply: 403,
  },
  {
    name: 'NYC',
    collectionSlug: 'rekt-cities-nyc',
    address: '0x87463F3E25adEEB33bc03b8a7DcE6FA60F160c8C',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.cities,
    supply: 504,
  },
  {
    name: 'TYO',
    collectionSlug: 'rekt-cities-tyo',
    address: '0xE3adB359D4Aa4eB57e0B8a732cd26331111a5518',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.cities,
    supply: 207,
  },
  {
    name: 'HK',
    collectionSlug: 'rekt-cities-by-osf',
    address: '0xa4c97d26481ff5ccae89b13715651b3c8d69bbdb',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.cities,
    supply: 241,
  },
  {
    name: 'LDN',
    collectionSlug: 'rekt-cities-ldn',
    address: '0xE5F3D24ba4f701b199bf5270fB72b81BD2F1e6f6',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.cities,
    supply: 303,
  },
  {
    name: 'rektguyz secured - Ledger',
    collectionSlug: 'ledger-x-osf-ledger-op3n-2022',
    address: '0x83ecb33c9ac7b9bcebad835a25ba74b2477dd733',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rekt,
    sectionSlug: Section.editions,
  },
  {
    name: 'The Keeper Returns',
    collectionSlug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    contractType: 'ERC1155',
    fetchMethod: FetchMethod.openSeaScrape,
    server: Server.rekt,
    sectionSlug: Section.keeper,
    tokens: [
      {
        tokenId: 15,
        name: 'The Keeper Returns',
        mintDate: new Date('2023-01-03'),
      },
      {
        tokenId: 16,
        name: 'UPEROL RED',
        mintDate: new Date('2023-01-03'),
      },
      {
        tokenId: 17,
        name: 'ONE MORE',
        mintDate: new Date('2023-01-04'),
      },
      {
        tokenId: 18,
        name: 'Hotel Shinjuku',
        mintDate: new Date('2023-01-09'),
      },
    ],
  },
];
