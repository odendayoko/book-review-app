import { Pagination as YamadaUIPagination } from "@yamada-ui/pagination";
import { UIProvider } from "@yamada-ui/react";

export const Pagination = ({ onChange, total }) => {
  return (
    <UIProvider>
      <YamadaUIPagination
        total={total}
        variant="solid"
        size="lg"
        colorScheme="pink"
        siblings={2}
        withEdges
        onChange={onChange}
      />
    </UIProvider>
  );
};
