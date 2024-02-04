// "../assets/js/backup-api.js"

import { MongoClient } from 'mongodb';

const connectionString = 'mongodb+srv://achneerov:XpFF02hlumFNhDg5@cluster0.fvdrmdf.mongodb.net/';
const dbName = 'db1';

const fullConnectionString = `${connectionString}${dbName}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function findUserByEmail(email) {
  const client = new MongoClient(fullConnectionString, options);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('user_info');

    // Log that the findUserByEmail function is being called with a specific email
    console.log(`Searching for user with email: ${email}`);

    const user = await collection.findOne({ email: email });

    if (user) {
      console.log('User found:', user);
    } else {
      console.log('User not found');
    }

    return user;
  } catch (err) {
    console.error('Error finding user:', err);
    throw err;
  } finally {
    await client.close();
  }
}

export async function getAllUsers() {
    const client = new MongoClient(fullConnectionString, options);
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db(dbName);
      const collection = db.collection('user_info');
  
      // Log that the getAllUsers function is being called
      console.log('Getting all users');
  
      const users = await collection.find({}).toArray();
  
      console.log('All users:', users);
  
      return users;
    } catch (err) {
      console.error('Error getting all users:', err);
      throw err;
    } finally {
      await client.close();
    }
  }

export async function addUser(user) {
    const client = new MongoClient(fullConnectionString, options);
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db(dbName);
      const collection = db.collection('user_info');
  
      // Log that the addUser function is being called with a specific user object
      console.log('Adding a new user:', user);
  
      // Insert the user document into the 'user_info' collection
      const result = await collection.insertOne(user);
  
    //   console.log('User added successfully:', result.ops[0]);
  
      return result.ops[0];
    } catch (err) {
      console.error('Error adding user:', err);
      throw err;
    } finally {
      await client.close();
    }
  }
  
  export async function deleteUserByEmail(email) {
    const client = new MongoClient(fullConnectionString, options);
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db(dbName);
      const collection = db.collection('user_info');
  
      // Log that the deleteUserByEmail function is being called with a specific email
      console.log(`Deleting user with email: ${email}`);
  
      const result = await collection.deleteOne({ email: email });
  
      if (result.deletedCount === 1) {
        console.log('User deleted successfully');
      } else {
        console.log('User not found or not deleted');
      }
  
      return result;
    } catch (err) {
      console.error('Error deleting user:', err);
      throw err;
    } finally {
      await client.close();
    }
  }





  const user = {
    "age": 28,
    "email": "jamaicanjohn@gmail.com",
    "first": "John",
    "last": "Williams",
    "profilePicLink": "example-jamaicanpic.com",
    "gender": "male",
    "location": {
      "country": "Jamaica",
      "parish": "Kingston",
      "city": "Half-Way-Tree",
      "postalCode": "JM876"
    },
    "car": {
      "model": "Nissan",
      "plate": "876ABC"
    },
    "preferences": {
      "gender": "female",
      "radius": 15,
      "hasCar": true,
      "ageMin": 23,
      "ageMax": 35
    },
    "interests": {
      "musicGenre": [
        "reggae",
        "dancehall"
      ],
      "spotifyPlalistLink": "jamaican-reggae-playlist.com",
      "occupation": "tour guide",
      "interests": [
        "beach volleyball",
        "reggae concerts",
        "culinary adventures"
      ],
      "socialLinks": {
        "instagram": "instagram.com/jamaicanjohn",
        "twitter": "twitter.com/jamaicanjohn"
      },
      "about": "I'm a proud Jamaican tour guide, passionate about sharing the beauty of our island. When I'm not guiding, you'll find me enjoying reggae beats or exploring new culinary delights."
    }
};


// Test case for add user PASSED BUT SAYS ERRORS
//  (async () => {
//     try {
//       const addedUser = await addUser(user);
//       console.log('User added:', addedUser);
//     } catch (error) {
//       console.error('Test failed:', error);
//     }
//   })();
  

// // Test case for delete user PASSED
// const testEmailToDelete = 'jamaicanjohn@gmail.com';
// (async () => {
//   try {
//     const result = await deleteUserByEmail(testEmailToDelete);
//     console.log('User deleted:', result);
//   } catch (error) {
//     console.error('Test failed:', error);
//   }
// })();




// // Test case for get all users PASSED
// (async () => {
//     try {
//       const users = await getAllUsers();
//       console.log('All Users:', users);
//     } catch (error) {
//       console.error('Test failed:', error);
//     }
//   })();
  

// // Test case for get user PASSED
// const testEmail = 'achneerov@gmail.com';
// (async () => {
//   try {
//     const user = await findUserByEmail(testEmail);
//     console.log('Result:', user);
//   } catch (error) {
//     console.error('Test failed:', error);
//   }
// })();
