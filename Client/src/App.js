import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import HomeMainBar from './Components/HomeMainBar/HomeMainBar';
import AskQuestions from './Pages/AskQuestions/AskQuestions';
import Tags from './Pages/Tags/Tags';
import User from './Pages/Users/User';
import UserProfile from './Pages/UserProfile/UserProfile';
import AllQuestionDetails from './Pages/GiveAnswers/AllQuestionDetails';
import QuestioBar from './Components/LeftSideBar/QuestionBar';


function App() {
  
  const [slideIn, setSlideIn]=useState(true)
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  
  };

  return (
    <>
      <BrowserRouter>
      <Navbar  handleSlideIn={handleSlideIn} />
 <Routes>
        <Route path='/' element={<HomeMainBar slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/register' element={<Register/>}/>
        <Route path='/Questions/Ask' element={<AskQuestions/>}/>
        <Route path='/Questions/fetchAllQuestions' element={<QuestioBar slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
        <Route path='/Questions/:id' element={<AllQuestionDetails slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
        <Route path='/Tags' element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
        <Route path='/user/getAllUsers' element={<User slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
        <Route path='/user/updateProfile/:id' element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
        
 </Routes>
   
 </BrowserRouter>
    </>
  );
}

export default App;
