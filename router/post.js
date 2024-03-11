import { Router } from "express";
const postRouter = Router();

/** import all controllers */
import * as controller from '../controllers/postController.js';

/** POST Methods */

/**
     * @openapi
     * '/api/post/create':
     *  post:
     *     tags:
     *     - Post Controller
     *     summary: Create a post
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - postId
     *            properties:
     *              title:
     *                type: string
     *                default: ''
     *              description:
     *                type: string
     *                default: ''
     *              content:
     *                type: string
     *                default: ''  
     *              author:
     *                type: string
     *                default: '' 
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
postRouter.route('/').post(controller.create); // create post or content


/** GET Methods */

/**
     * @openapi
     * '/api/post/{userId}':
     *  get:
     *     tags:
     *     - Post Controller
     *     summary: Get a posts by userId
     *     parameters:
     *      - userId: userId
     *        in: path
     *        description: The userId of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
postRouter.route('/:userId').get(controller.getUserPosts) // get all user posts with username

/**
     * @openapi
     * '/api/post/{userId}/{postId}':
     *  get:
     *     tags:
     *     - Post Controller
     *     summary: Get a post by userId and postId
     *     parameters:
     *      - userId: userId
     *      - postId: postId
     *        in: path
     *        description: The userId of the user, postId of the post
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
postRouter.route('/:userId/:postId').get(controller.getUserPost) // get a single user post with username and post id


/** PUT Methods */

/**
     * @openapi
     * '/api/post/update':
     *  put:
     *     tags:
     *     - Post Controller
     *     summary: Modify a post
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - postId
     *            properties:
     *              postId:
     *                type: string
     *                default: ''
     *              title:
     *                type: string
     *                default: ''
     *              description:
     *                type: string
     *                default: ''
     *              content:
     *                type: string
     *                default: ''  
     *              author:
     *                type: string
     *                default: ''  
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
postRouter.route('/update').put(controller.updatePost); // is use to update the post


/** DELETE Methods */

/**
     * @openapi
     * '/api/post/{postId}':
     *  delete:
     *     tags:
     *     - Post Controller
     *     summary: Delete post by Id
     *     parameters:
     *      - name: postId
     *        in: path
     *        description: The unique Id of the post
     *        required: true
     *     responses:
     *      200:
     *        description: Removed
     *      400:
     *        description: Bad request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
postRouter.route('/:postId').delete(controller.deletePost); // is use to delete the post

export default postRouter;