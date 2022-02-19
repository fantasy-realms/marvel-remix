var remixCards = {
  'MR01': {
    id: 'MR01',
    type: 'hero',
    name: 'Angel',
    strength: 6,
    tags: ['agility', 'flight', 'mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR02': {
    id: 'MR02',
    type: 'hero',
    name: 'Beast',
    strength: 6,
    tags: ['tech', 'agility', 'mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR03': {
    id: 'MR03',
    type: 'hero',
    name: 'Black Panther',
    strength: 4,
    tags: ['agility', 'wakanda'],
    bonusScore: function (hand) {
      return 5 * hand.countTagExcluding('wakanda', 'MR03');
    }
  },
  'MR04': {
    id: 'MR04',
    type: 'hero',
    name: 'Black Widow',
    strength: 6,
    tags: ['intel', 'agility', 'agility'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR05': {
    id: 'MR05',
    type: 'hero',
    name: 'Bruce Banner',
    strength: 1,
    tags: ['tech', 'gamma'],
    transformedName: 'Hulk',
    transformedStrength: 13,
    transformedTags: ['strength', 'strength', 'strength', 'gamma'],
    transform: function (hand) {
      return hand.containsTagExcluding('gamma', 'MR05');
    },
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR06': {
    id: 'MR06',
    type: 'hero',
    name: 'Captain America',
    strength: 4,
    tags: ['agility', 'worthy'],
    bonusScore: function (hand) {
      return 2 * hand.countTypeExcluding('hero', 'MR06')
        + (hand.contains('Vibranium Shield') ? 4 : 0);
    }
  },
  'MR07': {
    id: 'MR07',
    type: 'hero',
    name: 'Colossus',
    strength: 6,
    tags: ['strength', 'strength', 'mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR08': {
    id: 'MR08',
    type: 'hero',
    name: 'Cyclops',
    strength: 4,
    tags: ['range', 'mutant'],
    bonusScore: function (hand) {
      return 3 * hand.countTagExcluding('mutant', 'MR08');
    }
  },
  'MR09': {
    id: 'MR09',
    type: 'hero',
    name: 'Falcon',
    strength: 6,
    tags: ['tech', 'flight', 'range'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR10': {
    id: 'MR10',
    type: 'hero',
    name: 'Hawkeye',
    strength: 5,
    tags: ['tech', 'range', 'range'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR11': {
    id: 'MR11',
    type: 'hero',
    name: 'Jean Grey',
    strength: 3,
    tags: ['intel', 'range', 'mutant'],
    transformedName: 'Phoenix',
    transformedStrength: 9,
    transformedTags: ['intel', 'range', 'range', 'flight', 'mutant'],
    transform: function (hand) {
      return hand.countTagExcluding('mutant', 'MR11') >= 2;
    },
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR12': {
    id: 'MR12',
    type: 'hero',
    name: 'Professor X',
    strength: 3,
    tags: ['intel', 'mutant'],
    bonusScore: function (hand) {
      return (hand.contains('Cerebro') ? 6 : 0)
        + (hand.contains('Xavier Mansion') ? 6 : 0);
    }
  },
  'MR13': {
    // TODO: ROGUE may copy the base power and one tag of another HERO in your hand.
    id: 'MR13',
    type: 'hero',
    name: 'Rogue',
    strength: 0,
    tags: ['mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR14': {
    id: 'MR14',
    type: 'hero',
    name: 'Shadowcat',
    strength: 4,
    tags: ['tech', 'mutant'],
    bonusScore: function (hand) {
      return hand.countType('location') ? 4 : 0;
    }
  },
  'MR15': {
    id: 'MR15',
    type: 'hero',
    name: 'She-Hulk',
    strength: 4,
    tags: ['strength', 'gamma'],
    bonusScore: function (hand) {
      return 5 * (hand.countTagExcluding('gamma', 'MR15'));
    }
  },
  'MR16': {
    // TODO: SHURI and one other HERO or ALLY may each add one of STRENGTH, RANGE, or AGILITY.
    id: 'MR16',
    type: 'hero',
    name: 'Shuri',
    strength: 2,
    tags: ['tech', 'wakanda'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR17': {
    id: 'MR17',
    type: 'hero',
    name: 'Spider-Man',
    strength: 5,
    tags: ['strength', 'agility'],
    bonusScore: function (hand) {
      if (hand.containsTypeWithTag('location', 'urban')) {
        hand.getCardById('MR17').tags.push('flight'); // TODO: ordering
        return 5;
      }
      return 0;
    }
  },
  'MR18': {
    id: 'MR18',
    type: 'hero',
    name: 'Storm',
    strength: 4,
    tags: ['flight', 'range', 'mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR19': {
    id: 'MR19',
    type: 'hero',
    name: 'Thor Odinson',
    strength: 4,
    tags: ['strength', 'asgard', 'worthy'],
    transformedName: 'God of Thunder',
    transformedStrength: 12,
    transformedTags: ['strength', 'flight', 'range', 'asgard', 'worthy'],
    transform: function (hand) {
      return hand.contains('Mjolnir') || hand.countType('ally') >= 2;
    },
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR20': {
    id: 'MR20',
    type: 'hero',
    name: 'Tony Stark',
    strength: 3,
    tags: ['tech', 'range'],
    transformedName: 'Iron Man',
    transformedStrength: 8,
    transformedTags: ['tech', 'strength', 'flight', 'range'],
    transform: function (hand) {
      return hand.countTag('intel') >= 2;
    },
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR21': {
    id: 'MR21',
    type: 'hero',
    name: 'Valkyrie',
    strength: 7,
    tags: ['strength', 'flight', 'asgard'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR22': {
    id: 'MR22',
    type: 'hero',
    name: 'Vision',
    strength: 3,
    tags: ['worthy'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR23': {
    id: 'MR23',
    type: 'hero',
    name: 'Wolverine',
    strength: 4,
    tags: ['agility', 'mutant'],
    bonusScore: function (hand) {
      return hand.containsTypeWithTag('villain', 'boss') ? 6 : 0;
    }
  },
  'MR24': {
    id: 'MR24',
    type: 'ally',
    name: 'Dora Milaje',
    strength: 6,
    tags: ['intel', 'agility', 'wakanda'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR25': {
    id: 'MR25',
    type: 'ally',
    name: 'Forge',
    strength: 4,
    tags: ['tech', 'mutant'],
    bonusScore: function (hand) {
      return 4 * hand.countType('equipment');
    }
  },
  'MR26': {
    id: 'MR26',
    type: 'ally',
    name: 'Hulk Operations',
    strength: 4,
    tags: ['tech', 'range', 'gamma'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR27': {
    id: 'MR27',
    type: 'ally',
    name: 'Heimdall',
    strength: 4,
    tags: ['intel', 'asgard'],
    bonusScore: function (hand) {
      return hand.contains('Bifrost') ? 6 : 0;
    }
  },
  'MR28': {
    id: 'MR28',
    type: 'ally',
    name: 'Jane Foster',
    strength: 5,
    tags: ['tech', 'worthy'],
    bonusScore: function (hand) {
      return (hand.contains('Thor Odinson') || hand.contains('God of Thunder')) ? 8 : 0;
    }
  },
  'MR29': {
    id: 'MR29',
    type: 'ally',
    name: 'Lockheed',
    strength: 5,
    tags: ['flight', 'range'],
    bonusScore: function (hand) {
      return hand.contains('Shadowcat') ? 7 : 0;
    }
  },
  'MR30': {
    // TODO: One HERO with MUTANT may count one tag twice.
    id: 'MR30',
    type: 'ally',
    name: 'Moira Mactaggert',
    strength: 3,
    tags: ['tech', 'intel'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR31': {
    id: 'MR31',
    type: 'condition',
    name: 'Assembled',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 4 * hand.countType('hero');
    }
  },
  'MR32': {
    id: 'MR32',
    type: 'condition',
    name: 'Berserk',
    strength: 18,
    tags: ['strength', 'gamma'],
    bonusScore: function (hand) {
      return Math.min(0, -3 * (hand.countType('hero') + hand.countType('ally') + hand.countTag('urban') - 1));
    }
  },
  'MR33': {
    id: 'MR33',
    type: 'condition',
    name: 'Fearless',
    strength: 16,
    tags: ['agility'],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function (hand) {
      return hand.countType('hero') > 1;
    }
  },
  'MR34': {
    id: 'MR34',
    type: 'condition',
    name: 'Secret ID',
    strength: 8,
    tags: ['intel'],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function (hand) {
      return !(hand.containsType('hero') && hand.containsTypeWithTag('location', 'urban'));
    }
  },
  'MR35': {
    id: 'MR35',
    type: 'condition',
    name: 'Worthy',
    strength: 11,
    tags: ['worthy'],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function (hand) {
      for (const card of hand.nonBlankedCards()) {
        if (card.type === 'villain' && card.strength > 12) {
          return false;
        }
      }
      return true;
    }
  },
  'MR36': {
    id: 'MR36',
    type: 'equipment',
    name: 'Arc Reactor',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 9 * hand.countTag('tech');
    }
  },
  'MR37': {
    // TODO: Add FLIGHT to each HERO and ALLY with no FLIGHT.
    // TODO: Add RANGE to one HERO or ALLY.
    id: 'MR37',
    type: 'equipment',
    name: 'X-Jet',
    strength: 7,
    tags: [],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR38': {
    id: 'MR38',
    type: 'equipment',
    name: 'Cerebro',
    strength: 8,
    tags: ['intel'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR39': {
    id: 'MR39',
    type: 'equipment',
    name: 'Spear of Bashenga',
    strength: 0,
    tags: ['wakanda'],
    bonusScore: function (hand) {
      return 7 *
        (hand.countTypeExcluding('equipment', 'MR39')
          + hand.countTagExcluding('wakanda', 'MR39'));
    }
  },
  'MR40': {
    id: 'MR40',
    type: 'equipment',
    name: 'Mjolnir',
    strength: 10,
    tags: ['flight', 'range', 'asgard'],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function (hand) {
      return !(hand.contains('Worthy') || hand.containsTypeWithTag('hero', 'worthy') || hand.containsTypeWithTag('ally', 'worthy'));
    }
  },
  'MR41': {
    id: 'MR41',
    type: 'equipment',
    name: 'Vibranium Shield',
    strength: 9,
    tags: ['strength', 'range'],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function () {
      return !hand.containsTypeWithTag('hero', 'agility');
    }
  },
  'MR42': {
    id: 'MR42',
    type: 'location',
    name: 'Bifrost',
    strength: 0,
    tags: ['asgard'],
    bonusScore: function (hand) {
      return hand.containsTypeExcluding('location', 'MR42') ? 11 : 0;
    }
  },
  'MR43': {
    id: 'MR43',
    type: 'location',
    name: 'Birnin Zana',
    strength: 0,
    tags: ['tech', 'wakanda', 'urban'],
    bonusScore: function (hand) {
      return 7 * hand.countTagExcluding('wakanda', 'MR43');
    }
  },
  'MR44': {
    id: 'MR44',
    type: 'location',
    name: 'Falling Debris',
    strength: 0,
    tags: ['urban'],
    bonusScore: function (hand) {
      return 4 * (hand.countTag('strength') + hand.countTag('flight'));
    }
  },
  'MR45': {
    id: 'MR45',
    type: 'location',
    name: 'Factory',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 5 * (hand.countTag('tech') + hand.countTag('agility'));
    }
  },
  'MR46': {
    id: 'MR46',
    type: 'location',
    name: 'Halls of Asgard',
    strength: 0,
    tags: ['asgard', 'urban'],
    bonusScore: function (hand) {
      return 9 * hand.countTagExcluding('asgard', 'MR46');
    }
  },
  'MR47': {
    // TODO: Blank a VILLAIN unless with two or more INTEL.
    id: 'MR47',
    type: 'location',
    name: 'Hidden Lair',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR48': {
    id: 'MR48',
    type: 'location',
    name: 'High Speed Chase',
    strength: 0,
    tags: ['urban'],
    bonusScore: function (hand) {
      return 3 * (hand.countTag('agility') + hand.countTag('flight') + hand.countTag('range'));
    }
  },
  'MR49': {
    id: 'MR49',
    type: 'location',
    name: 'Krokoa, the Living Island',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 5 * hand.countTag('mutant');
    }
  },
  'MR50': {
    id: 'MR50',
    type: 'location',
    name: 'Madripoor',
    strength: 0,
    tags: ['urban'],
    bonusScore: function (hand) {
      return 8 * hand.countTag('intel');
    }
  },
  'MR51': {
    id: 'MR51',
    type: 'location',
    name: 'Remote Fortress',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function (hand) {
      return !hand.containsTypeWithTag('villain', 'boss');
    }
  },
  'MR52': {
    id: 'MR52',
    type: 'location',
    name: 'Runaway Train',
    strength: 0,
    tags: ['urban'],
    bonusScore: function (hand) {
      return 4 * (hand.countTag('strength') + hand.countTag('tech'));
    }
  },
  'MR53': {
    id: 'MR53',
    type: 'location',
    name: 'Skyscraper',
    strength: 0,
    tags: ['urban'],
    bonusScore: function (hand) {
      return 4 * (hand.countTag('agility') + hand.countTag('flight'));
    }
  },
  'MR54': {
    // TODO: Up to three HEROES with MUTANT may each count one tag twice.
    id: 'MR54',
    type: 'location',
    name: 'Xavier Mansion',
    strength: 4,
    tags: [],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR55': {
    id: 'MR55',
    type: 'maneuver',
    name: 'Avoid Crossfire',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      var cardsWithRange = 0;
      var rangeTags = 0;
      for (const card of hand.nonBlankedCards()) {
        if (card.hasTag('range')) {
          cardsWithRange++;
          for (const tag of card.tags) {
            if (tag === 'range') {
              rangeTags++;
            }
          }
        }
      }
      if (cardsWithRange == 1) {
        return 5 * rangeTags;
      } else if (cardsWithRange == 2) {
        return 7 * rangeTags;
      } else if (cardsWithRange >= 3) {
        return 9 * rangeTags;
      }
      return 0;
    }
  },
  'MR56': {
    id: 'MR56',
    type: 'maneuver',
    name: 'Hack In',
    strength: 0,
    tags: ['intel'],
    bonusScore: function (hand) {
      return 6 * hand.countTag('tech');
      // TODO: count tech as intel
    }
  },
  'MR57': {
    id: 'MR57',
    type: 'maneuver',
    name: 'Find Higher Ground',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 10 * Math.min(hand.countTag('flight'), hand.countTag('range'));
    }
  },
  'MR58': {
    id: 'MR58',
    type: 'maneuver',
    name: 'Precise Shot',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 12 * Math.min(hand.countTag('intel'), hand.countTag('range'));
    }
  },
  'MR59': {
    id: 'MR59',
    type: 'maneuver',
    name: 'Build Gadgets',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 13 * Math.min(hand.countTag('tech'), hand.countTag('intel'));
    }
  },
  'MR60': {
    id: 'MR60',
    type: 'maneuver',
    name: 'Throw Car',
    strength: 0,
    tags: ['range'],
    bonusScore: function (hand) {
      return (hand.countTag('strength') && hand.containsTypeWithTag('location', 'urban')) ? 14 : 0;
    }
  },
  'MR61': {
    id: 'MR61',
    type: 'maneuver',
    name: 'Discover Weakness',
    strength: 0,
    tags: [],
    bonusScore: function (hand) {
      return 11 * Math.min(hand.countTag('intel'), hand.countTag('agility'));
    }
  }
};

var villains = {
  'MR62': {
    id: 'MR62',
    type: 'villain',
    name: 'Abomination',
    strength: 13,
    tags: ['gamma'],
    bonusScore: function (hand) {
      return hand.countTag('strength') >= 2 ? 0 : -20;
    }
  },
  'MR63': {
    id: 'MR63',
    type: 'villain',
    name: 'Black Cat',
    strength: 8,
    tags: [],
    bonusScore: function (hand) {
      return (hand.containsTypeWithTag('location', 'urban') ? 5 : 0) - (5 * hand.countType('maneuver'));
    }
  },
  'MR64': {
    id: 'MR64',
    type: 'villain',
    name: 'Hela',
    strength: 18,
    tags: ['asgard'],
    bonusScore: function (hand) {
      return hand.countTagExcluding('asgard', 'MR64') >= 2 ? 0 : -20;
    }
  },
  'MR65': {
    id: 'MR65',
    type: 'villain',
    name: 'Baron Zemo',
    strength: 15,
    tags: ['boss'],
    bonusScore: function (hand) {
      return -3 * hand.countType('hero');
    }
  },
  'MR66': {
    // TODO: Blank one LOCATION.
    id: 'MR66',
    type: 'villain',
    name: 'Juggernaut',
    strength: 16,
    tags: ['mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR67': {
    id: 'MR67',
    type: 'villain',
    name: 'Kang',
    strength: -10,
    tags: [],
    bonusScore: function (hand) {
      const tags = new Set();
      for (const card of hand.nonBlankedCards()) {
        for (const tag of card.tags) {
          tags.add(tag);
        }
      }
      return tags.size * 5;
    }
  },
  'MR68': {
    id: 'MR68',
    type: 'villain',
    name: 'Killmonger',
    strength: -9,
    tags: ['wakanda'],
    bonusScore: function (hand) {
      return 9 * hand.countTagExcluding('wakanda', 'MR68');
    }
  },
  'MR69': {
    id: 'MR69',
    type: 'villain',
    name: 'Kingpin',
    strength: 13,
    tags: ['boss'],
    bonusScore: function (hand) {
      return !hand.containsTypeWithTag('location', 'urban');
    }
  },
  'MR70': {
    // TODO: At the end of the game, draw a card from the Remix deck and subtract its base power.
    id: 'MR70',
    type: 'villain',
    name: 'Loki',
    strength: 15,
    tags: ['asgard'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR71': {
    // TODO: Blank all EQUIPMENT and ignore all TECH.
    id: 'MR71',
    type: 'villain',
    name: 'Magneto',
    strength: 17,
    tags: ['mutant', 'boss'],
    bonusScore: function (hand) {
      return 0;
    },
    blanks: function (card) {
      return card.type === 'equipment';
    }
  },
  'MR72': {
    id: 'MR72',
    type: 'villain',
    name: 'Mystique',
    strength: 14,
    tags: ['mutant'],
    bonusScore: function (hand) {
      if (hand.countTag('intel') >= 2) {
        return 0;
      }
      const cardsByTag = new Map();
      for (const card of hand.nonBlankedCards()) {
        for (const tag of card.tags) {
          if (!cardsByTag.has(tag)) {
            cardsByTag.set(tag, new Set());
          }
          cardsByTag.get(tag).add(card.id);
          if (cardsByTag.get(tag).size >= 3) {
            return 0;
          }
        }
      }
      return -20;
    }
  },
  'MR73': {
    id: 'MR73',
    type: 'villain',
    name: 'Sauron',
    strength: -7,
    tags: [],
    bonusScore: function (hand) {
      return 7 * (hand.countTag('flight') + hand.countTag('range'));
    }
  },
  'MR74': {
    id: 'MR74',
    type: 'villain',
    name: 'Sentinels',
    strength: 12,
    tags: [],
    bonusScore: function (hand) {
      return hand.countTag('mutant') >= 2 ? 0 : -20;
    }
  },
  'MR75': {
    // TODO: Blank any HERO or ALLY in your hand. Subtract its base power from your total score.
    id: 'MR75',
    type: 'villain',
    name: 'Selene',
    strength: 25,
    tags: ['mutant'],
    bonusScore: function (hand) {
      return 0;
    }
  },
  'MR76': {
    id: 'MR76',
    type: 'villain',
    name: 'Taskmaster',
    strength: 11,
    tags: [],
    bonusScore: function (hand) {
      return 0;
    },
    blanks: function (card) {
      return card.type === 'maneuver';
    }
  },
  'MR77': {
    id: 'MR77',
    type: 'villain',
    name: 'The Leader',
    strength: 12,
    tags: ['gamma', 'boss'],
    bonusScore: function (hand) {
      return -3 * (hand.countTag('strength') + hand.countTagExcluding('gamma', 'MR77'));
    }
  },
  'MR78': {
    id: 'MR78',
    type: 'villain',
    name: 'Toad',
    strength: 14,
    tags: ['mutant'],
    bonusScore: function (hand) {
      return 0;
    },
    blankedIf: function (hand) {
      return !hand.containsTypeWithTag('villain', 'boss');
    }
  },
  'MR79': {
    id: 'MR79',
    type: 'villain',
    name: 'Ultron',
    strength: 14,
    tags: ['boss'],
    bonusScore: function (hand) {
      return hand.countTag('tech') >= 2 ? 0 : -20;
    }
  }
};

var deck = {
  remixCards: remixCards,
  villains: villains,
  getCardByName: function (cardName) {
    for (const id in this.remixCards) {
      const card = this.remixCards[id];
      if (card.name === cardName) {
        return card;
      }
    }
    for (const id in this.villains) {
      const card = this.villains[id];
      if (card.name === cardName) {
        return card;
      }
    }
  },
  getCardById: function (id) {
    return this.remixCards[id] || this.villains[id];
  },
  getCardsByType: function (types) {
    var cardsByType = {};
    for (const cardType of allTypes()) {
      if (types === undefined || types.includes(cardType)) {
        cardsByType[cardType] = [];
      }
    }
    for (const id in this.remixCards) {
      const card = this.remixCards[id];
      if (types === undefined || types.includes(card.type)) {
        cardsByType[card.type].push(card);
      }
    }
    if (types === undefined || types.includes('villain')) {
      for (const id in this.villains) {
        const card = this.villains[id];
        cardsByType['villain'].push(card);
      }
    }
    return cardsByType;
  }
};

function allTypes() {
  return ['hero', 'ally', 'condition', 'equipment', 'location', 'maneuver', 'villain'];
}

var NONE = -1;
var VISION = 'MR22';

var ACTION_ORDER = [VISION];
