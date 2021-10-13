const Post = require('../model/Post');
const JWT = require('jsonwebtoken');
const idV4 = require('uuid').v4;

module.exports = {
    all: async function(req, res){
        const allPosts = await Post.find({});
        res.status(200).json(allPosts);
    },
    
    create: async function(req, res){
        const loggedUser = JWT.decode(req.header("authorization"), process.env.SECRET);
        console.log(loggedUser);
        const post = {
            userID: loggedUser.id,
            userName: loggedUser.name,
            _id: idV4(),
            title: req.body.title,
            description: req.body.description
        }
        const checkPost = await Post.create(post).then(success => console.log('Published!')).catch('Failure in published!')
        res.status(200).json(post);
    },

    view: async function(req, res){
        const viewPost = await Post.find({_id:req.params.post});
        res.status(200).json(viewPost);
    },

    partialChange: async function(req, res){
        const editPost = await Post.updateOne(
            {_id:req.params.post},
            {title:req.body.title, description:req.body.description}
        );
        res.json(editPost);
    },

    completeChange: async function(req, res){
        const editPost = await Post.updateOne(
            {_id:req.params.post},
            {_id: idV4(), title:req.body.title, description:req.body.description}
        );
        res.json(editPost);
    },

    delete: async function(req, res){
        const deletePost = await Post.deleteOne({_id:req.params.post})
        res.status(200).json(deletePost);
    }

};