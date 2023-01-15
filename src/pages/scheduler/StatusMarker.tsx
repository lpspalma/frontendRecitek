import { Box } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";

function statusColor(status: string) {
  if (status === 'AGENDADO') {
    return 'green'
  } else if (status === 'TENTATIVA') {
    return 'warning.main'
  }
  return 'red'

}

export default function statusMarker(status: string) {
  status = status.toUpperCase();

  return (
    <>
      <Box
        component="div"
        display={'inline'}
        padding={'10px 25px 10px 25px'}
        color={colorConfigs.status.color}
        bgcolor={statusColor(status)}
      >
        {status}
      </Box>
    </>

  );
};



