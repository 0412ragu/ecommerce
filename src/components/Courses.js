import React from 'react';
import software from './softwaret.jpg'
import java from './java1.jpg'
import python from './python1.jpg'
import datascience from './datascience.jpg'
import machinelearn from './machinelearning.jpg'
import ai from './AI.jpg'
import './Course.css'
function Course(){
    return(
        <>
        <div className='aboutback' >
            <center>
                <h1 className='head' >Our unified Courses</h1>
            </center>
            <div className='unberline' ></div>
        </div>
        
        <div className='course-details'>
        <div className='center'>
               <img src={java} alt='javaphoto'style={{height:'72px',width:'150px'}} className='java.img'/>
               <a href='http://en.m.wikipedia.org/wiki/Full_stack' >  <h1>Java full stack</h1></a>
            </div>
        </div><br/>
        <div className='course-details' >
            <div className='center' >
                <img src={python} alt='pythonphoto'style={{height:'72px',width:'150px'}} className='java.img'/>
                <a href='http://en.m.wikipedia.org/wiki/Python_(programming_language)' ><h1>Python full stack</h1></a>
            </div>
        </div>
        <br/>
        <div className='course-details' >
       <div className='center' >
                <img src={software} alt='photo' className='java-img'  />
                <a href='https://en.wikipedia.org/wiki/Software_testing' ><h1>Software Testing </h1></a>
            </div>
        </div>
        <br/>
        <div className='course-details' >
        <div className='center' >
                <img src={datascience} alt='photo' className='java-img'  />
                <a href='https://en.wikipedia.org/wiki/Data_science'><h1>Data Science </h1></a>
            </div>
        </div>
        <br/>
        <div className='course-details' >
       <div className='center' >
                <img src={ai} alt='photo' className='java-img'  />
                <a href='https://en.wikipedia.org/wiki/Artificial_intelligence' ><h1>Artificial Intelligence </h1></a>
            </div>
        </div>
        <br/>
        <div className='course-details' >
        <div className='center' >
                <img src={machinelearn} alt='photo' className='java-img'  />
                <a href='https://en.wikipedia.org/wiki/Machine_learning'><h1>Machine Learning</h1></a>
            </div>
        </div>
        <br/>
        
        </>
    );
}
export default Course