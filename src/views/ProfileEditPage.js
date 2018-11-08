import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Body from '../components/layout/DefaultLayout';
import ProfileImageUploader from '../components/profile/ImageUploader';
import InputBox from '../components/shared/InputBox';
import Loading from '../components/shared/Loading';
import { fetchProfile, editProfile } from '../actions/profileActions';
import TextBox from '../components/shared/TextBox';
import { spinner } from '../mixin';

class EditProfile extends Component {
  state = {
    profileImage: '',
    profileImageFile: '',
    username: '',
    bio: '',
    updating: false,
  }

  componentDidMount = () => {
    const { fetchProfile: profileFetch } = this.props;
    profileFetch(1);
    const { profileStore } = this.props;
    this.setState({
      bio: profileStore.profile.bio,
      username: profileStore.profile.username,
    });
  }

  componentDidUpdate = (prevProps) => {
    const { profileStore } = this.props;
    if (prevProps.profileStore.profile.username !== profileStore.profile.username) {
      this.setState({ username: profileStore.profile.username });
    }
    if (prevProps.profileStore.profile.bio !== profileStore.profile.bio) {
      this.setState({ bio: profileStore.profile.bio });
    }
  }

  imageRead = (file, image) => {
    this.setState({
      profileImage: image,
      profileImageFile: file,
    });
  }

  resetImage = () => {
    this.setState({
      profileImage: '',
      profileImageFile: '',
    });
  }

  resetProfile = (e) => {
    const { profileStore } = this.props;
    e.preventDefault();
    this.setState({
      profileImage: '',
      profileImageFile: '',
      bio: profileStore.profile.bio,
      username: profileStore.profile.username,
    });
  }

  updateProfile = async (e) => {
    e.preventDefault();
    if (!e.target.username.value) return swal('Please enter a username', 'Pro Tip: Authors with usernames attract more followers', 'warning');
    if (!e.target.bio.value) return swal('Please fill in your bio', 'Pro Tip: With a clear descriptive bio your profile looks much more beautiful', 'warning');
    const { editProfile: updateProfile } = this.props;
    this.setState({ updating: true });
    const { profileImageFile } = this.state;
    const profileData = new FormData(e.target);
    if (profileImageFile) profileData.append('image', profileImageFile);
    const response = await updateProfile(1, profileData);
    this.setState({ updating: false });
    if (response.success) {
      this.resetImage();
      swal('Success', response.success, 'success');
    }
    if (response.error) swal('Error', response.error, 'error');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { profileStore } = this.props;
    const {
      profileImage,
      username,
      bio,
      updating,
    } = this.state;

    if (!Object.keys(profileStore.profile).length) {
      if (profileStore.profileError) return <div>{profileStore.profileError}</div>;
      return <Loading />;
    }
    const fullName = `${profileStore.user.firstname} ${profileStore.user.lastname}`;
    return (
      <Body className="edit-profile">
        <form onSubmit={this.updateProfile} encType="multipart/form-data">
          <ProfileImageUploader name="image" imageRead={this.imageRead} canReset={!!profileImage} resetImage={this.resetImage} profileImage={profileImage || profileStore.profile.image} />
          <h3 id="user-name" className="username">{fullName}</h3>
          <InputBox handleChange={this.handleChange} value={username} name="username" placeholder="Username" />
          <TextBox handleChange={this.handleChange} value={bio} name="bio" placeholder="Enter a short bio" />
          <div>
            <button type="submit" disabled={updating} id="save-button" className={`button outline ${updating ? 'disabled' : ''}`}>{ updating ? <img className=" edit-profile_spinner" alt="loader" src={spinner} /> : 'Save' }</button>
            <button type="button" disabled={updating} onClick={this.resetProfile} className={`button outline ${updating ? 'disabled' : ''}`}>Cancel</button>
          </div>
        </form>
      </Body>
    );
  }
}

const mapStateToProps = (state) => ({
  profileStore: state.profile,
});

export default connect(
  mapStateToProps,
  { fetchProfile, editProfile },
)(EditProfile);
