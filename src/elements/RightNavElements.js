import styled from "styled-components"


export const RightNavWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  padding: 3rem 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.dark3};
  font-weight: 200r;
  font-size: 0.875rem;
  transition: filter 0.3s ease;
  text-decoration: none;

  img {
    height: 30px;
  }
pm 
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`


// export const RightNavElement = styled.section`
//   font-size: 0.875rem;
//   line-height: 1.125rem;
//   font-weight: 400;
//   text-decoration: none;
//   margin: 0 2rem;

//   &:hover,
//   &:focus {
//     text-decoration: underline;
//   }

// @media ${props => props.theme.breakpoints.tablet} {
//   grid-column: 2 / span 6;
// }
// `