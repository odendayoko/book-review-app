import { Pagination as YamadaUIPagination } from "@yamada-ui/pagination";

export const Pagination = ({ onChange, total }) => {
  return (
    <YamadaUIPagination
      total={total}
      variant="solid"
      size="lg"
      colorScheme="pink"
      siblings={2}
      withEdges
      onChange={onChange}
    />
  );
};
