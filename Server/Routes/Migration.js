


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userModel from '../Model/UserSchema.js';

// dotenv.config({path:'config.env'});

// const uri = process.env.DATABASE_URL;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// (async () => {
//   try {
//     const result = await userModel.updateMany(
//       {},
//       { $set: { about: null, tags: [], joinedOn: new Date() } }
//     );
//     console.log('Migration successful');
//   } catch (err) {
//     console.error('Migration failed:', err);
//   }
// })();


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userQuestion from '../Model/QuetionsSchema.js'

// dotenv.config({ path: 'config.env' });

// const uri = process.env.DATABASE_URL;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// (async () => {
//   try {
//     const result = await userQuestion.updateMany(
//       {},
//       {
//         $set: {
//           noOfAnswers: 0,
//         },
//       }
//     );
//     console.log('Migration successful');
//   } catch (err) {
//     console.error('Migration failed:', err);
//   }
// })();
