const viewerStyles = (width = 800) =>
  theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      [theme.breakpoints.up(width + theme.spacing.unit * 3 * 2)]: {
        width,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    portraitPhotoWrapper: {
      margin: 'auto',
      padding: 10,
    },
    portraitPhoto: {
      width: '100%',
    },
    cardSection: {
      marginTop: 20,
    },
    cardSubsection: {
      width: '100%',
    },
    section: {
      marginTop: 30,
    },
    sectionTitle: {
      textAlign: 'center',
    },
    sectionSubtitle: {
      marginTop: 10,
      textAlign: 'center',
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
  });

export default viewerStyles;
