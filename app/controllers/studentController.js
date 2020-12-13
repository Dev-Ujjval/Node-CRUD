var async = require('async');
var Students = require('../models/student.model');

exports.getAll = function(req, res, next) {
    async.waterfall([
        (cb) => {
            Students.find()
                .then((processingData) => {
                    return cb(null, processingData)
                });
        },
    ], (err, processingData) => {
        if (err) {
            return next(err);
        }

        const response = {
            data: processingData
        };
        return res.json(response.data);
    });
}

exports.create = function(req, res, next) {
    let payload = req.body;
    async.waterfall([
        (cb) => {
            Students.create(payload)
                .then((processingData) => {
                    return cb(null, processingData)
                });
        },
    ], (err, processingData) => {
        if (err) {
            return next(err);
        }
        const response = {
            data: processingData
        };
        return res.json(response.data);
    });
}

exports.getById = function(req, res, next) {
    const { id } = req.params;
    async.waterfall([
        (cb) => {
            Students.findById(id)
                .then((processingData) => {
                    return cb(null, processingData)
                });
        },
    ], (err, processingData) => {
        if (err) {
            return next(err);
        }

        const response = {
            data: processingData
        };
        return res.json(response.data);
    });
}

exports.update = function(req, res, next) {
    const payload = req.body;
    const id = req.params.id;

    async.waterfall([
        (cb) => {
            Students.updateOne({ _id: id }, payload)
                .then((processingData) => {
                    return cb(null, processingData)
                });
        },
    ], (err, processingData) => {
        if (err) {
            return next(err);
        }
        const response = {
            data: processingData
        };
        return res.json(response.data);
    });
}

exports.delete = function(req, res, next) {
    const id = req.params.id;

    async.waterfall([
        (cb) => {
            Students.findByIdAndDelete(id)
                .then((processingData) => {
                    return cb(null, processingData)
                });
        },
    ], (err, processingData) => {
        if (err) {
            return next(err);
        }
        const response = {
            data: processingData
        };
        return res.json(response.data);
    });
}