'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 5;
var HEAD_GAP = 80;
var GAP_X = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 20;
var COLUMN_Y = CLOUD_Y + HEAD_GAP + TEXT_HEIGHT + BAR_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP * 2,
      'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 4, CLOUD_Y + GAP * 6);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 4, CLOUD_Y + GAP * 10);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(
        players[i],
        CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
        COLUMN_Y
    );
    ctx.fillText(
        times[i].toFixed(),
        CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
        COLUMN_Y - TEXT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) - GAP
    );
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(215,' + (Math.floor(Math.random() * 100)) + '%, 32%)';
    }
    ctx.fillRect(
        CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
        COLUMN_Y - TEXT_HEIGHT,
        BAR_WIDTH,
        (-BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
