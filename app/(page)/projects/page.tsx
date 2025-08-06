import ProjectClient from "@/components/ProjectClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
};

const ProjectsPage = () => {
  return <ProjectClient />;
};
export default ProjectsPage;
