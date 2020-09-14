import React from 'react';
import { FormattedMessage } from 'react-intl';

const translate = (id, value={}) => <FormattedMessage id={ id } value={{...value}} />

export default translate;