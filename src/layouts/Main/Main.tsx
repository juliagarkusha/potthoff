import React, { FC, PropsWithChildren } from 'react';

// Internal deps
import Header from "components/common/Header";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div>
        <Header />
        <main className="p-4 md:p-10">
          {children}
        </main>
      </div>
  )
};

export default Main;
