import { useState } from "react";

import {
  FifthSection,
  FirstSection,
  FourthSection,
  SecondSection,
  SeventhSection,
  SixthSection,
  ThirdSection,
} from "@/constants/menu";
import * as S from "./styles";

const NavigationMenu = () => {
  const [selectedButton] = useState("Página Inicial");

  return (
    <S.Container>
      <S.Section>
        <S.ItemsList>
          {FirstSection.map((menuItem) => {
            return (
              <S.MenuItemContainer
                key={menuItem.text}
                color={menuItem.color}
                isSelected={selectedButton === menuItem.text}
              >
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>

        <S.ItemsList>
          <h4>COMPETIÇÕES</h4>

          {SecondSection.map((menuItem) => {
            return (
              <S.MenuItemContainer key={menuItem.text} color={menuItem.color}>
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>

        <S.ItemsList>
          <h4>JOGUE MAIS</h4>

          {ThirdSection.map((menuItem) => {
            return (
              <S.MenuItemContainer key={menuItem.text} color={menuItem.color}>
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>

        <S.ItemsList>
          <h4>DESEMPENHO</h4>

          {FourthSection.map((menuItem) => {
            return (
              <S.MenuItemContainer key={menuItem.text} color={menuItem.color}>
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>

        <S.ItemsList>
          {FifthSection.map((menuItem) => {
            return (
              <S.MenuItemContainer key={menuItem.text} color={menuItem.color}>
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>

        <S.ItemsList>
          {SixthSection.map((menuItem) => {
            return (
              <S.MenuItemContainer key={menuItem.text} color={menuItem.color}>
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>

        <S.ItemsList>
          {SeventhSection.map((menuItem) => {
            return (
              <S.MenuItemContainer key={menuItem.text} color={menuItem.color}>
                {menuItem.icon}

                <p>{menuItem.text}</p>
              </S.MenuItemContainer>
            );
          })}
        </S.ItemsList>
      </S.Section>
    </S.Container>
  );
};

export default NavigationMenu;
