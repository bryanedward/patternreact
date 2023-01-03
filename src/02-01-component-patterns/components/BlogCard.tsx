import * as React from "react";
import { Details } from "../interface/interface";
import styles from "../styles/styles.module.css";
interface Props {
  children?: React.ReactElement | React.ReactElement[];
  arrayDetails: Details;
}

const context = React.createContext({} as Props);

export const BlogTitleCard = () => {
  const usecontext = React.useContext(context);
  return <div style={{ color: "blue" }}>{usecontext.arrayDetails.name}</div>;
};

export const BlogDescriptionCard = () => {
  const usecontext = React.useContext(context);
  return <div>{usecontext.arrayDetails.description}</div>;
};

export const BlogCard = ({ children, arrayDetails }: Props) => {
  return (
    <context.Provider value={{ arrayDetails }}>
      <div className={styles.blogCard}>{children}</div>
    </context.Provider>
  );
};
