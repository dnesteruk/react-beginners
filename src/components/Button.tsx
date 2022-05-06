import {FC} from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({text, onClick}) => (
    <button className="btn btn-success" type="button" onClick={onClick}>
        {text}
    </button>
);
