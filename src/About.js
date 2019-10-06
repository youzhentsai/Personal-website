import React from  'react';
class About extends React.Component{
    render(){
        return (
        <div className = 'About-section' align = 'center'> 
        <p className = 'About-title'> MORE ABOUT ME </p>
            <p className = 'About-content'> 
            BACKGROUND: I was born and raised in Taipei, Taiwan, and I came to the states for college. {'\n'}
            ACTIVITIES: I am a software developer at Codebase, working on data science projects at Data Science Society. {'\n'}
            HOBBIES: In my free time, I love to travel, go shopping and try out new restaurants! </p>
        </div>)
    }
}

export default About