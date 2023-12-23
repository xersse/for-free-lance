const Replique = require('../models/replique');
const Like = require('../models/like');

exports.createReplique = (req, res, next) => {
    const replique = new Replique({
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
    replique.save().then(
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
    const replique = new Replique({
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
    replique.save().then(
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

exports.likeReplique = (req, res, next) => {
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

exports.getOneReplique = (req, res, next) => {
    Replique.findOne({
        _id: req.params.id
    }).then(
        (replique) => {
            res.status(200).json(replique);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getAllReplique = (req, res, next) => {
    Replique.find().then(
        (replique) => {
            res.status(200).json(replique);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.updateReplique = (req, res, next) => {
    const replique = new Replique({
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
    Replique.updateOne({ _id: req.params.id }, replique).then(
        () => {
            res.status(201).json({
                message: 'Replique updated successfully!'
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

exports.deleteReplique = (req, res, next) => {
    Replique.deleteOne({ _id: req.params.id }).then(
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