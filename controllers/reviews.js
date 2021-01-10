const Post = require('../models/post');
const Review = require('../models/review');

module.exports = {
     // Create Review
    async reviewCreate(req, res, next) {
        // find the post by id
        let post = await Post.findById(req.params.id).populate('reviews').exec();
        let haveReviewed = post.reviews.filter(review => {
            return review.author.equals(req.user._id);
        }).length;
        if(haveReviewed){
            req.session.error = 'Sorry you can only create one review per post!';
            return res.redirect(`/posts/${post.id}`);
        }
        // create the review
        req.body.review.author = req.user._id;
        let review = await Review.create(req.body.review);
        // assign the review to the post
        post.reviews.push(review);
        // save the post
        post.save();
        //redirect to the post
        req.session.success = 'Review created Successfully!';
        res.redirect(`/posts/${post.id}`);
    },

    // Update Review
    async reviewUpdate(req, res, next) {
        await Review.findByIdAndUpdate(req.params.review_id, req.body.review);
        req.session.success = 'Review Updated Successfully!';
        res.redirect(`/posts/${req.params.id}`);
    },

    // Detroy Review
    async reviewDestroy(req, res, next) { 
        await Post.findByIdAndUpdate(req.params.id, {
            $pull: { reviews: req.params.review_id }
        });
        await Review.findByIdAndRemove(req.params.review_id);
        req.session.success = 'Review Deleted Successfully!';
        res.redirect(`/posts/${req.params.id}`);
    }
};