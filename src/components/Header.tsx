type HeaderProps = {
    slogan: string;
}

export const Header: React.FC<HeaderProps> = (props) => (
    <header>{props.slogan}</header>
)