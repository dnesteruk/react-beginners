type FooterProps = {
    copyright: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
    <footer>Footer component {props.copyright}</footer>
)