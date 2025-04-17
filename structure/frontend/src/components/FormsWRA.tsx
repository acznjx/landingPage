import React, { useEffect, useRef } from 'react';

const FormsWRA: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/1/xmpn45');
    script.setAttribute('data-skip-moving', 'true');
    script.async = true;
    script.src = 'https://cdn.bitrix24.com/b29483423/crm/form/loader_1.js';

    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = '';
      formContainerRef.current.appendChild(script);
    }

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="FaleConosco" className="contact-form-section">
      <h2 className="contact-title">Fale Conosco</h2>
      <div ref={formContainerRef} className="b24-form-wrapper" />
    </section>
  );
};

export default FormsWRA;
