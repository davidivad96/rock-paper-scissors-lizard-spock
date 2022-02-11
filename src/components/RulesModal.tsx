import { Box, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import rules from '../../public/image-rules-bonus.svg';

interface Props {
  isSmallDevice: boolean;
  isOpened: boolean;
  onClose: () => void;
}

const RulesModal: React.FunctionComponent<Props> = ({ isSmallDevice, isOpened, onClose }) => {
  return (
    <Modal open={isOpened} onClose={onClose}>
      <Fade in={isOpened} timeout={500}>
        {isSmallDevice ? (
          <Stack
            width="100%"
            height="100%"
            bgcolor="#FFF"
            color="#000"
            p={6}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="hsl(214, 47%, 23%)" fontWeight="bold">
              RULES
            </Typography>
            <img src={rules} alt="rules" />
            <IconButton size="large" onClick={onClose} sx={{ opacity: '0.5' }}>
              <CloseIcon />
            </IconButton>
          </Stack>
        ) : (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            bgcolor="#FFF"
            color="#000"
            p={3}
            sx={{ transform: 'translate(-50%, -50%)' }}
          >
            <Stack direction="row" justifyContent="space-between" mb={5}>
              <Typography variant="h5" color="hsl(214, 47%, 23%)" fontWeight="bold">
                RULES
              </Typography>
              <IconButton onClick={onClose} sx={{ bottom: '3px', opacity: '0.5' }}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <img src={rules} alt="rules" />
          </Box>
        )}
      </Fade>
    </Modal>
  );
};

export default RulesModal;
