const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    name: 'Brainey',
    age: 200,
    height: 5,
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d10abc3d121aba71090.png',
    id: 0
  },
  {
    name: 'Bakersmurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/58b83cae15d8273a5cab2f97.png',
    id: 1
  },
  {
    name: 'Clumsy Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d34abc3d121aba71095.png',
    id: 2
  },
  {
    name: 'Grouchy Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d3aabc3d121aba71096.png',
    id: 3
  },
  {
    name: 'Gutsy Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/58b83d0315d8273a5cab2f9a.png',
    id: 4
  },
  {
    name: 'Hefty Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/58b83d1115d8273a5cab2f9c.png',
    id: 5
  },
  {
    name: 'Papa Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d49abc3d121aba71098.png',
    id: 6
  },
  {
    name: 'Smurf Blossom',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6dd3abc3d121aba710a3.png',
    id: 7
  },
  {
    name: 'Vanity Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/58b83cfb15d8273a5cab2f99.png',
    id: 8
  },
  {
    name: 'Smurfette',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d93abc3d121aba710a0.png',
    id: 9
  },
  {
    name: 'Smurf Storm',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6da3abc3d121aba710a1.png',
    id: 10
  },
  {
    name: 'Vexy Smurf',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/58b83ca615d8273a5cab2f96.png',
    id: 11
  },
  {
    name: 'Smurf Melody',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d7eabc3d121aba7109e.png',
    id: 12
  },
  {
    name: 'Smurf Lily',
    age: 200,
    height: '5',
    img: 'https://www.stickpng.com/assets/thumbs/5a7b6d6aabc3d121aba7109c.png',
    id: 13
  },
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
