import { formatDate } from '../../utils/formatDate';

const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;  {/*text: commentText destructures this text property as commentText.  This will allow us to refer to the comment.text property as commentText. */}

    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    );
};

export default Comment;

