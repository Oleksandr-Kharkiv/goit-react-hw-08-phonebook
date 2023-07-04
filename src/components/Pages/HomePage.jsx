import { HomePageText, FeedbackMail } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageText>
        Thank you for paying attention to this product. I wish you a pleasant
        use! Please send your feedback and suggestions  
        <FeedbackMail href="mailto:est_@ukr.net"> 👉✉️ </FeedbackMail>
      </HomePageText>
    </>
  );
};

export default HomePage;
