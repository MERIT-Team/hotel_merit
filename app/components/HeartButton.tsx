'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonProps {
    listingId: string;
    currentUser: SafeUser;
}


const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser,
}) => { 
    const hasFavorited = false
    const toggleFavoite = () => {

    }
    return (
        <div onClick={toggleFavoite} className="relative hover:opacity-80 transition cursor-pointer">
            <AiOutlineHeart 
                size={26}
                className="fill-white absolute -top-[2px] -right-[2px]"
            />
            <AiFillHeart
                size={23}
                className={hasFavorited ? 'fill-custom-red' : 'fill-neutral-500/70'}
            />
        </div>
    )
}

export default HeartButton;