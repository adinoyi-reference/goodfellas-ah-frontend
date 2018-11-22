import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import { userPlaceholderImage, articlePlaceholderImage, filterReactions } from '../../mixin';

export default (props) => {
  const {
    article,
    author,
    authorImage,
    userId,
  } = props;
  return (
    <div className="profile-article hoverable">
      <Link className="profile-article_user-img" to={`/user/profile/${article.authorId}`}><img src={authorImage || userPlaceholderImage} alt="user" /></Link>
      <div className="profile-article_img" style={{ backgroundImage: `url(${article.image || articlePlaceholderImage})` }} />
      <h3>{ article.title }</h3>
      <Link to={`/user/profile/${article.authorId}`} className="profile-article_username p">{author}</Link>
      <p className="profile-article_date">{moment(article.createdAt).format('ll')}</p>
      <p className="profile-article_read-time">{`${article.read_time} read`}</p>
      <p className="profile-article_description">{article.description}</p>
      <div className="profile-article_footer">
        <p className="profile-article_likes">
          {filterReactions(article.reactions).likes}&nbsp;
          <svg className="icon">
            <use xlinkHref={`${icons}#like`} />
          </svg>
        </p>
        <p className="profile-article_dislikes">
          {filterReactions(article.reactions).dislikes}&nbsp;
          <svg className="icon">
            <use xlinkHref={`${icons}#dislike`} />
          </svg>
        </p>
        <p className="comments">{`${article.comments.length || 0} comments`}</p>
        {userId === article.authorId && <Link to={`/articles/edit/${article.slug}`} className="edit p">Edit Article</Link>}
      </div>
    </div>
  );
};
