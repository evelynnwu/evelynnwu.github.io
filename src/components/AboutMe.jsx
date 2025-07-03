import React from "react";
import Popup from "./Popup";

const AboutMe = ({ onClose, id }) => {
  return (
    <Popup title="About Me" onClose={onClose}>
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-yellow-hover font-header">
            Evelyn Wu
          </h3>
          <h4 className="text-lg text-gray-600 font-normal">
            AI + Statistics and Machine Learning @ CMU{" "}
          </h4>
        </div>
        <hr className="text-theme-blue" />

        <div className="overflow-y-auto max-h-80 space-y-3 text-gray-700 font-normal text-[14px]">
          <p>
            Hi! I'm an undergraduate student at CMU pursuing a double major in
            Statistics and Machine Learning + AI. I've had some fun working in
            web development, agent-tool building, and data analysis for my own
            projects and at different internships/programs. My biggest interests
            at the moment are AI Alignment and ML Engineering. {}
          </p>

          <p>
            This summer, I'm intering at a SAAS startup called{" "}
            <a
              href="https://savantlabs.io/"
              target="_blank"
              rel="noopener"
              className="text-theme-lb underline"
            >
              SavantLabs
            </a>
            . I recently built a generic{" "}
            <a
              href="https://www.anthropic.com/news/model-context-protocol"
              target="_blank"
              rel="noopener"
              className="text-theme-lb underline"
            >
              MCP
            </a>
            (Model Context Protocol) server framework that bridges REST APIs
            with the emerging MCP protocol standard.
          </p>

          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-[400] mb-2">
              🛠️ Currently working on: using my MCP infrastructure to build
              platform integration tools to monitor Savant's workflows and
              system status
            </h4>
          </div>

          <div className="border-t pt-3">
            <h3 className="font-bold mb-2">Other Interests:</h3>
            <li>figure skating</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1aA3GDH89UOfNN-FwnLYgpUYO8-R4brqP/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="underline text-theme-lb"
              >
                playing music
              </a>
            </li>
            <li>trying my hands at various crafts</li>
            <li>
              <a
                href="https://www.strava.com/athletes/52131958"
                target="_blank"
                rel="noopener"
                className="underline text-theme-lb"
              >
                running
              </a>
            </li>
            <li>cats! and pets in general</li>
          </div>
          <h4 className="font-semibold mb-2">
            📫 Reach out to me about anything:{" "}
            <a
              href="mailto:evelynwu@andrew.cmu.edu"
              target="_blank"
              rel="noopener"
              className="text-theme-lb underline font-normal"
            >
              evelynwu@andrew.cmu.edu
            </a>
          </h4>
        </div>
      </div>
    </Popup>
  );
};

export default AboutMe;
