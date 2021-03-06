import styled from "styled-components"

export const ContainerWrapper = styled.div`

  height: 100%;
  display: grid;
  grid-template-colums: 1fr repeat(12,minmax(auto, 3.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  grid-gap: 0 2rem;

  @media ${props => props.theme.breakpoints.table}{
    grid-template-colums: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile}{
    grid-template-colums: 1rem repeat(6, 1fr) 1rem;
   }

`