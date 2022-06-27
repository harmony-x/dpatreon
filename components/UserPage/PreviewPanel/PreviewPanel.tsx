import { useWeb3React } from "@web3-react/core";
import React from "react";
import { EditProfileHeading } from "../EditProfileHeading/EditProfileHeading";
import { useQuery } from "react-query";
import { getCreators } from "actions";

export const PreviewPanel: React.FC = () => {
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);
  const { library, account } = useWeb3React();

  const creator = data?.filter((c) => c.creatorAddress === account);

      return (
        <>
          <EditProfileHeading
            description="See what your creator page looks like"
            title="Preview"
          />
          {isLoading && creator ? <>Loading...</> : null}
        </>
      )
};
