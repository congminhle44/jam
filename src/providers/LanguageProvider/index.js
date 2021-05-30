/** @format */

import { Children } from 'react';
import { IntlProvider } from 'react-intl';
import { defaultsDeep } from 'lodash';

import config from '@/config';

const LanguageProvider = ({ children, messages, locale }) => {
  const _messages = defaultsDeep(messages[locale], messages.en);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={config.app.lang}
      messages={_messages}>
      {Children.only(children)}
    </IntlProvider>
  );
};

export default LanguageProvider;
