import './404.css';
import {PrimaryInfo} from "../util/util";

function NotFound() {
    return (
        <div>
            <PrimaryInfo text="404: Page not found."/>
        </div>
    )

}

export {NotFound};