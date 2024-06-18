import styled from "styled-components";

export const NavbarContainer = styled.nav`
display: flex;
flex-direction: column;
    height: 10vh;
    width: 100vw;
    background: linear-gradient(45deg,rgb(128, 0, 255),rgb(30, 87, 243),#1A8FED,rgb(1, 194, 194)
    );
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000000;
    `

export const LeftContainer =styled.div`
display: flex;
flex: 80%;
align-items: center;
justify-content:space-evenly;
list-style-type: none;
font-weight:500;
font-size: 21px;
`

export const NavbarLinkContainer =styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content:space-evenly;
list-style-type: none;
font-weight:500;
font-size: 21px;

@media (max-width: 950px){
    display: none;
}

`

export const RightContainer =styled.div`
display: flex;
flex: 20%;
align-items: center;
justify-content: center;


`

export const NavbarInnerContainer =styled.div`
height:100%;
width:100%;
display: flex;
`




export const NavbarExtendedContainer =styled.div`
position: fixed;
top: 8vh;
left: 3vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 30%;
width: 18%;
z-index: 1000000;
background: linear-gradient(45deg,rgb(128, 0, 255),rgb(30, 87, 243),#1A8FED,rgb(1, 194, 194)
);
border-radius: 10px;
list-style-type: none;
font-weight:500;
font-size: 19px;



@media (min-width: 950px){
  display: none;
}
@media (max-width: 800px){
  font-size: 17px;
}
@media (max-width: 700px){
  font-size: 17px;
  width: 22%;
}
@media (max-width: 600px){
  font-size: 15px;
  width: 23%;

}
`


export const OpenLinkButton = styled.button`
  height: 70px;
  width: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 950px) {
    display: none;
  }

  @media (max-width: 950px) {
    margin-right: 75%;
  }

`;


