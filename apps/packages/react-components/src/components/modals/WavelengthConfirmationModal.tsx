import { Modal, Box } from "@mui/material";

interface WavelengthConfirmationModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  textObj: Record<string, string>;

  id?: string;
  width?: string;
  height?: string;
  fontFamily?: string;
  textColor?: string;
  cancelButton?: React.ReactNode;
  submitButton?: React.ReactNode;

  backgroundColor?: string;
}

export function WavelengthConfirmationModal(props: WavelengthConfirmationModalProps) {
  const { show, setShow, id } = props;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: props.width || "451px", // Custom width
          height: props.height || "256px", // Custom height
          boxSizing: "border-box",
          bgcolor: props.backgroundColor || "background.paper",
          borderRadius: "16px",
          color: props.textColor || "black",
          boxShadow: 24,
          padding: "32px",
          overflow: "scroll",
        }}
      >
        <p style={{ margin: "0px", fontSize: "28px", fontWeight: 500, padding: "0px", marginBottom: "16px", fontFamily: props.fontFamily }}>{props.textObj?.title}</p>
        <p style={{ margin: "0px", fontSize: "16px", lineHeight: "19.2px", fontFamily: props.fontFamily, fontWeight: 400, height: "60px" }}>{props.textObj?.dialog}</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px", gap: "8px" }}>
          {props.cancelButton}
          {props.submitButton}
        </div>
      </Box>
    </Modal>
  );
}

WavelengthConfirmationModal.displayName = "WavelengthConfirmationModal";

export default WavelengthConfirmationModal;
