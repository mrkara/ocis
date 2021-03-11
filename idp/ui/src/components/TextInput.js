import React from 'react';
import PropTypes from 'prop-types';

import {useIntl} from 'react-intl';

const TextInput = (props) => {
    const intl = useIntl();
    const label = props.label;
    delete props.label;

    return (
        <div>
            <label id={`${props.id}-label`}
                   className="oc-label"
                   htmlFor={props.id}>{intl.formatMessage(label)}</label>
            <input className="oc-input" {...props}
                   aria-labelledby={`${props.id}-label`}
                   placeholder={props.placeholder ? intl.formatMessage(props.placeholder) : null}/>
        </div>);
};

TextInput.propTypes = {
    placeholder: PropTypes.object,
    label: PropTypes.object,
    id: PropTypes.string,
}

export default TextInput;
