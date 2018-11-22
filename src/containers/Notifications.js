import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotification, seenNotification } from '../actions/notificationActions';
import LargeLoader from '../components/shared/LargeLoader';

export class Notifications extends Component {
  state = {
    notifications: {},
  };

  componentDidMount() {
    const { getNotification: latestNotification } = this.props;
    latestNotification();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { notifications } = nextProps;
      this.setState({
        notifications,
      });
    }
  }

  handleSeen = (id) => {
    const { seenNotification: notificationSeen } = this.props;
    notificationSeen(id);
  };

  displayNotifications = () => {
    const { notifications } = this.state;
    return (
      <div>
        {notifications.length > 0 ? (
          <div>
            <h1 className="text-center">Notifications</h1>
            { notifications.map((notification) => {
              if (!notification.seen) {
                switch (notification.type) {
                  case 'followerArticle':
                    return (
                      <div className="row notification-result" key={notification.id}>
                        <Link
                          to={`/articles/${notification.articleSlug}`}
                          className="col-md-6 card m-auto"
                          key={notification.id}
                          onClick={() => {
                            this.handleSeen(notification.id);
                          }}
                        >
                          <span>{`${notification.author.firstname.charAt(0).toUpperCase()}${notification.author.firstname.slice(1)} ${notification.author.lastname.charAt(0).toUpperCase()}${notification.author.lastname.slice(1)} published a new article`}</span>
                        </Link>
                      </div>
                    );
                  case 'favoriteArticleComment':
                    return (
                      <div
                        className="row notification-result"
                        key={notification.id}
                        onClick={() => {
                          this.handleSeen(notification.id);
                        }}
                      >
                        <Link to={`/articles/${notification.articleSlug}`} className="col-md-6 card m-auto">
                         New comment on one of  your favorite article {notification.article.title}
                        </Link>
                      </div>
                    );
                  default:
                    break;
                }
              }
            })}
          </div>
        ) : (
          <div>
            <h1>No New Notifications</h1>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { notifications } = this.state;
    return (
      <div>
        <section className="notifications">{Object.keys(notifications).length < 1 ? <LargeLoader /> : <div>{this.displayNotifications()}</div>}</section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications.rows,
});

export default connect(
  mapStateToProps,
  { getNotification, seenNotification },
)(Notifications);
