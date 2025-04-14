import React from "react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { Code2, GitBranch, Leaf, Server, BadgePercent } from "lucide-react";

const skills = [
  { name: "React", level: 60, icon: <Code2 className="text-[#61dafb]" /> },
  { name: "Node.js", level: 65, icon: <Server className="text-[#3C873A]" /> },
  { name: "MongoDB", level: 45, icon: <Leaf className="text-[#47A248]" /> },
  {
    name: "Tailwind CSS",
    level: 75,
    icon: <BadgePercent className="text-[#38BDF8]" />,
  },
  { name: "TypeScript", level: 65, icon: <Code2 className="text-[#3178C6]" /> },
  {
    name: "Git & GitHub",
    level: 80,
    icon: <GitBranch className="text-[#F05032]" />,
  },
];

export const commandData: Record<string, React.ReactNode> = {
  whoami: (
    <>
      <div>Welcome, Guest 👋</div>
      <span>
        Try typing <strong>help</strong> to get list of commands...
      </span>
    </>
  ),
  about: (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-4">
        <img
          src="/assets/ME.jpg"
          alt="Aj7"
          className="h-32 w-30 rounded-full border border-green-500"
        />
        <div>
          <div className="text-lg font-bold">Hi! I'm Aj7</div>
          <div className="text-sm text-green-300">
            Aspiring Full Stack Developer
          </div>
          <div className="text-sm flex flex-col gap-2 text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
            <span className="font-semibold flex flex-row items-center gap-1">
              <Github size={20} />
              <a
                href="https://github.com/aj-seven"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                aj-seven
              </a>
            </span>
            <span className="font-semibold flex flex-row items-center gap-1">
              <Linkedin size={20} />
              <a
                href="https://www.linkedin.com/in/aj-seven/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                Abdul Jaber (Aj7)
              </a>
            </span>
          </div>
        </div>{" "}
      </div>
      <div>
        I'm Abdul Jaber, a student at{" "}
        <a
          href="https://www.sgiet.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold hover:underline"
        >
          SGIT - JNTUK
        </a>
        , a electronics and tech enthusiast. I'm currently learning web
        development and looking forward to becoming a full stack developer.
      </div>
    </div>
  ),
  projects: (
    <>
      🛠️ <span className="font-semibold">Projects:</span>
      <ul className="list-disc ml-4 space-y-2 mt-2">
        <li>
          <span className="font-medium text-accent">PostalMapper</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <ExternalLink />
              <a
                href="https://postal-mapper.vercel.app"
                className="hover:underline text-blue-400"
              >
                Live Demo
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/postal-mapper"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium text-accent">Sketchify</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <ExternalLink />
              <a
                href="https://sketchify-app.vercel.app"
                className="hover:underline text-blue-400"
              >
                Live Demo
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/sketchify"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium text-accent">Task Quest</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <ExternalLink />
              <a
                href="https://task-quest.pages.dev"
                className="hover:underline text-blue-400"
              >
                Live Demo
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/task-quest"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium text-accent">Android-Sysinfo</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/Android-Sysinfo"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  skills: (
    <>
      🚀 <span className="font-semibold">Skills:</span>
      <ul className="mt-2 space-y-3">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="flex items-center gap-2 text-accent font-medium">
                {skill.icon}
                {skill.name}
              </span>
              <span className="text-sm text-muted">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-muted/30 rounded">
              <div
                className="h-full rounded transition-all duration-500"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.icon.props.className?.match(
                    /text-\[#(.+?)\]/
                  )?.[1]
                    ? `#${
                        skill.icon.props.className.match(/text-\[#(.+?)\]/)[1]
                      }`
                    : "#888",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  ),
  contact: (
    <>
      📬 Contact:
      <ul className="ml-2">
        <li>Email: ajseven@outlook.in</li>
        <li>GitHub: github.com/aj-seven</li>
        <li>Twitter: @aj7_dev</li>
      </ul>
    </>
  ),
  source: (
    <>
      📝 Source Code:{" "}
      <a
        href="https://github.com/aj-seven/aj-seven.me"
        target="_blank"
        className="hover:underline text-blue-400"
      >
        Link
      </a>
    </>
  ),
  help: (
    <>
      🧠 Available commands:
      <ul className="list-disc ml-4">
        <li>whoami</li>
        <li>about</li>
        <li>themes</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
        <li>glow on/off</li>
        <li>gui on</li>
        <li>source</li>
        <li>clear</li>
        <li>help</li>
      </ul>
    </>
  ),
};
