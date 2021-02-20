import React from 'react';
import Styled from 'styled-components';

const ReviewsContainer = Styled.div`
  background-color: black;
  color: white;
  font-family: Nunito Sans;
  padding: 8rem 0rem;
  margin-bottom: 4rem;
`;

const AllContentContainer = Styled.div`
  display: flex;
  justify-content: center;
`;

const ReviewsTitleStyle = Styled.div`
  flex-basis: 20%;
  display: block;
  margin-bottom: 3.2rem;
  font-size: 16px;
  letter-spacing: -.16px;
  line-height: 2rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
`;

const ReviewAspactsContainter = Styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
`;

const ReviewSection = Styled.div`
  display: flex;
  justify-content: ${props => props.justify};
`;

const ReviewType = Styled.div`
  display: flex;;
  flex-direction: column;
`;

const TopTextStyle = Styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const BottomTextStyle = Styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 1rem 0rem;
`;

const SubTextStyle = Styled.div`
  font-size: 12px;
  color: #999;
`;

const StyledReviewsButton = Styled.div`
  background-color: white;
  min-width: fit-content;
  padding: .8rem;
  border-color: transparent;
  border-radius: 3rem;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
  :hover {
    transform: scale(1.015);
  }
`;

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ReviewsContainer>
        <AllContentContainer>
          <ReviewsTitleStyle>Reviews</ReviewsTitleStyle>
          <ReviewAspactsContainter>
            <ReviewSection justify={'space-between'}>
              <ReviewType>
                <TopTextStyle>4.5/5</TopTextStyle>
                <BottomTextStyle>Stars go here</BottomTextStyle>
                <SubTextStyle>Based on 42 Reviews</SubTextStyle>
              </ReviewType>
              <ReviewType>
                <TopTextStyle>Size {'&'} Fit</TopTextStyle>
                <BottomTextStyle>Kinda Large</BottomTextStyle>
                <SubTextStyle>36% Reviews</SubTextStyle>
              </ReviewType>
              <ReviewType>
                <TopTextStyle>Activities</TopTextStyle>
                <BottomTextStyle>activity types</BottomTextStyle>
                <SubTextStyle>Popular among reviewers</SubTextStyle>
              </ReviewType>
            </ReviewSection>
            <ReviewSection style={{"marginTop": "25px", "alignItems":"center"}}>
              <StyledReviewsButton>See All Reviews</StyledReviewsButton>
              <BottomTextStyle style={{"paddingLeft": "2rem"}}>Write a Review</BottomTextStyle>
            </ReviewSection>
          </ReviewAspactsContainter>
        </AllContentContainer>
      </ReviewsContainer>
    )
  }
}


export default ReviewsComponent;