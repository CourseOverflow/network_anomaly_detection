import React from "react";
import Layout from "@theme/Layout";
import FileList from "../components/FileList/FileList";
import PieChart from "../components/Charts/PieChart";
import LineChart from "../components/Charts/LineChart";
import BarChart from "../components/Charts/BarChart";
import AreaChart from "../components/Charts/AreaChart";
import FileUploader from "../components/FileUploader/FileUploader";
import CsvGenerator from "../components/CsvGenerator/CsvGenerator";
import TabLayout from "../components/TabLayout/TabLayout";
import { DashboardProvider } from "../context/DashboardContext";
import styles from "./dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <Layout title="Test Network">
      <DashboardProvider>
        <div className={styles.container}>
          <div className={styles.box}>
            <TabLayout
              TabLayout={[
                { label: "Generate", content: <CsvGenerator /> },
                { label: "Upload", content: <FileUploader /> },
              ]}
            />
          </div>
          <div className={styles.box}>
            <h1>Select File For Analysis</h1>
            <FileList />
          </div>
          <div className={styles.box}>
            <h1>Packet Rates</h1>
            <div className={styles.chartContainer}>
              <LineChart />
            </div>
          </div>
          <div className={styles.box}>
            <h1>Traffic Conclusion</h1>
            <div className={styles.chartContainer}>
              <PieChart />
            </div>
          </div>
          <div className={styles.box}>
            <h1>Data Transfer Metrics</h1>
            <div className={styles.chartContainer}>
              <BarChart />
            </div>
          </div>
          <div className={styles.box}>
            <h1>Latency Through Inter-Arrival Times</h1>
            <div className={styles.chartContainer}>
              <AreaChart />
            </div>
          </div>
        </div>
      </DashboardProvider>
    </Layout>
  );
};

export default Dashboard;
