module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'TODAY IS THE BEST DAY EVER!!!',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 26, 0)),
    user: {
      _id: 2,
      name: 'Dog',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'fiiiiine',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 25, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
  },

  {
    _id: Math.round(Math.random() * 1000000),
    text: 'CAN WE GO WALKIES????',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 24, 0)),
    user: {
      _id: 2,
      name: 'Dog',
    },
  },

  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Mehhhhhh',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 23, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
  },

  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Wooof!',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 22, 0)),
    user: {
      _id: 2,
      name: 'Dog',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Ehhh???',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 21, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'WAKE UP!!',
    createdAt: new Date(Date.UTC(2018, 1, 15, 7, 20, 0)),
    user: {
      _id: 2,
      name: 'Dog',
    },
  },
];
