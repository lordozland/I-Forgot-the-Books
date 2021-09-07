const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');








// const { Tech, Matchup } = require('../models');

// const resolvers = {
//   Query: {
//     tech: async () => {
//       return Tech.find({});
//     },
//     matchups: async (parent, { _id }) => {
//       const params = _id ? { _id } : {};
//       return Matchup.find(params);
//     },
//   },
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
// };

// module.exports = resolvers;



// const { Thought } = require('../models');

// const resolvers = {
//   Query: {
//     thoughts: async () => {
//       return Thought.find();
//     },

//     thought: async (parent, { thoughtId }) => {
//       return Thought.findOne({ _id: thoughtId });
//     },
//   },

//   Mutation: {
//     addThought: async (parent, { thoughtText, thoughtAuthor }) => {
//       return Thought.create({ thoughtText, thoughtAuthor });
//     },
//     addComment: async (parent, { thoughtId, commentText }) => {
//       return Thought.findOneAndUpdate(
//         { _id: thoughtId },
//         {
//           $addToSet: { comments: { commentText } },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeThought: async (parent, { thoughtId }) => {
//       return Thought.findOneAndDelete({ _id: thoughtId });
//     },
//     removeComment: async (parent, { thoughtId, commentId }) => {
//       return Thought.findOneAndUpdate(
//         { _id: thoughtId },
//         { $pull: { comments: { _id: commentId } } },
//         { new: true }
//       );
//     },
//   },
// };

// module.exports = resolvers;
