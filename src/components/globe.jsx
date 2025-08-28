import IconCloud from "./ui/icon-cloud";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "amazonaws",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "python",
  "linux",
  "mysql",
  "jenkins",];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
