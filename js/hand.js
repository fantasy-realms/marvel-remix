class Hand {

  constructor() {
    this.cardsInHand = {};
  }

  addCard(card) {
    if (this._canAdd(card)) {
      this.cardsInHand[card.id] = new CardInHand(card);
      return true;
    }
    return false;
  }

  _canAdd(newCard) {
    return true;
  }

  deleteCardById(id) {
    delete this.cardsInHand[id];
  }

  getCardById(id) {
    return this.cardsInHand[id];
  }

  contains(cardName) {
    for (const card of this.nonBlankedCards()) {
      if (card.name === cardName) {
        return true;
      }
    }
    return false;
  }

  countCardName(cardName) {
    var count = 0;
    for (const card of this.nonBlankedCards()) {
      if (card.name === cardName) {
        count++;
      }
    }
    return count;
  }

  containsId(cardId, allowBlanked) {
    return this.cardsInHand[cardId] !== undefined && (!this.cardsInHand[cardId].blanked || allowBlanked);
  }

  containsType(typeName) {
    for (const card of this.nonBlankedCards()) {
      if (card.type === typeName) {
        return true;
      }
    }
    return false;
  }

  containsTypeExcluding(typeName, excludingCardId) {
    for (const card of this.nonBlankedCards()) {
      if (card.type === typeName && card.id !== excludingCardId) {
        return true;
      }
    }
    return false;
  }

  countType(typeName) {
    var count = 0;
    for (const card of this.nonBlankedCards()) {
      if (card.type === typeName) {
        count++;
      }
    }
    return count;
  }

  countTypeExcluding(typeName, excludingCardId) {
    var count = 0;
    for (const card of this.nonBlankedCards()) {
      if (card.type === typeName && card.id !== excludingCardId) {
        count++;
      }
    }
    return count;
  }

  containsTag(tagName) {
    for (const card of this.nonBlankedCards()) {
      if (card.hasTag(tagName)) {
        return true;
      }
    }
    return false;
  }

  containsTagExcluding(tagName, excludingCardId) {
    for (const card of this.nonBlankedCards()) {
      if (card.id !== excludingCardId && card.hasTag(tagName)) {
        return true;
      }
    }
    return false;
  }

  countTag(tagName) {
    var count = 0;
    for (const card of this.nonBlankedCards()) {
      if (card.hasTag(tagName)) {
        count++;
      }
    }
    return count;
  }

  countTagExcluding(tagName, excludingCardId) {
    var count = 0;
    for (const card of this.nonBlankedCards()) {
      if (card.id !== excludingCardId && card.hasTag(tagName)) {
        count++;
      }
    }
    return count;
  }

  containsTypeWithTag(typeName, tagName) {
    for (const card of this.nonBlankedCards()) {
      if (card.type === typeName && card.hasTag(tagName)) {
        return true;
      }
    }
    return false;
  }

  nonBlankedCards() {
    return this.cards().filter(function (card) {
      return !card.blanked;
    });
  }

  cards() {
    return Object.values(this.cardsInHand);
  }

  cardNames() {
    return this.cards().map(function (card) {
      return card.name;
    });
  }

  score() {
    var score = 0;
    this._resetHand();
    this._performCardActions();
    this._applyBlanking();
    this._transform();
    for (const card of this.nonBlankedCards()) {
      score += card.score(this);
    }
    return score;
  }

  _resetHand() {
    for (const card of this.cards()) {
      this.cardsInHand[card.id] = new CardInHand(card.card, card.actionData);
    }
  }

  _performCardActions() {
    for (const cardAction of ACTION_ORDER) {
      var actionCard = this.getCardById(cardAction);
      if (actionCard !== undefined) {
        actionCard.performCardAction(this);
      }
    }
  }

  _applyBlanking() {
    for (const card of this.nonBlankedCards()) {
      if (card.blanks !== undefined) {
        for (const target of this.nonBlankedCards()) {
          if (card !== target) {
            if (card.blanks(target)) {
              target.blanked = true;
            }
          }
        }
      }
    }
    // TODO: blanking order ok?
    for (const card of this.nonBlankedCards().sort((a, b) => a.id.localeCompare(b.id))) {
      if (card.blankedIf !== undefined) {
        if (card.blankedIf(this)) {
          card.blanked = true;
        }
      }
    }
  }

  _transform() {
    for (const card of this.nonBlankedCards()) {
      if (card.transform !== undefined) {
        if (card.transform(this)) {
          card.name = card.transformedName;
          card.strength = card.transformedStrength;
          card.tags = card.transformedTags;
          card.transformed = true;
        }
      }
    }
  }

  clear() {
    this.cardsInHand = {};
  }

  size() {
    return Object.keys(this.cardsInHand).length;
  }

  empty() {
    return this.size() === 0;
  }

  limit() {
    var limit = this._defaultLimit();
    for (const card of this.cards()) {
      if (card.extraCard) {
        return limit + 1;
      }
    }
    return limit;
  }

  _defaultLimit() {
    return 7;
  }

  toString() {
    var stringValue = Object.keys(this.cardsInHand).join();
    var actions = [];
    for (const card of this.cards()) {
      if (card.actionData !== undefined) {
        actions.push(card.id + ':' + card.actionData.join(':'));
      }
    }
    return Object.keys(this.cardsInHand).join() + '+' + actions.join();
  }

  loadFromString(string) {
    var parts = string.split('+');
    var cardIds = parts[0].split(',');
    var cardActions = parts[1].split(',').map(action => action.split(':'));
    this.loadFromArrays(cardIds, cardActions);
  }

  loadFromArrays(cardIds, cardActions) {
    this.clear();
    for (const cardId of cardIds) {
      this.addCard(deck.getCardById(cardId));
    }
    for (const cardAction of cardActions) {
      if (cardAction.length > 1) {
        var cardId = cardAction[0];
        var action = cardAction.slice(1);
        var actionCard = this.getCardById(cardId);
        this.cardsInHand[cardId] = new CardInHand(actionCard.card, action);
      }
    }
  }

  undoCardAction(id) {
    var actionCard = this.getCardById(id);
    this.cardsInHand[id] = new CardInHand(actionCard.card, undefined);
  }

}

var hand = new Hand();

class CardInHand {

  constructor(card, actionData) {
    this.card = card;
    this.actionData = actionData;
    // TODO: is there a better way to copy these properties
    this.id = card.id;
    this.name = card.name;
    this.type = card.type;
    this.strength = card.strength;
    this.tags = card.tags.slice();
    this.transform = card.transform;
    this.transformedName = card.transformedName;
    this.transformedStrength = card.transformedStrength;
    this.transformedTags = card.transformedTags;
    this.bonusScore = card.bonusScore;
    this.blankedIf = card.blankedIf;
    this.blanks = card.blanks;

    this.blanked = false;
    this.bonusPoints = 0;
    this.magic = false;
    this.transformed = false;
  }

  performCardAction(hand) {
    if (this.actionData !== undefined) {
      if (this.id === VISION) {
        this.tags = this.tags.concat(this.actionData);
      }
    }
  }

  score(hand) {
    if (this.blanked) {
      return 0;
    }
    if (this.bonusScore !== undefined) {
      this.bonusPoints = this.bonusScore(hand);
    } else {
      this.bonusPoints = 0;
    }
    return this.strength + this.bonusPoints;
  }

  points() {
    return this.blanked ? 0 : (this.strength + this.bonusPoints);
  }

  hasTag(tagName) {
    for (const tag of this.tags) {
      if (tag === tagName) {
        return true;
      }
    }
    return false;
  }

}
