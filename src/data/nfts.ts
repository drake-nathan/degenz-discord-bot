export interface ElevenFiftyFiveToken {
  tokenId: number;
  name: string;
  rldDropNumber?: number;
  rldDropDate?: Date;
}

export interface TraitFloor {
  name: string;
  query: string;
}

export interface Nfts {
  name: string;
  slug: string;
  address: string;
  type: 'ERC721' | 'ERC1155';
  elevenFiftyFiveTokens?: ElevenFiftyFiveToken[];
  specialTraitFloors?: TraitFloor[];
}

export const nfts: Nfts[] = [
  {
    name: 'Degenz',
    slug: 'degenz',
    address: '0xfb9e9e7150cCebFe42D58de1989C5283d0EAAB2e',
    type: 'ERC721',
  },
  {
    name: 'Re-Genz',
    slug: 're-genz',
    address: '0xAFd867667eC6D2Be5BdCd41D76Da7e96A1f67F18',
    type: 'ERC721',
  },
  {
    name: 'Degenz Access Pass',
    slug: 'degenzaccesspass',
    address: '0xA56d1B415Cb4B23e76910bb8c2F5A0a5B2C86a87',
    type: 'ERC1155',
  },
  {
    name: 'rektguy',
    slug: 'rektguy',
    address: '0xB852c6b5892256C264Cc2C888eA462189154D8d7',
    type: 'ERC721',
    specialTraitFloors: [
      {
        name: 'Laser Eyes',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Eyes&search[stringTraits][0][values][0]=Laser%20Eyes',
      },
      {
        name: 'Blue Beams',
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Eyes&search[stringTraits][0][values][0]=Blue%20Beams',
      },
    ],
  },
  {
    name: 'Red Lite District',
    slug: 'osf-rld',
    address: '0x513cD71defC801b9c1aA763dB47b5df223da77a2',
    type: 'ERC721',
  },
  {
    name: 'OSF Editions',
    slug: 'osf',
    address: '0xc23a563A26AFFf06E945ACE77173E1568F288cE5',
    type: 'ERC1155',
    elevenFiftyFiveTokens: [
      {
        tokenId: 1,
        name: 'FUCK CASH GRABS',
        rldDropNumber: 1,
        rldDropDate: new Date('2022-03-01'),
      },
      {
        tokenId: 3,
        name: 'professional degen 3',
        rldDropNumber: 2,
        rldDropDate: new Date('2022-04-01'),
      },
      {
        tokenId: 4,
        name: 'the rekt show',
        rldDropNumber: 3,
        rldDropDate: new Date('2022-05-01'),
      },
      {
        tokenId: 5,
        name: 'cruising',
        rldDropNumber: 4,
        rldDropDate: new Date('2022-06-01'),
      },
      {
        tokenId: 6,
        name: 'UPEROL SPRITZ',
        rldDropNumber: 5,
        rldDropDate: new Date('2022-07-01'),
      },
      {
        tokenId: 7,
        name: 'Send It!',
        rldDropNumber: 6,
        rldDropDate: new Date('2022-08-01'),
      },
      {
        tokenId: 8,
        name: 'The Penrose Hotel',
        rldDropNumber: 7,
        rldDropDate: new Date('2022-09-01'),
      },
      {
        tokenId: 11,
        name: 'radio city',
        rldDropNumber: 8,
        rldDropDate: new Date('2022-10-01'),
      },
    ],
  },
  {
    name: '7 Deadly Sins',
    slug: 'osf-7-sins',
    address: '0x8297d8e55C27AA6CE2d8a65b1Fa3Debb02410efC',
    type: 'ERC1155',
    elevenFiftyFiveTokens: [
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
];
