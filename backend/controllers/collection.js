const Collection = require('../models/collection');
const Like = require('../models/like');

exports.createCollection = (req, res, next) => {
    const collection = new Collection({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        categories: req.body.categories,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    collection.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.createCart = (req, res, next) => {
    const collection = new Collection({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        categories: req.body.categories,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    collection.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.likeCollection = (req, res, next) => {
    Like.findOne({ produitId: req.params.id })
        .then(like => {
            if (!like) {
                const newLike = new Like({ produitId: req.params.id, like: [req.body.userId] });
                newLike.save()
                    .then(() => res.status(201).json({ message: "Like ajouté avec succès" }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                if (like.like.includes(req.body.userId)) {
                    like.like = like.like.filter(userId => userId !== req.body.userId);
                } else {
                    like.like.push(req.body.userId);
                }
                like.save()
                    .then(() => res.status(200).json({ message: "Like modifié avec succès" }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(error => res.status(404).json({ error }));
};

exports.getOneCollection = (req, res, next) => {
    Collection.findOne({
        _id: req.params.id
    }).then(
        (collection) => {
            res.status(200).json(collection);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getAllCollection = (req, res, next) => {
    Collection.find().then(
        (collection) => {
            res.status(200).json(collection);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.updateCollection = (req, res, next) => {
    const collection = new Collection({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        categories: req.body.categories,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    Collection.updateOne({ _id: req.params.id }, collection).then(
        () => {
            res.status(201).json({
                message: 'Collection updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteCollection = (req, res, next) => {
    Collection.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};