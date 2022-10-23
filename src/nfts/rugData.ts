import { FetchMethod, Nft, Section, Server } from '../db/types';

export const rugNfts: Nft[] = [
  {
    name: 'Membership Pass',
    collectionSlug: 'rug-radio-membership-pass',
    address: '0xd1d411D2Da363144248b98aDaB453aa3B19cCF04',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rug,
    sectionSlug: Section.singles,
  },
  {
    name: '$RUG Token',
    address: '0x075f4849d3c2088e5599cecf6ee0fdf8addfd124',
    contractType: 'ERC20',
    fetchMethod: FetchMethod.dexScreener,
    server: Server.rug,
    sectionSlug: Section.singles,
  },
  {
    name: 'Genesis NFT',
    collectionSlug: 'ruggenesis-nft',
    address: '0x8ff1523091c9517BC328223D50b52Ef450200339',
    contractType: 'ERC721',
    fetchMethod: FetchMethod.openSeaApi,
    server: Server.rug,
    sectionSlug: Section.rugs,
    rugs: [
      {
        name: 'Blue chip (Punks)',
        openseaSlug: 'Blue%20Chip',
      },
      {
        name: 'One of us (Apes)',
        openseaSlug: 'One%20of%20Us',
      },
      {
        name: 'Stonehenge',
        openseaSlug: 'Stonehenge',
      },
      {
        name: 'Looks rare (Squiggles)',
        openseaSlug: 'Looks%20Rare',
      },
      {
        name: 'Beep boop',
        openseaSlug: 'Beep%20boop',
      },
      {
        name: 'K4M1',
        openseaSlug: 'K4M1',
      },
      {
        name: 'Pineapple Pizza',
        openseaSlug: 'Pineapple%20Pizza',
      },
      {
        name: 'Rainbow Chip (Doodles)',
        openseaSlug: 'Rainbow%20Chip',
      },
      {
        name: 'Banana',
        openseaSlug: 'Banana',
      },
      {
        name: 'Brontosaurus',
        openseaSlug: 'Brontosaurus',
      },
      {
        name: 'We love the cats',
        openseaSlug: 'We%20love%20the%20cats',
      },
      {
        name: 'Swag',
        openseaSlug: 'Swag',
      },
      {
        name: '1 D = 1 B (cryptodickbutts)',
        openseaSlug: '1%20D%20%3D%201%20B',
      },
      {
        name: '!vibe (HYPNOTOAD)',
        openseaSlug: '%21vibe',
      },
      {
        name: 'IYKYK',
        openseaSlug: 'IYKYK',
      },
      {
        name: 'rekt! (Bumble)',
        openseaSlug: 'rekt%21',
      },
    ],
  },
];
