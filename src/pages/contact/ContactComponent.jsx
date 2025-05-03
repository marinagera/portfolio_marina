import { LayoutContainer } from '../layout/LayoutStyled';
import { LayoutWrapperContact, ContactWrapper } from './ContactStyled';

const ContactComponent = () => {
  return (
    <>
      <LayoutWrapperContact>
        <LayoutContainer>
          <ContactWrapper>
            Contact
          </ContactWrapper>
        </LayoutContainer>
      </LayoutWrapperContact>
    </>
  );
};

export default ContactComponent;