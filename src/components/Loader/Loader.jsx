import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => {
  return (
    <>
      <Stack
        sx={{ width: "100%", color: "grey.500" }}
        spacing={2}
      >
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    </>
  );
};

export default Loader;
