import { FetchMethod, Nft, RugRole, Section } from '../db/types';

export const rugNfts: Nft[] = [
  {
    name: 'Membership Pass',
    collectionSlug: 'rug-radio-membership-pass',
    address: '0xd1d411D2Da363144248b98aDaB453aa3B19cCF04',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.singles,
  },
  {
    name: '$RUG Token',
    address: '0x075f4849d3c2088e5599cecf6ee0fdf8addfd124',
    contractType: 'ERC20',
    fetchMethod: FetchMethod.dexScreener,
    sectionSlug: Section.singles,
  },
  {
    name: 'Genesis NFT',
    collectionSlug: 'ruggenesis-nft',
    address: '0x8ff1523091c9517BC328223D50b52Ef450200339',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    sectionSlug: Section.rektguy,
    specialTraitFloors: [
      {
        name: 'Blue chip (Punks)',
        rugRole: RugRole.Standard,
        supply: 754,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Meme&search[stringTraits][0][values][0]=Blue%20Chip&search[stringTraits][1][name]=Role&search[stringTraits][1][values][0]=Standard',
      },
      {
        name: 'One of us (Apes)',
        rugRole: RugRole.Standard,
        supply: 711,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=One%20of%20Us',
      },
      {
        name: 'Stonehenge',
        rugRole: RugRole.Standard,
        supply: 707,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Stonehenge',
      },
      {
        name: 'Looks rare',
        rugRole: RugRole.Standard,
        supply: 702,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Looks%20Rare&search[toggles][0]=BUY_NOW',
      },
      {
        name: 'Beep boop',
        rugRole: RugRole.Standard,
        supply: 703,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Beep%20boop',
      },
      {
        name: 'K4M1',
        rugRole: RugRole.Standard,
        supply: 697,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=K4M1',
      },
      {
        name: 'Pineapple Pizza',
        rugRole: RugRole.Standard,
        supply: 687,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Pineapple%20Pizza',
      },
      {
        name: 'Rainbow Chip (Doodles)',
        rugRole: RugRole.Standard,
        supply: 719,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Rainbow%20Chip',
      },
      {
        name: 'Banana',
        rugRole: RugRole.Standard,
        supply: 719,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Banana',
      },
      {
        name: 'Bontosaurus',
        rugRole: RugRole.Standard,
        supply: 680,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Brontosaurus',
      },
      {
        name: 'We love the cats',
        rugRole: RugRole.Standard,
        supply: 672,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=We%20love%20the%20cats',
      },
      {
        name: 'Swag',
        rugRole: RugRole.Standard,
        supply: 724,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=Swag',
      },
      {
        name: '1 D = 1 B (cryptodickbutts)',
        rugRole: RugRole.Standard,
        supply: 692,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=1%20D%20%3D%201%20B',
      },
      {
        name: '!vibe (HYPNOTOAD)',
        rugRole: RugRole.Standard,
        supply: 678,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=%21vibe',
      },
      {
        name: 'IYKYK',
        rugRole: RugRole.Standard,
        supply: 661,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=IYKYK',
      },
      {
        name: 'rekt!',
        rugRole: RugRole.Standard,
        supply: 644,
        query:
          '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=Standard&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=rekt%21',
      },
    ],
  },
];
