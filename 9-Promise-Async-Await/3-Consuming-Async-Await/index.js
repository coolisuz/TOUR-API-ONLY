const fs = require("fs");
const superagent = require("superagent");

const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("File not found");
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject("Could not save");
      resolve("success");
    });
  });
};


const getDogPic = async () => {
    try{
      const data = await readFilePromise(`${__dirname}/dog.txt`);
      console.log(`Breed: ${data}`);

      const res = await superagent.get(
        `https://dog.ceo/api/breed/${data}/images/random`
      );
      console.log(res.body.message);

      await writeFilePromise(`${__dirname}/dog-img.txt`, res.body.message);
      console.log("Link has been saved successfully");
    }
    catch(err){
      console.log(err);
      throw(err)
    }
    return '2: Ready.....'
}

( async () => {
  try{
    console.log("1: will get dog pics");    
    const res = await getDogPic()
    console.log(res)
    console.log("3: done Getting dog pics");
  }
  catch(err){
    console.log("error")
  }
})()

/*
console.log('1: will get dog pics')
getDogPic()
  .then(x => {
    console.log(x)
    console.log("3: done Getting dog pics");
  })
  .catch(err => console.log(err))

*/