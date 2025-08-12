import { Button, Dialog, DialogActions, DialogTitle, DialogContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface WavelengthContentModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  textObj: Record<string, string>;
  handleContentModalOnConfirmProp: () => void;
}

export function WavelengthContentModal(props: WavelengthContentModalProps) {
  const { show, setShow, handleContentModalOnConfirmProp } = props;
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog data-testid="testId-WavelengthContentModal" open={show} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle alignContent={`center`} id="alert-dialog-title">
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>{props.textObj?.title}</Box>
          <Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography align="center">{props.textObj?.dialog}</Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: `center` }}>
        <Button data-testid={"testId-WavelengthContentModalConfirmButton"} onClick={handleContentModalOnConfirmProp} color={"primary"} variant={"contained"} autoFocus>
          {props.textObj?.purpose}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WavelengthContentModal;
