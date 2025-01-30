import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import NextAppointmentCard from "../components/next-appointment-card";

const Home: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <main style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              paddingBottom: "10px",
              scrollbarWidth: "none",
            }}
          >
            <NextAppointmentCard
              street={"319 Haul  Road"}
              city={"Glencock, WY 12345"}
              date="Nov 18 2021, 17:00"
              roomArea={100}
            />
            {/* <NextAppointmentCard /> */}
            {/* <NextAppointmentCard /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
