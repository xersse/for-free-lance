const Nouveaute = require('../models/nouveaute');
const Like = require('../models/like');

exports.createNouveaute = (req, res, next) => {
    const nouveaute = new Nouveaute({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    nouveaute.save().then(
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
    const nouveaute = new Nouveaute({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    nouveaute.save().then(
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

exports.likeNouveaute = (req, res, next) => {
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

exports.getOneNouveaute = (req, res, next) => {
    Nouveaute.findOne({
        _id: req.params.id
    }).then(
        (nouveaute) => {
            res.status(200).json(nouveaute);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getAllNouveautes = (req, res, next) => {
    Nouveaute.find().then(
        (nouveautes) => {
            res.status(200).json(nouveautes);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.updateNouveaute = (req, res, next) => {
    const nouveaute = new Nouveaute({
        title: req.body.title,
        description: req.body.description,
        descriptionComplete: req.body.descriptionComplete,
        contenu: req.body.contenu,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        produitId: req.body.produitId,
        userId: req.body.userId,
    });
    Nouveaute.updateOne({ _id: req.params.id }, nouveaute).then(
        () => {
            res.status(201).json({
                message: 'Nouveaute updated successfully!'
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

exports.deleteNouveaute = (req, res, next) => {
    Nouveaute.deleteOne({ _id: req.params.id }).then(
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