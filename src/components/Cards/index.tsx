import { Grid, GridItem } from "@chakra-ui/react";
import { Card } from "./Card";

export function Cards() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160PX"
      gap={[1, 5]}
    >
      <GridItem>
        <Card icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Card icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Card icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Card icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Card icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
