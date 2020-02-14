import React from "react";
import squirrel from './squirrelparkour.jpeg'
import skunk from './BabySkunk.jpg'
import chipmunk from './chipmunk.jpg'
import unknown from './unknowncuteanimal.jpg'

class Home extends React.Component {
    render() {
        return <>
        <h1>Welcome to Wildlife Wellness</h1>
        <div className="homepage" align="center">
            <p>One stop shop for all your animal care information needs</p>
            <p>Wildlife like squirrels, chipmunks, and racoons need help and care when ill or injured, just like domestic animals. What happens to them when there is no vet around or no one who can pay said vet?</p>
            <p>
            Volunteers can get licensed to take care of and rehabilitate animals that are not otherwise allowed to be kept as pets or treated with potentially regulated substances/medications, like tramadol. 
            </p>
            <p>This website was built as a resource for those that want to help support wildlife preservation efforts. </p>
            <img src={squirrel} align="middle" height= '250'alt="squirrel" />
            <img src={skunk} align="middle" height= '250'alt="skunk" />
            <img src={chipmunk} align="middle" height= '250'alt="chipmunk" />
            <img src={unknown} align="middle" height= '250'alt="unknown" />
        </div>
        </>

    }
}

export default Home;