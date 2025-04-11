import React from 'react';
import { useEffect } from 'react';

const FormWRA = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/1/xmpn45');
    script.setAttribute('data-skip-moving', 'true');
    script.src = 'https://cdn.bitrix24.com/b29483423/crm/form/loader_1.js?' + (Date.now() / 180000 | 0);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="bitrix-form-container" className="my-10" />;
};

export default FormWRA;
