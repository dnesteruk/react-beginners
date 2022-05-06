import { PureComponent } from "react";
import Data from '../../storage/data.json';

type Props = {name: string};

class Main extends PureComponent<Props> {

    render() {
        return <main>
                    <section>
                        <header>Hello I am {this.props.name}</header>
                        <div>{Data.shortBiography}</div>
                        <div>{Data.publicContacts}</div>
                    </section>
            </main>;
    }
}

export {Main}