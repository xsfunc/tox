import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Alert, Slide, Snackbar, Badge } from "@mui/material";

export function MessageSnackbar({ message, total, severity, handleClose }) {
  return (
    <Snackbar
      open
      message={message}
      autoHideDuration={3000}
      TransitionComponent={Slide}
      onClose={handleClose}
    >
      <Alert
        icon={
          <Badge badgeContent={total > 1 ? total : null}>
            <NotificationsNoneIcon fontSize="inherit" />
          </Badge>
        }
        variant="filled"
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
