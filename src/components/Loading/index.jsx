import { UIProvider } from "@yamada-ui/react";
import { Loading as YamadaUILoading } from "@yamada-ui/react";
import "./loading.css";

export const Loading = () => {
  return (
    <UIProvider>
      <div className="centered-loader">
        <YamadaUILoading variant="circles" size="6xl" color="pink.300" />
      </div>
    </UIProvider>
  );
};
