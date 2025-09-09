import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  landingPageContainer: {
    minHeight: '100vh',
    background: '#fafafa',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
  },
  
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 25% 75%, rgba(200, 200, 200, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 25%, rgba(200, 200, 200, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.9375rem 2.5rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(0.625rem)',
    boxShadow: '0 0.125rem 0.625rem rgba(0,0,0,0.1)',
  },
  
  logo: {
    color: '#82b440',
    fontWeight: 'bold',
    fontSize: '1rem',
    textTransform: 'lowercase',
  },
  
  bookHeaderButton: {
    background: '#82b440',
    color: 'white',
    border: 'none',
    padding: '0.625rem 1.25rem',
    borderRadius: '0.25rem',
    fontWeight: 600,
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#6b9a35',
    },
  },
  
  mainContent: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    paddingTop: '5rem',
  },
  
  heroSection: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 22,
    width: '100%',
  },
  
  mainTitle: {
    fontSize: '4.5rem',
    fontWeight: 300,
    color: '#2c3e50',
    margin: '0 0 0.9375rem 0',
    fontFamily: "'Playfair Display', serif",
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '"💬"',
      position: 'absolute',
      top: '-0.5rem',
      right: '-3.4375rem',
      fontSize: '1.3rem',
      background: '#e74c3c',
      color: 'white',
      borderRadius: '50%',
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  
  tagline: {
    fontSize: '1.1rem',
    color: '#7f8c8d',
    margin: '0 0 1.875rem 0',
    fontWeight: 300,
    maxWidth: '31.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  bookButton: {
    background: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '0.9375rem 2.1875rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.0625rem',
    '&:hover': {
      background: '#34495e',
      transform: 'translateY(-0.125rem)',
    },
  },
  
  contentContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  
  smallBannerImage: {
    position: 'absolute',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    width: '12.5rem',
    '&:hover': {
      transform: 'translateY(-0.3125rem)',
    },
  },
  
  cardImage: {
    height: '15.625rem',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.9,
    },
  },
  
  cardContent: {
    padding: '0.75rem',
  },
  
  cardTitle: {
    fontSize: '1.1rem',
    color: '#2c3e50',
    margin: '0 0 0.3125rem 0',
    fontWeight: 600,
  },
  
  cardSubtitle: {
    fontSize: '0.8rem',
    color: '#7f8c8d',
    margin: '0 0 0.5rem 0',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  
  cardCategory: {
    background: '#f8f9fa',
    color: '#6c757d',
    padding: '0.1875rem 0.625rem',
    borderRadius: '0.9375rem',
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.03125rem',
  },
  
  largeBannerImage: {
    position: 'absolute',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.8,
    },
    '&:hover': {
        transform: 'translateY(-0.3125rem)',
      },
  },
  
  // Positioned elements based on Revolution Slider coordinates
  bannerImage1: {
    top: '-5%',
    width: '18.75rem',
    height: '12.5rem',
    transform: 'rotate(-8deg)',
    zIndex: 3,
  },
  
  bannerImage2: {
    top: '2%',
    left: '15%',
    zIndex: 5,
  },
  
  bannerImage3: {
    top: '-12%',
    right: '35%',
    width: '21.875rem',
    height: '15.625rem',
    zIndex: 7,
    transform: 'rotate(8deg)',
  },
  
  bannerImage4: {
    top: '-3%',
    right: '10%',
    zIndex: 5,
  },
  
  bannerImage5: {
    top: '2%',
    right: '-2%',
    width: '17.5rem',
    height: '28.125rem',
    zIndex: 7,
  },
  
  bannerImage6: {
    bottom: '-5%',
    right: '10%',
    zIndex: 5,
    transform: 'rotate(-10deg)',
  },
  
  airplane: {
    position: 'absolute',
    top: '40%',
    left: '35%',
    color: '#f39c12',
    fontSize: '1.8rem',
    zIndex: 13,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '100%',
      width: '3.75rem',
      height: '0.125rem',
      background: `repeating-linear-gradient(
        to right,
        #f39c12 0,
        #f39c12 0.375rem,
        transparent 0.375rem,
        transparent 0.75rem
      )`,
    },
  },
  
  heartEyes: {
    position: 'absolute',
    top: '30%',
    right: '40%',
    fontSize: '1.8rem',
    zIndex: 13,
  },
  
  discoverText: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    fontSize: '5rem',
    color: 'rgba(139, 69, 19, 0.08)',
    fontWeight: 900,
    fontFamily: "'Playfair Display', serif",
    transform: 'rotate(-12deg)',
    zIndex: 8,
  },
  
  goldenGateBridge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '7.5rem',
    background: 'linear-gradient(45deg, #bdc3c7 0%, #95a5a6 100%)',
    clipPath: 'polygon(0 100%, 15% 85%, 30% 90%, 45% 75%, 60% 80%, 75% 70%, 90% 75%, 100% 70%, 100% 100%)',
    opacity: 0.25,
    zIndex: 1,
  },
  
  dogSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    position: 'absolute',
    bottom: '30%',
    left: '15%',
    zIndex: 15,
  },
  
  dogImage: {
    width: '3.125rem',
    height: '3.125rem',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #e67e22 0%, #d35400 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
  },
  
  dogInfo: {
    color: '#2c3e50',
    '& h4': {
      margin: '0 0 0.1875rem 0',
      fontSize: '0.9rem',
      fontWeight: 600,
    },
    '& p': {
      margin: 0,
      fontSize: '0.8rem',
      color: '#7f8c8d',
    },
  },
  
  camera: {
    position: 'absolute',
    bottom: '35%',
    left: '32%',
    width: '4.375rem',
    height: '3.125rem',
    background: '#3498db',
    borderRadius: '0.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.3rem',
    zIndex: 20,
  },
  
  videoSection: {
    position: 'absolute',
    bottom: '25%',
    right: '15%',
    width: '11.25rem',
    height: '6.25rem',
    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.8rem',
    zIndex: 10,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  
  indianFlag: {
    position: 'absolute',
    bottom: '40%',
    right: '10%',
    width: '2.1875rem',
    height: '1.5625rem',
    background: 'linear-gradient(to bottom, #ff9933 33%, #ffffff 33% 66%, #138808 66%)',
    borderRadius: '0.1875rem',
    zIndex: 19,
  },
  
  footer: {
    position: 'absolute',
    bottom: '0.9375rem',
    left: '2.5rem',
    color: '#7f8c8d',
    fontSize: '0.8rem',
    zIndex: 18,
    maxWidth: '25rem',
    lineHeight: 1.4,
  },

  // Destination Component Styles
  destinationSection: {
    backgroundColor: '#f5f5f5',
    padding: '40px 20px',
    minHeight: '100vh',
  },

  carouselContainer: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  destinationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
    margin: '0 auto',
  },

  destinationCard: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
    },
    '&:nth-child(5)': {
      gridColumn: 'span 2',
    },
  },

  cardBackground: {
    position: 'relative',
    width: '100%',
    height: '280px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  locationBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    background: '#82b440',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 600,
    zIndex: 2,
  },

  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)',
    padding: '24px 20px 20px',
    color: 'white',
  },

  cityName: {
    margin: '0 0 8px 0',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.2,
  },

  separatorLine: {
    width: '40px',
    height: '2px',
    background: '#4fc3f7',
    margin: '0 0 12px 0',
  },

  cityDescription: {
    margin: 0,
    fontSize: '14px',
    lineHeight: 1.4,
    opacity: 0.9,
    maxWidth: '280px',
  },

  // Carousel Navigation Arrows
  carouselArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    '&:hover': {
      background: 'white',
      transform: 'translateY(-50%) scale(1.1)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
    },
  },

  carouselArrowLeft: {
    left: '-24px',
  },

  carouselArrowRight: {
    right: '-24px',
  },

  carouselArrowSvg: {
    color: '#333',
  },

  // Carousel Dots Indicator
  carouselDots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginTop: '32px',
  },

  carouselDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(0, 123, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(0, 123, 255, 0.6)',
      transform: 'scale(1.2)',
    },
    '&.active': {
      background: '#007bff',
      transform: 'scale(1.2)',
    },
  },

  // Responsive design
  '@media (max-width: 1024px)': {
    destinationGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
    },
    destinationCard: {
      '&:nth-child(5)': {
        gridColumn: 'span 1',
      },
    },
    carouselArrow: {
      width: '40px',
      height: '40px',
    },
    carouselArrowLeft: {
      left: '-20px',
    },
    carouselArrowRight: {
      right: '-20px',
    },
  },

  '@media (max-width: 768px)': {
    destinationGrid: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(5, 1fr)',
    },
    destinationCard: {
      '&:nth-child(5)': {
        gridColumn: 'span 1',
      },
    },
    cardBackground: {
      height: '240px',
    },
    cityName: {
      fontSize: '24px',
    },
    cityDescription: {
      fontSize: '13px',
    },
    carouselArrow: {
      width: '36px',
      height: '36px',
    },
    carouselArrowLeft: {
      left: '-18px',
    },
    carouselArrowRight: {
      right: '-18px',
    },
  },

  '@media (max-width: 480px)': {
    destinationSection: {
      padding: '20px 16px',
    },
    destinationGrid: {
      gap: '16px',
    },
    cardBackground: {
      height: '200px',
    },
    locationBadge: {
      fontSize: '12px',
      padding: '6px 12px',
    },
    cardContent: {
      padding: '20px 16px 16px',
    },
    cityName: {
      fontSize: '22px',
    },
    carouselArrow: {
      width: '32px',
      height: '32px',
    },
    carouselArrowLeft: {
      left: '-16px',
    },
    carouselArrowRight: {
      right: '-16px',
    },
    carouselDots: {
      marginTop: '24px',
      gap: '8px',
    },
    carouselDot: {
      width: '10px',
      height: '10px',
    },
  },

  // Counter Banner Styles
  counterBanner: {
    position: 'relative',
    width: '100%',
    minHeight: '25rem', // 400px
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: '3.75rem 0', // 60px 0
    boxShadow: '0 0.625rem 1.875rem rgba(0,0,0,0.3)', // 10px 30px
    borderRadius: '0.5rem',
    border: '1px solid rgba(255,255,255,0.1)',
  },

  counterBannerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2c3e50', // Fallback color
    zIndex: 1,
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  counterBannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)',
    zIndex: 2,
  },

  counterBannerContent: {
    position: 'relative',
    zIndex: 3,
    width: '100%',
    maxWidth: '75rem', // 1200px
    padding: '3.75rem 1.25rem', // 60px 20px
    backdropFilter: 'blur(0.125rem)', // 2px
  },

  counterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2.5rem', // 40px
    alignItems: 'center',
  },

  counterItem: {
    textAlign: 'center',
    color: 'white',
    transition: 'all 0.3s ease',
    animation: '$fadeInUp 0.6s ease-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-0.625rem)', // -10px
      '& $counterLine': {
        width: '5rem', // 80px
      },
      '& $counterNumber': {
        textShadow: '0 0.25rem 0.5rem rgba(255,255,255,0.4)',
      },
    },
    '&:focus': {
      outline: '2px solid #007bff',
      outlineOffset: '0.5rem',
      borderRadius: '0.25rem',
    },
    '&:nth-child(1)': {
      animationDelay: '0.1s',
    },
    '&:nth-child(2)': {
      animationDelay: '0.2s',
    },
    '&:nth-child(3)': {
      animationDelay: '0.3s',
    },
    '&:nth-child(4)': {
      animationDelay: '0.4s',
    },
  },

  counterNumber: {
    fontSize: '3.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '0.75rem', // 12px
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.3)', // 2px 4px
    animation: '$countUp 0.8s ease-out',
    transition: 'transform 0.3s ease',
    '&:hover': {
      animation: '$pulse 1s ease-in-out infinite',
    },
  },

  counterLabel: {
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.4',
    marginBottom: '1rem', // 16px
    opacity: '0.95',
    textTransform: 'uppercase',
    letterSpacing: '0.03125rem', // 0.5px
  },

  counterLine: {
    width: '3.75rem', // 60px
    height: '0.1875rem', // 3px
    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
    margin: '0 auto',
    borderRadius: '0.125rem', // 2px
    transition: 'width 0.3s ease',
    boxShadow: '0 0 0.5rem rgba(0, 123, 255, 0.5)',
  },

  // Responsive design for counter banner
  '@media (max-width: 1024px)': {
    counterGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.875rem', // 30px
    },
    counterNumber: {
      fontSize: '3rem',
    },
  },

  '@media (max-width: 768px)': {
    counterBanner: {
      minHeight: '350px',
      margin: '40px 0',
    },
    counterGrid: {
      gridTemplateColumns: '1fr',
      gap: '25px',
    },
    counterBannerContent: {
      padding: '40px 20px',
    },
    counterNumber: {
      fontSize: '2.5rem',
    },
    counterLabel: {
      fontSize: '0.9rem',
    },
  },

  '@media (max-width: 480px)': {
    counterBanner: {
      minHeight: '300px',
      margin: '30px 0',
    },
    counterBannerContent: {
      padding: '30px 16px',
    },
    counterNumber: {
      fontSize: '2rem',
    },
    counterLabel: {
      fontSize: '0.8rem',
    },
    counterLine: {
      width: '50px',
      height: '2px',
    },
  },

  // Keyframe animations
  '@keyframes countUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px) scale(0.8)',
    },
    '50%': {
      opacity: 0.8,
      transform: 'translateY(10px) scale(0.9)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0) scale(1)',
    },
  },

  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },

})); 