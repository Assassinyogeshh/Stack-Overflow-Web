import React from 'react'
import { useFormik } from 'formik'
import { updateProfile } from '../../Action/Users'
import { useDispatch, useSelector } from 'react-redux'
import './EditProfile.css'
function EditProfile(userId, currentProfile) {
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.currentUserReducer);

  const cancelEditProfile = () => {

  }

  const initialValues = {
    name: '',
    about: '',
    tags: ''
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {

        const updatedTagsArray = values.tags.split(" ")
          
        dispatch(updateProfile(currentProfile?._id, { ...values, tags: updatedTagsArray, name: currentProfile?.name }))
        alert('profile update successfully')
      } catch (error) {
        console.log(error);
        alert('Failed to Update the Profile')
      }
    }
  })

  return (
    <>
      <div className="edit_profile">
        <span className='edit_profile_title'><h1>Edit Youe Profile</h1></span>
        <div className="public_information">
          <h1>Public Information</h1>
          <div className="updating_profile">
            <form onSubmit={handleSubmit}>
              <label htmlFor="display_name"><h3>Display Name:</h3></label>
              <input type="text" name="name" value={values.name} id="display_name" onChange={handleChange} />

              <label htmlFor="about_me"><h3>About Me:</h3></label>
              <textarea type="text" name="about" value={values.about} id="about_me" onChange={handleChange} cols="30" rows="10"></textarea>

              <label htmlFor="users_tags"><h3>Tags:</h3></label>
              <p>Add tags separated by 1 space</p>
              <input type="text" name="tags" value={values.tags} id="users_tags" onChange={handleChange} required />

              <div className="profile_btn">
                <button type="submit" className="submit_updated_profile">Save Profile</button>
                <button onClick={cancelEditProfile} className='user_cancel_btn'>Cancel</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
