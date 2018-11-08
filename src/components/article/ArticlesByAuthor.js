import React, { Fragment } from 'react';
import ProfileArticle from './Profile';
import icons from '../../assets/icons.svg';

const ProfileArticleList = (props) => {
  const { articles, userFullName } = props;
  return (
    <Fragment>
      {
        articles.length === 0
          ? (
            <div className="no-record centralizer">
              <svg className="icon">
                <use xlinkHref={`${icons}#sad`} />
              </svg>&nbsp;&nbsp;
              <span>{userFullName}{userFullName} has not posted any article</span>
            </div>
          )
          : articles.map((article) => <ProfileArticle key={article.id} author={props.author} authorImage={props.authorImage} type="article" article={article} />)
      }
    </Fragment>);
};

export default ProfileArticleList;
