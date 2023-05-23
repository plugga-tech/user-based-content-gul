'use strict';

import getMyPosts from "./getMyPosts.js";

export default async function deletePost(id) {
    await fetch ('http://localhost:3000/api/posts/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: id })
    })
    getMyPosts();
}