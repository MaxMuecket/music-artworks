export type Search = {
  data: {
    search: {
      artists: {
        edges: [
          {
            node: {
              releaseGroups: {
                edges: [
                  {
                    node: {
                      coverArtArchive: {
                        images: [
                          {
                            image: string;
                          }
                        ];
                      };
                    };
                  }
                ];
              };
            };
          }
        ];
      };
    };
  };
};
