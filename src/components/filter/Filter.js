import style from './Filter.module.css';
import { connect } from "react-redux";
import * as contactsActions from '../../redux/actions';
import { contactsFilter } from '../../redux/selectors';

const Filter = ({ value, OnFilterContacts }) => {
    return (
        <div classNames={style}><label>
            Find contacts by name:
            <input
                type="text"
                value={value}
                onChange={OnFilterContacts}
                placeholder='Search contact'
            />
        </label>
        </div>
    );
}

const mapStateToProps = (state) => ({
    value: contactsFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
    OnFilterContacts: e =>
        dispatch(contactsActions.changeFilter(e.currentTarget.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
