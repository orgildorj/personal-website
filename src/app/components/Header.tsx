import { Container, Grid2, Typography } from "@mui/material";
import Link from "next/link";

function Header() {
  return (
    <Container>
      <Grid2
        container
        paddingY={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 size={1}>
          <Link href="/">
            <Typography fontSize={30} fontWeight="bold">
              {"<OD/>"}
            </Typography>
          </Link>
        </Grid2>
        <Grid2 size={6}>
          <Grid2 container columns={6} justifyContent="flex-end"></Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}

type HeaderButtonProps = {
  to: string;
  text: string;
};

function HeaderButton({ to, text }: HeaderButtonProps) {
  return (
    <Grid2 size={1} display="flex" justifyContent="center">
      <Link href={to}>
        <Typography sx={{ opacity: ".6", "&:hover": { opacity: 1 } }}>
          {text}
        </Typography>
      </Link>
    </Grid2>
  );
}

export default Header;
