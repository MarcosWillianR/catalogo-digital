import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import {
  MdFileDownload,
  MdMenu,
  MdShare,
  MdShoppingCart,
  MdSearch,
} from 'react-icons/md';

import {
  Container,
  IconButton,
  CenterHeaderWrapper,
  PageSelectionInput,
} from './styles';

import Logo from '../../assets/logo.png';

interface HeaderProps {
  handleToggleCart(): void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleCart }) => {
  const [pageSelected, setPageSelected] = useState({ page: 1, totalPages: 1 });
  const [pageText, setPageText] = useState('1/1');

  return (
    <Container>
      <img src={Logo} alt="Catalogo Digital - Logo" width={90} height={36} />

      <CenterHeaderWrapper>
        <div>
          <IconButton type="button">
            <MdFileDownload size={22} />
          </IconButton>

          <IconButton type="button">
            <MdShare size={22} />
          </IconButton>
        </div>

        <PageSelectionInput>
          <InputMask mask="999" placeholder={pageText} maskPlaceholder="" />
        </PageSelectionInput>

        <div>
          <IconButton type="button" onClick={handleToggleCart}>
            <MdShoppingCart size={22} />
          </IconButton>

          <IconButton type="button">
            <MdMenu size={22} />
          </IconButton>
        </div>
      </CenterHeaderWrapper>

      <IconButton type="button">
        <MdSearch size={22} />
      </IconButton>
    </Container>
  );
};

export default Header;
