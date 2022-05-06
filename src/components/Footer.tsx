type FooterProps = {
    copyright: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
    <footer className="footer container-fluid">{props.copyright}</footer>
)