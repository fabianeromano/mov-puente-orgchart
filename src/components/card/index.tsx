import { BsArrowDownCircle } from "react-icons/bs"

import { TreeNode } from "@/lib/model";

interface CardProps extends TreeNode{
    onToggle: Function
}

const Card = ({ rol, name, children, onToggle }: CardProps) => {
    return (
        <div className=" inline-block px-2 text-center rounded-md shadow-xl cursor-pointer h-14 bg-slate-50 hover:border-[#fbba00] hover:border-2">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm font-bold text-black">{rol}</h3>
                <p className="text-xs font-normal text-slate-600">{name}</p>
                {children.length > 0 && <BsArrowDownCircle onClick={() => onToggle()} className=" text-slate-600 hover:text-[#fbba00]" />}
            </div>
        </div>
    );
}

export default Card;