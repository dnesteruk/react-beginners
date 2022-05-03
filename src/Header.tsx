type HeaderProps = {
    slogan: string;
}

export const Header: React.FC<HeaderProps> = (props) => (
    <header>Header component {props.slogan}</header>
)