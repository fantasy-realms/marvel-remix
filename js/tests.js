$(document).ready(function () {
  assertScoreByCode('MR06,MR07,MR21,MR22,MR72,MR41,MR44+MR22:strength:flight', 77, 'Rulebook example');
});

function assertScoreByName(cardNames, expectedScore, message) {
  hand.clear();
  for (const cardName of cardNames) {
    hand.addCard(deck.getCardByName(cardName));
  }
  assertScore(hand, expectedScore, message);
}

function assertScoreByCode(code, expectedScore, message) {
  hand.clear();
  hand.loadFromString(code);
  assertScore(hand, expectedScore, message);
}

function assertScore(hand, expectedScore, message) {
  var score = hand.score();
  if (score === expectedScore) {
    $('#tests').append('<li class="list-group-item list-group-item-success"><b>TEST SUCCESS</b> &nbsp;<a href="index.html?hand=' +
      hand.toString() + '">' + hand.cardNames().join() + '</a>&nbsp; scored ' + score + ' points' +
      (message ? ':&nbsp;<b>' + message + '</b>' : '') + '</li>');
  } else {
    $('#tests').append('<li class="list-group-item list-group-item-danger"><b>TEST FAILED:</b> &nbsp;<a href="index.html?hand=' +
      hand.toString() + '">' + hand.cardNames().join() + '</a>&nbsp; scored ' + score + ' points (expected: ' + expectedScore + ')' +
      (message ? ':&nbsp;<b>' + message + '</b>' : '') + '</li>');
  }
}
