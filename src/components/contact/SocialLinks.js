import styled from 'styled-components';
import { socialLinks } from '../../data/social';

function SocialLinks() {
  return (
    <SocialContainer>
      {Object.entries(socialLinks).map(([key, { url, icon, label }]) => (
        <SocialLink 
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <i className={`fab fa-${icon}`}></i>
        </SocialLink>
      ))}
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

export default SocialLinks; 