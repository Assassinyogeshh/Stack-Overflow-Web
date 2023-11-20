import React from 'react'
import './AskQuestions.css'
import { useFormik } from 'formik';
import { askQuestion } from '../../Action/UsersQuestion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AskQuestions() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.currentUserReducer)


    const initialValues = {
        quetionTitle: '',
        quetionBody: '',
        quetionTags: [],
        userPosted: user?.stackUser.name
    }

    const { values, handleSubmit, handleChange } = useFormik({

        initialValues,
        onSubmit: async (values, Action) => {
            try {



                if (user) {
                    const tagsArray = values.quetionTags.split(" ");

                    const response = await dispatch(askQuestion({ ...values, quetionTags: tagsArray }, navigate))
                    if (response.status === 200) {
                        alert('Question Post Succesfully')
                        navigate('/')

                    }
                }
            } catch (errors) {
                alert('Failed To Post Question Succefully')
               
            }

        }

    })


    return (
        <>
            <div className="ask_public_questions_page"  >
                <div className="ask_public_question">
                    <h1>Ask a public Question</h1>
                    <div className="ask_question_form">
                        <form className='question_form' onSubmit={handleSubmit}>
                            <label htmlFor="title"></label>
                            <h4>Title</h4>
                            <p>Be specific and imagine you’re asking a question to another person</p>
                            <input type="text" name='quetionTitle' onChange={handleChange} value={values.quetionTitle} id='title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?' className='title_field' />

                            <label htmlFor="body"></label>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea type="text" name="quetionBody" onChange={handleChange} value={values.quetionBody} id='body' className='body_field'></textarea>

                            <label htmlFor="tags"></label>
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" name="quetionTags" onChange={handleChange} value={values.quetionTags} id="tags" placeholder='e.g. (xml typescript wordpress)' className='tags_field' />


                            <div className="review_question">
                                <button type='submit' className="review_question_btn">
                                    Review Question
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div >
        </>
    )
}

export default AskQuestions
