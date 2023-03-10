import './terms.css';
import {PrimaryInfo} from "../util/util";

export function Terms() {
    return (
        <div>
            <PrimaryInfo text="🚧Terms of Service🚧"/>
            <div className='terms-list'>
                1. This is term 1.<br/>
                2. This is term 2.<br/>
                3. This is term 3.<br/>
                4. This is term 4.<br/>
                5. This is term 5.
            </div>
        </div>
    )
}
