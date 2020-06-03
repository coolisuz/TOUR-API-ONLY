#running file 
node import-dev-data.js --import

if i do console.log(process.argv)
it prints out the array of file paths
[
  '/usr/local/bin/node',
  '/Users/saidjamolhonikramov/Desktop/roadmap/udemy/jonas/API/dev-data/data/import-dev-data.js',
  '--import'
]
--import on the commandline is the 3rd item in the process.argv
so i can access it process.argv[2]

if(process.argv[2] === '--import') {
  importData() // call function
} else if (process.argv[2] === '--delete') {
  deleteData() // call function
}

node importingDataFromFile.js --delete // commanline command
node importingDataFromFile.js --delete // commanline command