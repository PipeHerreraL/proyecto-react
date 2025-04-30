import React from "react";
import Profile from "../components/Profile";

const Welcome = () => {
    return (
        <div className='flex gap-4 justify-center mt-6'>
            <Profile image="https://cdn.pixabay.com/photo/2023/01/19/10/24/castle-7728772_1280.jpg" />
            <Profile image="https://cdn.pixabay.com/photo/2023/01/22/15/16/ocean-7736669_1280.jpg" />
            <Profile image="https://cdn.pixabay.com/photo/2023/01/25/18/14/landscape-7744216_1280.jpg" />
        </div>
    )
}

export default Welcome;