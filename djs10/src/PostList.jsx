import PropTypes from 'prop-types';

function PostList({ posts = [], error = null }) {
    if (error) {
        return <div>Error: {error}</div>; // Display error message if exists
    }

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}

PostList.propTypes = {
    posts: PropTypes.array,
    error: PropTypes.string
};

export default PostList;